import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListCourse } from "../../redux/courseSlice";

const STORAGE_KEY = "layout2_purchasedCourses";

function getPurchasedCourseIds() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

export default function MyCourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const purchasedIds = getPurchasedCourseIds();

    const { CourseList, loading: courseLoading } = useSelector((state) => state.course);
    const [isExpandedContent, setIsExpandedContent] = useState(false);

    // 1. Tìm khóa học hiện tại
    const course = useMemo(
        () => CourseList.find((item) => item.id === Number(id)),
        [CourseList, id]
    );

    // 2. Lấy danh sách bài học từ trong course (đã có sẵn theo API bạn gửi)
    // Sắp xếp theo trường "order" để hiển thị đúng thứ tự học
    const lessons = useMemo(() => {
        if (!course?.Lessons) return [];
        return [...course.Lessons].sort((a, b) => a.order - b.order);
    }, [course]);

    const [selectedLessonId, setSelectedLessonId] = useState(null);

    // 3. Gọi API lấy danh sách khóa học nếu Store trống
    useEffect(() => {
        if (CourseList.length === 0) {
            dispatch(getListCourse());
        }
    }, [dispatch, CourseList.length]);

    // 4. Tự động chọn bài học đầu tiên
    useEffect(() => {
        if (lessons.length > 0 && !selectedLessonId) {
            setSelectedLessonId(lessons[0].id);
        }
    }, [lessons, selectedLessonId]);

    useEffect(() => {
        setIsExpandedContent(false); // Reset trạng thái khi đổi bài học
    }, [selectedLessonId]);

    // 5. Xác định bài học đang hiển thị
    const selectedLesson = useMemo(
        () => lessons.find((l) => l.id === selectedLessonId) || lessons[0],
        [lessons, selectedLessonId]
    );

    // 6. Kiểm tra quyền truy cập
    if (courseLoading && CourseList.length === 0) {
        return <div className="min-h-screen flex items-center justify-center">Đang tải dữ liệu...</div>;
    }

    if (!course || !purchasedIds.includes(course.id)) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 pt-32">
                <div className="max-w-md w-full rounded-[32px] bg-white p-10 text-center shadow-xl border border-slate-100">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p className="text-xl font-bold text-slate-900">Quyền truy cập bị từ chối</p>
                    <button onClick={() => navigate("/layout2/my-courses")} className="mt-8 w-full rounded-2xl bg-[#00bc86] py-4 text-white font-bold">
                        Quay lại khóa học của tôi
                    </button>
                </div>
            </main>
        );
    }

    const getYoutubeId = (url) => {
        if (!url) return "";
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : url;
    };

    return (
        <main className="min-h-screen bg-[#f8fafc] pt-10 pb-16">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-10">

                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <nav className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-3">
                            <Link to="/layout2/my-courses">Khóa học của tôi</Link>
                            <span>/</span>
                            <span className="text-slate-600">{course.title}</span>
                        </nav>
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900">{course.title}</h1>
                    </div>
                    <Link to="/layout2/my-courses" className="rounded-2xl bg-white border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700">
                        Thoát học tập
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    {/* LEFT: VIDEO */}
                    <div className="space-y-6">
                        <div className="rounded-[32px] overflow-hidden bg-black aspect-video shadow-2xl ring-4 ring-white">
                            {selectedLesson ? (
                                <iframe
                                    title={selectedLesson.title}
                                    className="h-full w-full"
                                    src={`https://www.youtube.com/embed/${getYoutubeId(selectedLesson.videoUrl)}?rel=0&modestbranding=1`}
                                    allowFullScreen
                                />
                            ) : (
                                <div className="h-full flex items-center justify-center text-white opacity-50">Không tìm thấy video</div>
                            )}
                        </div>

                        <div className="rounded-[32px] bg-white p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-green-50 text-[#00bc86] text-[10px] font-black uppercase rounded-full">Đang phát</span>
                                <span className="text-sm text-slate-400 italic">Bài số: {selectedLesson?.order}</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">{selectedLesson?.title}</h2>
                            <div className="h-[1px] bg-slate-100 w-full mb-6"></div>
                            <p className="text-slate-600 leading-loose text-[15px]">{selectedLesson?.description}</p>

                            {/* Nút Xem thêm / Thu gọn */}
                            {selectedLesson?.content && (
                                <button
                                    onClick={() => setIsExpandedContent(!isExpandedContent)}
                                    className="mt-4 text-[#00bc86] text-sm font-bold flex items-center gap-1 hover:underline transition-all"
                                >
                                    {isExpandedContent ? "Thu gọn" : "Xem thêm"}
                                    <svg
                                        className={`w-4 h-4 transition-transform ${isExpandedContent ? "rotate-180" : ""}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            )}

                            {/* Phần Content (Chỉ hiển thị khi isExpandedContent = true) */}
                            {isExpandedContent && selectedLesson?.content && (
                                <div className="mt-6 pt-6 border-t border-dashed border-slate-200 animate-fadeIn">
                                    <h4 className="text-slate-900 font-bold mb-3">Nội dung chi tiết:</h4>
                                    <div className="text-slate-500 leading-relaxed text-sm whitespace-pre-line">
                                        {selectedLesson.content}
                                    </div>
                                </div>
                            )}

                            {/* Course Progress Mini Info */}
                            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-50">
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Thời lượng</p>
                                    <p className="font-bold text-slate-700">{selectedLesson.duration}</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Cấp độ</p>
                                    <p className="font-bold text-slate-700">{course.level}</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Hình thức</p>
                                    <p className="font-bold text-slate-700">Online</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Hỗ trợ</p>
                                    <p className="font-bold text-slate-700">Trực tiếp</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: PLAYLIST */}
                    <aside className="space-y-6">
                        <div className="rounded-[32px] bg-white shadow-xl border border-slate-100 flex flex-col max-h-[calc(100vh-140px)]">
                            <div className="p-6 border-b border-slate-50">
                                <h3 className="text-lg font-black text-slate-900">Danh sách bài học</h3>
                                <p className="text-xs font-bold text-slate-400 mt-1 uppercase">{lessons.length} bài giảng</p>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {lessons.map((lesson, index) => (
                                    <button
                                        key={lesson.id}
                                        onClick={() => setSelectedLessonId(lesson.id)}
                                        className={`w-full flex items-start gap-4 rounded-2xl p-4 transition-all ${selectedLessonId === lesson.id ? "bg-[#00bc86] shadow-lg" : "hover:bg-slate-50"
                                            }`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-black ${selectedLessonId === lesson.id ? "bg-white text-[#00bc86]" : "bg-slate-100 text-slate-400"
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <div className="text-left flex-1">
                                            <p className={`text-[13px] font-bold leading-snug line-clamp-2 ${selectedLessonId === lesson.id ? "text-white" : "text-slate-700"
                                                }`}>
                                                {lesson.title}
                                            </p>
                                            <p className={`text-[11px] mt-1 italic ${selectedLessonId === lesson.id ? "text-white/70" : "text-slate-400"
                                                }`}>
                                                Xem bài giảng
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Support Widget */}
                        <div className="rounded-[32px] bg-gradient-to-br from-[#02173e] to-[#083177] p-8 text-white shadow-xl shadow-blue-900/20">
                            <h4 className="font-black text-lg mb-2">Bạn cần hỗ trợ?</h4>
                            <p className="text-xs text-white/60 mb-6 leading-relaxed">Nếu gặp vấn đề khi xem bài giảng hoặc cần giải đáp kiến thức, hãy nhắn cho chúng tôi.</p>
                            <a href="tel:0906092098" className="flex items-center justify-center gap-2 bg-[#ff9000] hover:bg-[#e68000] py-3 rounded-2xl font-bold text-sm transition-all active:scale-95">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                Liên hệ kĩ thuật
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
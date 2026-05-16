import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListCourse } from "../../redux/courseSlice";
import { ApiManager } from "../../apis/ApiManager.js";
import { getVideoWatchUrl } from "../../utils/constants.js";

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

    // Lấy trạng thái từ Redux
    const { CourseList, loading: courseLoading } = useSelector((state) => state.course);

    const [isExpandedContent, setIsExpandedContent] = useState(false);
    const [selectedLessonId, setSelectedLessonId] = useState(null);
    const [videoToken, setVideoToken] = useState("");
    const [videoLoading, setVideoLoading] = useState(false);
    const [videoError, setVideoError] = useState("");
    const [isInitialLoading, setIsInitialLoading] = useState(true);

    // 1. Khởi tạo dữ liệu khóa học
    const course = useMemo(() => {
        return CourseList.find((item) => String(item.id) === String(id));
    }, [CourseList, id]);

    const lessons = useMemo(() => {
        if (!course?.Lessons) return [];
        return [...course.Lessons].sort((a, b) => (a.order || 0) - (b.order || 0));
    }, [course]);

    const selectedLesson = useMemo(() => {
        return lessons.find((l) => l.id === selectedLessonId) || lessons[0];
    }, [lessons, selectedLessonId]);

    // 2. Gọi API lấy dữ liệu nếu chưa có
    useEffect(() => {
        if (CourseList.length === 0) {
            dispatch(getListCourse()).finally(() => setIsInitialLoading(false));
        } else {
            setIsInitialLoading(false);
        }
    }, [dispatch, CourseList.length]);

    // 3. Tự động chọn bài học đầu tiên
    useEffect(() => {
        if (lessons.length > 0 && !selectedLessonId) {
            setSelectedLessonId(lessons[0].id);
        }
    }, [lessons, selectedLessonId]);

    // 4. Lấy Video Token
    useEffect(() => {
        const loadVideoToken = async () => {
            if (!selectedLesson?.id) return;

            setVideoLoading(true);
            setVideoError("");
            try {
                const response = await ApiManager.post("/video/token", {
                    lessonId: selectedLesson.id,
                });

                if (response?.DT?.token) {
                    setVideoToken(response.DT.token);
                } else {
                    setVideoError(response?.EM || "Không thể lấy token video.");
                }
            } catch (error) {
                setVideoError("Lỗi kết nối server.");
            } finally {
                setVideoLoading(false);
            }
        };

        loadVideoToken();
    }, [selectedLesson?.id]);

    // --- LOGIC ĐIỀU HƯỚNG QUAN TRỌNG ---

    // Nếu đang tải dữ liệu lần đầu, chặn render nội dung để không bị check nhầm điều kiện !course
    if (isInitialLoading || (courseLoading && CourseList.length === 0)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-[#00bc86] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 font-medium">Đang xác thực quyền truy cập...</p>
                </div>
            </div>
        );
    }

    // Sau khi đã tải xong (isInitialLoading = false) mà vẫn không thấy course
    if (!course || !purchasedIds.includes(course.id)) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full rounded-[32px] bg-white p-10 text-center shadow-xl border border-slate-100">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p className="text-xl font-bold text-slate-900">Nội dung không khả dụng</p>
                    <p className="text-slate-500 mt-2 text-sm">Khóa học không tồn tại hoặc bạn chưa đăng ký tham gia khóa học này.</p>
                    <button onClick={() => navigate("/layout2/my-courses")} className="mt-8 w-full rounded-2xl bg-[#00bc86] py-4 text-white font-bold">
                        Quay lại danh sách
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#f8fafc] pt-10 pb-16">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
                {/* Breadcrumb & Title */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <nav className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-3">
                            <Link to="/layout2/my-courses" className="hover:text-[#00bc86]">Khóa học của tôi</Link>
                            <span>/</span>
                            <span className="text-slate-600 line-clamp-1">{course.title}</span>
                        </nav>
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900">{course.title}</h1>
                    </div>
                    <Link to="/layout2/my-courses" className="rounded-2xl bg-white border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                        Thoát học tập
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    <div className="space-y-6">
                        {/* Player Area */}
                        <div className="rounded-[32px] overflow-hidden bg-black aspect-video shadow-2xl ring-4 ring-white relative">
                            {videoLoading ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-white">
                                    <p className="animate-pulse">Đang tải luồng video...</p>
                                </div>
                            ) : videoError ? (
                                <div className="h-full flex items-center justify-center text-white/60 bg-slate-800 p-10 text-center">
                                    {videoError}
                                </div>
                            ) : selectedLesson && videoToken ? (
                                <iframe
                                    title={selectedLesson.title}
                                    className="h-full w-full"
                                    src={getVideoWatchUrl(videoToken)}
                                    allowFullScreen
                                />
                            ) : (
                                <div className="h-full flex items-center justify-center text-white/20">Chọn bài học để bắt đầu</div>
                            )}
                        </div>

                        {/* Lesson Info */}
                        <div className="rounded-[32px] bg-white p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-green-50 text-[#00bc86] text-[10px] font-black uppercase rounded-full">Đang học</span>
                                <span className="text-sm text-slate-400 italic">Bài {selectedLesson?.order}</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">{selectedLesson?.title}</h2>
                            <p className="text-slate-600 leading-loose text-[15px]">{selectedLesson?.description}</p>

                            {selectedLesson?.content && (
                                <>
                                    <button
                                        onClick={() => setIsExpandedContent(!isExpandedContent)}
                                        className="mt-4 text-[#00bc86] text-sm font-bold flex items-center gap-1"
                                    >
                                        {isExpandedContent ? "Thu gọn" : "Xem nội dung chi tiết"}
                                        <svg className={`w-4 h-4 transition-transform ${isExpandedContent ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isExpandedContent && (
                                        <div className="mt-6 p-6 bg-slate-50 rounded-2xl text-sm text-slate-600 whitespace-pre-line border border-slate-100">
                                            {selectedLesson.content}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Playlist */}
                    <aside className="space-y-6">
                        <div className="rounded-[32px] bg-white shadow-xl border border-slate-100 flex flex-col max-h-[70vh] sticky top-6">
                            <div className="p-6 border-b border-slate-50">
                                <h3 className="text-lg font-black text-slate-900">Nội dung khóa học</h3>
                                <p className="text-xs font-bold text-slate-400 mt-1 uppercase">{lessons.length} bài giảng</p>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {lessons.map((lesson, index) => (
                                    <button
                                        key={lesson.id}
                                        onClick={() => setSelectedLessonId(lesson.id)}
                                        className={`w-full flex items-start gap-4 rounded-2xl p-4 transition-all ${selectedLessonId === lesson.id ? "bg-[#00bc86] text-white shadow-lg shadow-green-200" : "hover:bg-slate-50"
                                            }`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-black ${selectedLessonId === lesson.id ? "bg-white text-[#00bc86]" : "bg-slate-100 text-slate-400"
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <div className="text-left flex-1">
                                            <p className="text-[13px] font-bold leading-snug line-clamp-2">{lesson.title}</p>
                                            <p className={`text-[11px] mt-1 ${selectedLessonId === lesson.id ? "text-white/80" : "text-slate-400"}`}>
                                                {lesson.duration || "Video"}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="rounded-[32px] bg-[#02173e] p-8 text-white shadow-xl">
                            <h4 className="font-black text-lg mb-2">Hỗ trợ kỹ thuật</h4>
                            <p className="text-xs text-white/50 mb-6">Nếu video không tải được, vui lòng liên hệ hotline để được hỗ trợ ngay.</p>
                            <a href="tel:0906092098" className="flex items-center justify-center gap-2 bg-[#ff9000] py-3 rounded-2xl font-bold text-sm">
                                Gọi hỗ trợ: 0906 092 098
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
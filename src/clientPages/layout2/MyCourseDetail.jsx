import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { courses } from "./courseData";

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
    const purchasedIds = getPurchasedCourseIds();
    
    const course = useMemo(
        () => courses.find((item) => item.id === Number(id)),
        [id]
    );

    const [selectedLessonId, setSelectedLessonId] = useState(
        course?.lessons?.[0]?.id || null
    );

    if (!course || !purchasedIds.includes(course.id)) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 pt-32">
                <div className="max-w-md w-full rounded-[32px] bg-white p-10 text-center shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p className="text-xl font-bold text-slate-900">Quyền truy cập bị từ chối</p>
                    <p className="mt-3 text-slate-500 text-sm leading-relaxed">Bạn chưa mua khóa học này hoặc nội dung không còn tồn tại trên hệ thống.</p>
                    <button
                        onClick={() => navigate("/layout2/my-courses")}
                        className="mt-8 w-full rounded-2xl bg-[#00bc86] py-4 text-white font-bold hover:bg-[#00a874] transition-all shadow-lg shadow-green-500/20"
                    >
                        Quay lại khóa học của tôi
                    </button>
                </div>
            </main>
        );
    }

    const selectedLesson = course.lessons?.find((l) => l.id === selectedLessonId) || course.lessons?.[0];

    return (
        <main className="min-h-screen bg-[#f8fafc] pt-10 pb-16">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
                
                {/* Header Section */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                            <Link to="/layout2/my-courses" className="hover:text-[#00bc86] transition-colors">Khóa học của tôi</Link>
                            <span>/</span>
                            <span className="text-slate-600 line-clamp-1">{course.title}</span>
                        </nav>
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                            {course.title}
                        </h1>
                    </div>
                    <Link
                        to="/layout2/my-courses"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 hover:border-[#00bc86] hover:text-[#00bc86] transition-all shadow-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Thoát học tập
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    
                    {/* LEFT COLUMN: VIDEO PLAYER & CONTENT */}
                    <div className="space-y-6">
                        {/* Video Frame */}
                        <div className="rounded-[32px] overflow-hidden bg-black shadow-2xl ring-4 ring-white shadow-slate-300/50 aspect-video">
                            {selectedLesson ? (
                                <iframe
                                    title={selectedLesson.title}
                                    className="h-full w-full"
                                    src={`https://www.youtube.com/embed/${selectedLesson.youtubeId}?rel=0&modestbranding=1`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="h-full flex items-center justify-center text-white opacity-50">Đang tải video...</div>
                            )}
                        </div>

                        {/* Lesson Info */}
                        <div className="rounded-[32px] bg-white p-8 md:p-10 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-green-50 text-[#00bc86] text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100">
                                    Đang phát
                                </span>
                                <span className="text-sm text-slate-400 font-medium italic">Bài {course.lessons?.indexOf(selectedLesson) + 1}</span>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">{selectedLesson?.title}</h2>
                            <div className="h-[1px] bg-slate-100 w-full mb-6"></div>
                            <p className="text-slate-600 leading-loose text-[15px]">{selectedLesson?.description}</p>
                            
                            {/* Course Progress Mini Info */}
                            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-50">
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Thời lượng</p>
                                    <p className="font-bold text-slate-700">{course.duration}</p>
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

                    {/* RIGHT COLUMN: PLAYLIST */}
                    <aside className="space-y-6">
                        <div className="rounded-[32px] bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col top-28 max-h-[calc(100vh-140px)]">
                            <div className="p-6 border-b border-slate-50">
                                <h3 className="text-lg font-black text-slate-900">Danh sách bài học</h3>
                                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
                                    {course.lessons?.length} nội dung bài giảng
                                </p>
                            </div>
                            
                            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                                {course.lessons?.map((lesson, index) => (
                                    <button
                                        key={lesson.id}
                                        onClick={() => setSelectedLessonId(lesson.id)}
                                        className={`group w-full flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 ${
                                            selectedLessonId === lesson.id 
                                            ? "bg-[#00bc86] shadow-lg shadow-green-500/20 translate-x-1" 
                                            : "hover:bg-slate-50"
                                        }`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-black transition-colors ${
                                            selectedLessonId === lesson.id ? "bg-white text-[#00bc86]" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                        }`}>
                                            {index + 1}
                                        </div>
                                        <div className="text-left flex-1 min-w-0">
                                            <p className={`text-[13px] font-bold transition-colors leading-snug line-clamp-2 ${
                                                selectedLessonId === lesson.id ? "text-white" : "text-slate-700"
                                            }`}>
                                                {lesson.title}
                                            </p>
                                            <p className={`text-[11px] mt-1 italic ${
                                                selectedLessonId === lesson.id ? "text-white/70" : "text-slate-400"
                                            }`}>
                                                Xem bài giảng
                                            </p>
                                        </div>
                                        {selectedLessonId === lesson.id && (
                                            <div className="text-white animate-pulse shrink-0 self-center">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                                            </div>
                                        )}
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
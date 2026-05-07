import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const lessons = [
    {
        id: 1,
        title: "Khởi nghiệp KDOL - Bài 1: Tư duy kinh doanh online",
        description: "Hiểu rõ mindset cần thiết để thành công trong kinh doanh online. Bài giảng này sẽ giúp bạn thay đổi cách nghĩ về kinh doanh.",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        duration: "45:30",
        videoId: "dQw4w9WgXcQ",
        category: "Khởi nghiệp",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Tư duy kinh doanh online khác gì kinh doanh truyền thống</li>
                <li>Mindset của một nhà kinh doanh online thành công</li>
                <li>Các rủi ro và cơ hội trong KDOL</li>
                <li>Xây dựng kế hoạch kinh doanh cá nhân</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Viết ra 3 ý tưởng kinh doanh online của bạn</li>
                <li>Phân tích điểm mạnh/yếu của mỗi ý tưởng</li>
                <li>Chọn 1 ý tưởng và lập kế hoạch 3 tháng đầu</li>
            </ol>
        `,
        nextLesson: 2,
        prevLesson: null
    },
    {
        id: 2,
        title: "Khởi nghiệp KDOL - Bài 2: Xây dựng sản phẩm số đầu tiên",
        description: "Hướng dẫn chi tiết cách tạo ra sản phẩm số đầu tiên của bạn. Từ ý tưởng đến sản phẩm hoàn chỉnh.",
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        duration: "52:15",
        videoId: "jNQXAC9IVRw",
        category: "Khởi nghiệp",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Phân loại sản phẩm số phổ biến</li>
                <li>Quy trình tạo sản phẩm số từ A-Z</li>
                <li>Công cụ thiết kế và sản xuất</li>
                <li>Định giá sản phẩm số hợp lý</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Thiết kế mockup sản phẩm số đầu tiên</li>
                <li>Tạo landing page đơn giản</li>
                <li>Viết mô tả sản phẩm thu hút</li>
            </ol>
        `,
        nextLesson: 3,
        prevLesson: 1
    },
    {
        id: 3,
        title: "Marketing Tiktok - Bài 1: Chiến lược content viral",
        description: "Bí quyết tạo content Tiktok hot, thu hút hàng triệu view và chuyển đổi khách hàng hiệu quả.",
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
        duration: "38:45",
        videoId: "9bZkp7q19f0",
        category: "Tiktok",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Phân tích xu hướng Tiktok 2024</li>
                <li>Công thức tạo video viral</li>
                <li>Kỹ thuật quay phim chuyên nghiệp</li>
                <li>Timing và frequency đăng bài</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Phân tích 5 video viral trong niche của bạn</li>
                <li>Tạo kịch bản cho video đầu tiên</li>
                <li>Quay và edit 1 video theo công thức</li>
            </ol>
        `,
        nextLesson: 4,
        prevLesson: 2
    },
    {
        id: 4,
        title: "Marketing Tiktok - Bài 2: Tiktok Shop bán hàng tự động",
        description: "Setup gian hàng Tiktok Shop chuyên nghiệp và tối ưu tỷ lệ chuyển đổi từ live stream.",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        duration: "41:20",
        videoId: "dQw4w9WgXcQ",
        category: "Tiktok",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Setup gian hàng Tiktok Shop</li>
                <li>Tối ưu product listing</li>
                <li>Chiến lược live stream bán hàng</li>
                <li>Quản lý đơn hàng tự động</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Setup gian hàng Tiktok Shop</li>
                <li>Upload 5 sản phẩm đầu tiên</li>
                <li>Tổ chức buổi live stream thử nghiệm</li>
            </ol>
        `,
        nextLesson: 5,
        prevLesson: 3
    },
    {
        id: 5,
        title: "Xây kênh Youtube - Bài 1: Content strategy 2024",
        description: "Chiến lược nội dung Youtube hiệu quả, tối ưu SEO và tăng trưởng kênh bền vững.",
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        duration: "49:10",
        videoId: "jNQXAC9IVRw",
        category: "Youtube",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Phân tích thị trường Youtube 2024</li>
                <li>Xây dựng content pillar</li>
                <li>SEO Youtube tối ưu</li>
                <li>Content calendar hàng tháng</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Nghiên cứu keyword trong niche</li>
                <li>Lập content strategy 3 tháng</li>
                <li>Tạo content calendar</li>
            </ol>
        `,
        nextLesson: 6,
        prevLesson: 4
    },
    {
        id: 6,
        title: "Xây kênh Youtube - Bài 2: Thu nhập từ Youtube",
        description: "Các nguồn doanh thu từ kênh Youtube và cách tối ưu hóa lợi nhuận hàng tháng.",
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
        duration: "35:55",
        videoId: "9bZkp7q19f0",
        category: "Youtube",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Các nguồn thu nhập từ Youtube</li>
                <li>YPP và AdSense tối ưu</li>
                <li>Monetization ngoài AdSense</li>
                <li>Tính toán lợi nhuận thực tế</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Tính toán lợi nhuận tiềm năng</li>
                <li>Đăng ký YPP và setup AdSense</li>
                <li>Lên kế hoạch đa dạng hóa thu nhập</li>
            </ol>
        `,
        nextLesson: 7,
        prevLesson: 5
    },
    {
        id: 7,
        title: "Facebook Marketing - Bài 1: Fanpage bán hàng tự động",
        description: "Quản lý fanpage chuyên nghiệp, tự động hóa chăm sóc khách hàng và tăng đơn hàng.",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        duration: "43:25",
        videoId: "dQw4w9WgXcQ",
        category: "Facebook",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Setup fanpage bán hàng</li>
                <li>Tự động hóa tương tác</li>
                <li>Content strategy cho fanpage</li>
                <li>Messenger marketing hiệu quả</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Setup fanpage chuyên nghiệp</li>
                <li>Cài đặt auto-reply</li>
                <li>Tạo content strategy 1 tháng</li>
            </ol>
        `,
        nextLesson: 8,
        prevLesson: 6
    },
    {
        id: 8,
        title: "Facebook Marketing - Bài 2: Facebook Ads chuyển đổi cao",
        description: "Chiến lược chạy quảng cáo Facebook hiệu quả, tối ưu budget và tăng ROI.",
        thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
        duration: "47:40",
        videoId: "jNQXAC9IVRw",
        category: "Facebook",
        progress: 0,
        isCompleted: false,
        content: `
            <h3>Nội dung bài học:</h3>
            <ul>
                <li>Cơ bản về Facebook Ads</li>
                <li>Targeting khách hàng tiềm năng</li>
                <li>Tối ưu creative và copy</li>
                <li>Tracking và tối ưu campaign</li>
            </ul>

            <h3>Bài tập thực hành:</h3>
            <ol>
                <li>Chạy campaign test $50</li>
                <li>Phân tích kết quả và tối ưu</li>
                <li>Scale up campaign thành công</li>
            </ol>
        `,
        nextLesson: null,
        prevLesson: 7
    }
];

const CommentSection = ({ lessonId }) => {
    const [comments, setComments] = useState([
        { id: 1, author: "Nguyễn Văn A", avatar: "A", text: "Bài giảng rất hay, mình đã hiểu rõ hơn nhiều sau khi xem!", time: "2 ngày trước" },
        { id: 2, author: "Trần Thị B", avatar: "B", text: "Cảm ơn thầy, phần thực hành rất chi tiết và dễ làm theo.", time: "1 ngày trước" },
    ]);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        const trimmed = newComment.trim();
        if (!trimmed) return;
        setComments(prev => [
            ...prev,
            {
                id: Date.now(),
                author: localStorage.getItem('userEmail') || "Bạn",
                avatar: (localStorage.getItem('userEmail') || "B")[0].toUpperCase(),
                text: trimmed,
                time: "Vừa xong",
            }
        ]);
        setNewComment("");
    };

    return (
        <div className="space-y-4">
            {/* Existing comments */}
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {comments.map(c => (
                    <div key={c.id} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                            {c.avatar}
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-lg px-3 py-2">
                            <div className="flex items-baseline justify-between mb-1">
                                <span className="text-xs font-semibold text-gray-800">{c.author}</span>
                                <span className="text-[10px] text-gray-400">{c.time}</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-snug">{c.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* New comment input */}
            <div className="flex gap-2 pt-2 border-t border-gray-100">
                <textarea
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAddComment(); } }}
                    placeholder="Viết bình luận..."
                    rows={2}
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                />
                <button
                    onClick={handleAddComment}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition-colors self-end"
                    title="Gửi"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const LessonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null);

    useEffect(() => {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/layout1/login');
            return;
        }

        // Find lesson by id
        const foundLesson = lessons.find(l => l.id === parseInt(id));
        if (foundLesson) {
            setLesson(foundLesson);
        } else {
            navigate('/layout1/lessons');
        }
    }, [id, navigate]);

    const handleNext = () => {
        if (lesson.nextLesson) {
            navigate(`/layout1/lessons/${lesson.nextLesson}`);
        }
    };

    const handlePrev = () => {
        if (lesson.prevLesson) {
            navigate(`/layout1/lessons/${lesson.prevLesson}`);
        }
    };

    if (!lesson) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="flex mb-6" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/layout1/lessons" className="text-gray-700 hover:text-orange-600">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 011.414 1.414L2 12.414V19a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-9-9z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{lesson.category}</span>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Bài {lesson.id}</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Video Player */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="aspect-video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0`}
                                    title={lesson.title}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Lesson Info */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
                                    <p className="text-gray-600 mb-4">{lesson.description}</p>
                                </div>
                                <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                                    {lesson.category}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {lesson.duration}
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Video HD
                                </div>
                            </div>

                            {/* Lesson Content */}
                            <div className="prose prose-sm max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Related Lessons */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Bài học liên quan</h3>
                            <div className="space-y-3">
                                {lessons
                                    .filter(l => l.category === lesson.category && l.id !== lesson.id)
                                    .slice(0, 3)
                                    .map((relatedLesson) => (
                                        <Link
                                            key={relatedLesson.id}
                                            to={`/layout1/lessons/${relatedLesson.id}`}
                                            className="block p-3 rounded-lg border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition-colors"
                                        >
                                            <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                                                {relatedLesson.title}
                                            </h4>
                                            <p className="text-xs text-gray-500">{relatedLesson.duration}</p>
                                        </Link>
                                    ))}
                            </div>
                        </div>

                        {/* Comments */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4z" />
                                </svg>
                                Bình luận bài giảng
                            </h3>

                            {/* Comment list */}
                            <CommentSection lessonId={lesson.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonDetail;
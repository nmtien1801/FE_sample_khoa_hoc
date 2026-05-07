import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        isCompleted: false
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
        isCompleted: false
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
        isCompleted: false
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
        isCompleted: false
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
        isCompleted: false
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
        isCompleted: false
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
        isCompleted: false
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
        isCompleted: false
    }
];

const categories = ["Tất cả", "Khởi nghiệp", "Tiktok", "Youtube", "Facebook"];

const LessonCard = ({ lesson }) => {
    return (
        <Link
            to={`/layout1/lessons/${lesson.id}`}
            className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full"
        >
            <div className="relative">
                <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {lesson.duration}
                </div>
                {lesson.isCompleted && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                        ✓ Hoàn thành
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                        {lesson.category}
                    </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {lesson.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {lesson.description}
                </p>
            </div>
        </Link>
    );
};

const LessonsList = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [searchQuery, setSearchQuery] = useState(""); // State cho thanh tìm kiếm
    const [filteredLessons, setFilteredLessons] = useState(lessons);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            navigate('/layout1/login');
            return;
        }

        // Logic lọc kết hợp Category và Search Query
        let result = lessons;

        if (selectedCategory !== "Tất cả") {
            result = result.filter(lesson => lesson.category === selectedCategory);
        }

        if (searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase();
            result = result.filter(lesson =>
                lesson.title.toLowerCase().includes(query) ||
                lesson.description.toLowerCase().includes(query)
            );
        }

        setFilteredLessons(result);
    }, [selectedCategory, searchQuery, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        navigate('/layout1/login');
    };

    return (
        <div className="min-h-screen bg-[#f9fafb] pt-24">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-extrabold text-[#02173e] mb-2 tracking-tight">Kho bài giảng KDOL</h1>
                        <p className="text-gray-500">Học tập và phát triển kỹ năng kinh doanh online thực chiến</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                        <div className="px-3">
                            <p className="text-[10px] uppercase font-bold text-gray-400">Tài khoản</p>
                            <p className="text-sm font-semibold text-gray-700">{localStorage.getItem('userEmail')}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="bg-red-50 text-red-600 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all"
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col gap-6 mb-10">

                    {/* Dòng 1: Thanh tìm kiếm (Full width) */}
                    <div className="relative group w-full">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Bạn muốn học gì hôm nay? (VD: Tiktok, Facebook...)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-14 pr-12 py-5 bg-white border border-gray-200 rounded-2xl text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 shadow-sm transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Dòng 2: Danh mục lựa chọn */}
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-7 py-3 rounded-xl text-sm font-bold transition-all border ${selectedCategory === category
                                            ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                                            : "bg-white text-gray-600 border-gray-200 hover:border-orange-500 hover:text-orange-500"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm text-gray-500 font-medium">
                        Hiển thị <span className="text-gray-900 font-bold">{filteredLessons.length}</span> bài giảng
                    </p>
                </div>

                {/* Lessons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredLessons.map((lesson) => (
                        <LessonCard key={lesson.id} lesson={lesson} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredLessons.length === 0 && (
                    <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100 mt-8">
                        <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-[#02173e]">Không tìm thấy bài giảng</h3>
                        <p className="text-gray-500 mt-1 max-w-xs mx-auto">Thử tìm kiếm với từ khóa khác hoặc thay đổi danh mục đang chọn.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("Tất cả") }}
                            className="mt-6 text-orange-500 font-bold hover:underline"
                        >
                            Xóa tất cả bộ lọc
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonsList;
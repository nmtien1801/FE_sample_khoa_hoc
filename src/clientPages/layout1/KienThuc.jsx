import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";

const categories = [
    { label: "Khởi nghiệp", href: "/layout1/kien-thuc/khoi-nghiep", slug: "khoi-nghiep" },
    { label: "Tiktok", href: "/layout1/kien-thuc/tiktok", slug: "tiktok" },
    { label: "Youtube", href: "/layout1/kien-thuc/youtube", slug: "youtube" },
    { label: "Facebook", href: "/layout1/kien-thuc/facebook", slug: "facebook" },
    { label: "Website", href: "/layout1/kien-thuc/website", slug: "website" },
];

const postsByCategory = {
    "khoi-nghiep": [
        {
            id: 1,
            title: "Kiến thức nền tảng để bắt đầu kinh doanh online KDOL nhanh chóng",
            excerpt: "Tìm hiểu các bước chuẩn bị, xây dựng mindset và hướng đi đúng đắn trong kinh doanh online...",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4-300x166.jpeg",
            href: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Xây dựng kế hoạch kinh doanh 5 năm vững chắc",
            excerpt: "Chiến lược dài hạn để phát triển doanh nghiệp bền vững và tạo lợi nhuận ổn định.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-300x184.jpeg",
            href: "#",
            featured: false,
        },
        {
            id: 3,
            title: "Tìm nguồn vốn ban đầu cho startup kinh doanh online",
            excerpt: "Các cách huy động vốn hiệu quả khi mới bắt đầu kinh doanh mà không cần vay ngân hàng.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/nhan-dien-thuong-hieu-xay-dung-su-tin-tuong-cua-khach-hang-150x150.jpeg",
            href: "#",
            featured: false,
        },
    ],
    "tiktok": [
        {
            id: 1,
            title: "Chiến lược khai thác Tiktok để gia tăng đơn hàng mỗi ngày",
            excerpt: "Sử dụng nội dung sáng tạo, lịch đăng tải và tối ưu hashtag để tăng tương tác nhanh chóng.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4-300x166.jpeg",
            href: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Tạo video Tiktok viral với ngân sách 0 đồng",
            excerpt: "Kỹ thuật quay phim đơn giản tại nhà và chỉnh sửa video thu hút hàng triệu view.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-300x184.jpeg",
            href: "#",
            featured: false,
        },
        {
            id: 3,
            title: "Tiktok Shop: Từ live stream đến bán hàng thành công",
            excerpt: "Hướng dẫn setup gian hàng và tối ưu tỷ lệ chuyển đổi từ người xem sang khách hàng.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/nhan-dien-thuong-hieu-xay-dung-su-tin-tuong-cua-khach-hang-150x150.jpeg",
            href: "#",
            featured: false,
        },
    ],
    "youtube": [],
    "facebook": [
        {
            id: 1,
            title: "Facebook Marketing: Chiến lược bán hàng hiệu quả 2024",
            excerpt: "Từ tạo fanpage chuyên nghiệp đến chạy quảng cáo chuyển đổi khách hàng tiềm năng.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4-300x166.jpeg",
            href: "#",
            featured: true,
        },
        {
            id: 2,
            title: "Quản lý nhóm Facebook bán hàng tự động",
            excerpt: "Công cụ và kỹ thuật quản lý nhiều nhóm cùng lúc để tối ưu thời gian.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-300x184.jpeg",
            href: "#",
            featured: false,
        },
        {
            id: 3,
            title: "Messenger Marketing: Tự động hóa chăm sóc khách hàng",
            excerpt: "Setup chatbot thông minh trả lời tự động và tăng tỷ lệ chốt đơn.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/nhan-dien-thuong-hieu-xay-dung-su-tin-tuong-cua-khach-hang-150x150.jpeg",
            href: "#",
            featured: false,
        },
    ],
    "website": [
        {
            id: 1,
            title: "Xây dựng website bán hàng chuyên nghiệp với Shopify",
            excerpt: "Hướng dẫn setup gian hàng online từ A-Z với chi phí tối ưu và dễ sử dụng.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4-300x166.jpeg",
            href: "#",
            featured: true,
        },
        {
            id: 2,
            title: "WordPress WooCommerce: Từ cài đặt đến bán hàng thành công",
            excerpt: "Tạo website thương mại điện tử với plugin miễn phí và tối ưu tốc độ.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-300x184.jpeg",
            href: "#",
            featured: false,
        },
        {
            id: 3,
            title: "SEO website: Lên top Google trong 3 tháng",
            excerpt: "Chiến lược tối ưu công cụ tìm kiếm giúp website xuất hiện trang đầu.",
            image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/nhan-dien-thuong-hieu-xay-dung-su-tin-tuong-cua-khach-hang-150x150.jpeg",
            href: "#",
            featured: false,
        },
    ],
};

const sidebarItems = [
    {
        title: "Lên kế hoạch nội dung bài bản cho thương hiệu cá nhân",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/mua-ten-mien-thuong-hieu-150x150.jpeg",
        href: "#",
    },
    {
        title: "3 bí quyết chuyển đổi khách hàng qua Facebook Ads hiệu quả",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/dua-nen-tang-thuong-hieu-tham-nhuan-moi-bo-phan-trong-doanh-nghiep-150x150.jpeg",
        href: "#",
    },
    {
        title: "Xây dựng website bán hàng: Tối ưu UX để khách dễ quyết định mua",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/chili-t4-25-ramatthuonghieu-web-1200x625-1-150x150.png",
        href: "#",
    },
    {
        title: "Hướng dẫn chọn sản phẩm phù hợp với thị trường online hiện nay",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4-150x150.jpeg",
        href: "#",
    },
];

function PostCard({ post, isFeatured }) {
    return (
        <Link to={post.href} className="group block h-full">
            <div className={`flex flex-col ${isFeatured ? "lg:flex-row" : ""} h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100`}>

                {/* Hình ảnh */}
                <div className={`relative overflow-hidden ${isFeatured ? "lg:w-3/5 aspect-video lg:aspect-auto" : "aspect-video"}`}>
                    <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    {isFeatured && (
                        <span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                            Mới nhất
                        </span>
                    )}
                </div>

                {/* Nội dung */}
                <div className={`p-6 flex flex-col flex-grow ${isFeatured ? "lg:w-2/5 justify-center" : ""}`}>
                    <h2 className={`${isFeatured ? "text-xl md:text-2xl" : "text-[15px]"} font-bold leading-tight text-[#02173e] group-hover:text-orange-500 transition-colors mb-3`}>
                        {post.title}
                    </h2>
                    <p className={`text-gray-500 leading-relaxed mb-4 ${isFeatured ? "text-sm md:text-base line-clamp-3" : "text-xs line-clamp-2"}`}>
                        {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <span className="text-[11px] font-bold text-orange-500 uppercase tracking-widest">
                            Xem chi tiết →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function KienThuc() {
    const { topic } = useParams();
    if (!topic) {
        return <Navigate to="/layout1/kien-thuc/khoi-nghiep" replace />;
    }
    const activeCategory = categories.find((item) => item.slug === topic);

    // Lấy posts theo category hoặc tất cả posts nếu không có topic
    const currentPosts = topic ? postsByCategory[topic] || [] : Object.values(postsByCategory).flat();

    // Tách bài đầu tiên làm Featured
    const firstPost = currentPosts[0];
    const otherPosts = currentPosts.slice(1);

    return (
        <div className="max-w-[1270px] mx-auto px-4 py-8 pt-28 font-sans">
            {/* Banner notice */}
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 mb-7 text-sm leading-relaxed">
                Nếu bạn quan tâm về{" "}
                <strong className="text-green-700">Bán hàng Online</strong> hoặc{" "}
                <strong className="text-green-700">Xây dựng đội nhóm Kinh doanh Online</strong>, hãy gọi ngay cho chúng tôi:{" "}
                <strong className="text-red-600">0906.092.098</strong> để được tư vấn và hỗ trợ nhanh nhất nhé!
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
                {/* Nội dung chính */}
                <div className="flex-1 min-w-0">
                    {/* 1. Bài to nổi bật */}
                    {firstPost && <div className="mb-10"><PostCard post={firstPost} isFeatured={true} /></div>}

                    {/* 2. Grid các bài nhỏ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherPosts.map((post) => (
                            <PostCard key={post.id} post={post} isFeatured={false} />
                        ))}
                    </div>
                </div>

                <aside className="w-full xl:w-80 shrink-0">
                    <div className="mb-6">
                        <div className="bg-orange-500 text-white px-3 py-2 rounded-t-lg font-semibold text-[15px]">
                            Bài viết mới nhất
                        </div>
                        <div className="border border-t-0 border-gray-200 rounded-b-lg divide-y divide-gray-100">
                            {sidebarItems.map((item, index) => (
                                <a key={index} href={item.href} className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group">
                                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded-md object-cover shrink-0" />
                                    <p className="text-sm text-gray-700 leading-snug group-hover:text-orange-500 transition-colors line-clamp-3">
                                        {item.title}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="bg-orange-500 text-white px-3 py-2 rounded-t-lg font-semibold text-[15px]">
                            Xem nhiều nhất
                        </div>
                        <div className="border border-t-0 border-gray-200 rounded-b-lg">
                            {sidebarItems.map((item, index) => (
                                <a key={index} href={item.href} className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors group border-b border-gray-100 last:border-0">
                                    <span className="text-2xl font-bold text-red-500 w-6 text-right shrink-0 leading-none">{index + 1}</span>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors leading-snug">
                                        {item.title}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
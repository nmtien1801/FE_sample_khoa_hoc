import React from "react";
import { Link, useParams } from "react-router-dom";

const categories = [
    { label: "Khởi nghiệp", href: "/layout1/kien-thuc/khoi-nghiep", slug: "khoi-nghiep" },
    { label: "Tiktok", href: "/layout1/kien-thuc/tiktok", slug: "tiktok" },
    { label: "Youtube", href: "/layout1/kien-thuc/youtube", slug: "youtube" },
    { label: "Facebook", href: "/layout1/kien-thuc/facebook", slug: "facebook" },
    { label: "Website", href: "/layout1/kien-thuc/website", slug: "website" },
];

const posts = [
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
        title: "Chiến lược khai thác Tiktok để gia tăng đơn hàng mỗi ngày",
        excerpt: "Sử dụng nội dung sáng tạo, lịch đăng tải và tối ưu hashtag để tăng tương tác nhanh chóng.",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-300x184.jpeg",
        href: "#",
        featured: false,
    },
    {
        id: 3,
        title: "7 bước xây dựng kênh Youtube thu hút khách hàng và tạo uy tín thương hiệu",
        excerpt: "Tạo nội dung giá trị, dẫn dắt người xem và chuyển đổi họ thành khách hàng trung thành.",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/nhan-dien-thuong-hieu-xay-dung-su-tin-tuong-cua-khach-hang-150x150.jpeg",
        href: "#",
        featured: false,
    },
];

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

function PostCard({ post, featured }) {
    return (
        <a href={post.href} className="group block">
            <div className={`flex ${featured ? "flex-row gap-4" : "flex-col gap-3"} bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100`}>
                <div className={`overflow-hidden ${featured ? "w-[38%] shrink-0" : "w-full"}`}>
                    <img src={post.image} alt={post.title} className={`object-cover w-full group-hover:scale-105 transition-transform duration-300 ${featured ? "h-40" : "h-44"}`} />
                </div>
                <div className="p-4 flex flex-col justify-center gap-2">
                    <h2 className={`font-semibold leading-snug text-[#083177] group-hover:text-orange-500 transition-colors ${featured ? "text-[17px]" : "text-[15px]"}`}>
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <span className="text-sm text-orange-500 italic mt-1">Xem thêm →</span>
                </div>
            </div>
        </a>
    );
}

export default function KienThuc() {
    const { topic } = useParams();
    const activeCategory = categories.find((item) => item.slug === topic);
    const pageTitle = activeCategory ? activeCategory.label : "Kiến thức KDOL";

    return (
        <div className="max-w-[1270px] mx-auto px-4 py-8 pt-28 font-sans">
            <div className="mb-6 rounded-3xl bg-gradient-to-r from-sky-700 via-cyan-600 to-amber-500 p-8 text-white shadow-xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{pageTitle}</h1>
                <p className="max-w-2xl text-sm md:text-base text-slate-100 leading-relaxed">
                    Cập nhật kiến thức thực chiến KDOL, chiến lược kinh doanh online và kỹ thuật tiếp thị số phù hợp với mọi giai đoạn.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            to={category.href}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeCategory?.slug === category.slug ? "bg-white text-slate-900" : "bg-white/10 text-white hover:bg-white/20"}`}
                        >
                            {category.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex gap-7 flex-col xl:flex-row">
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-5">
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} featured={post.featured} />
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

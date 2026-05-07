import React, { useState } from "react";

const posts = [
    {
        id: 1,
        title: "20 ý tưởng kinh doanh online hiệu quả không phải ai cũng biết",
        excerpt: "Những điều cần chú ý nếu muốn kinh doanh online hiệu quả. Kinh doanh online ngày càng trở thành xu hướng...",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4-300x166.jpeg",
        href: "#",
        featured: true,
    },
    {
        id: 2,
        title: "10 bước để kinh doanh online thành công cho người mới bắt đầu",
        excerpt: "Kinh doanh online là một ý tưởng tuyệt vời dành cho những người đam mê...",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-300x184.jpeg",
        href: "#",
        featured: false,
    },
];

const recentPosts = [
    {
        title: "20 ý tưởng kinh doanh online hiệu quả không phải ai cũng biết",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4-150x150.jpeg",
        href: "#",
    },
    {
        title: "10 bước để kinh doanh online thành công cho người mới bắt đầu",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-150x150.jpeg",
        href: "#",
    },
    {
        title: "7 bước xây dựng thương hiệu cho doanh nghiệp nhỏ",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/mua-ten-mien-thuong-hieu-150x150.jpeg",
        href: "#",
    },
    {
        title: "3 Xu Hướng Digital Marketing đỉnh cao trong năm 2021",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/dua-nen-tang-thuong-hieu-tham-nhuan-moi-bo-phan-trong-doanh-nghiep-150x150.jpeg",
        href: "#",
    },
    {
        title: "Tận dụng sàn thương mại điện tử để xây dựng thương hiệu",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/chili-t4-25-ramatthuonghieu-web-1200x625-1-150x150.png",
        href: "#",
    },
    {
        title: "CV của một PR Executive – nhân viên quan hệ công chúng",
        image: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/nhan-dien-thuong-hieu-xay-dung-su-tin-tuong-cua-khach-hang-150x150.jpeg",
        href: "#",
    },
];

const topPosts = [
    { title: "10 bước để kinh doanh online thành công cho người mới bắt đầu", href: "#" },
    { title: "20 ý tưởng kinh doanh online hiệu quả không phải ai cũng biết", href: "#" },
    { title: "7 bước xây dựng thương hiệu cho doanh nghiệp nhỏ", href: "#" },
    { title: "3 Xu Hướng Digital Marketing đỉnh cao trong năm 2021", href: "#" },
    { title: "Tận dụng sàn thương mại điện tử để xây dựng thương hiệu", href: "#" },
    { title: "CV của một PR Executive – nhân viên quan hệ công chúng", href: "#" },
];

function PostCard({ post, isFeatured }) {
    // Nếu là bài nổi bật, cho ảnh và chữ nằm ngang (Flex Row)
    if (isFeatured) {
        return (
            <a href={post.href} className="group block mb-12">
                <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">

                    {/* Hình ảnh (bài to chiếm 60% chiều ngang) */}
                    <div className="md:w-3/5 overflow-hidden relative aspect-video md:aspect-auto">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-4 left-4 bg-[#ff9000] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Nổi bật
                        </span>
                    </div>

                    {/* Nội dung (bài to chiếm 40% chiều ngang) */}
                    <div className="md:w-2/5 p-8 md:p-0 md:pr-8 flex flex-col gap-3">
                        <h2 className="font-extrabold text-2xl lg:text-3xl text-[#02173e] group-hover:text-orange-500 transition-colors leading-tight">
                            {post.title}
                        </h2>
                        <p className="text-[15px] text-gray-600 leading-relaxed line-clamp-3">
                            {post.excerpt}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-orange-500 uppercase tracking-widest border-b-2 border-orange-500/0 group-hover:border-orange-500 transition-all w-fit">
                            Xem chi tiết →
                        </div>
                    </div>
                </div>
            </a>
        );
    }

    // Nếu là bài viết bình thường, cho ảnh và chữ nằm dọc (Flex Col)
    return (
        <a href={post.href} className="group block h-full">
            <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">

                {/* Hình ảnh (tỉ lệ 16:9 đều nhau) */}
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Nội dung */}
                <div className="p-5 flex flex-col flex-grow gap-2">
                    <h2 className="font-bold text-[15px] leading-snug text-[#02173e] group-hover:text-orange-500 transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-xs text-gray-400 font-medium">
                        <span>2 phút đọc</span>
                        <span className="text-orange-500 font-bold uppercase tracking-wide">Xem →</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default function BlogArchive() {
    // Lấy bài viết đầu tiên ra
    const firstPost = posts[0];
    // Lấy các bài viết còn lại từ vị trí thứ 2
    const otherPosts = posts.slice(1);

    return (
        <div className="max-w-[1270px] mx-auto px-4 py-8 font-sans">
            <div className="flex gap-7">

                {/* Main content */}
                <div className="flex-1 min-w-0">

                    {/* Banner notice */}
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 mb-7 text-sm leading-relaxed">
                        Nếu bạn quan tâm về{" "}
                        <strong className="text-green-700">Bán hàng Online</strong> hoặc{" "}
                        <strong className="text-green-700">Xây dựng đội nhóm Kinh doanh Online</strong>, hãy gọi ngay cho chúng tôi:{" "}
                        <strong className="text-red-600">0906.092.098</strong> để được tư vấn và hỗ trợ nhanh nhất nhé!
                    </div>

                    {/* Posts */}
                    {/* 1. BÀI TO NỔI BẬT NẰM NGANG */}
                    {firstPost && <PostCard post={firstPost} isFeatured={true} />}

                    {/* 2. CÁC BÀI CÒN LẠI XẾP GRID 3 CỘT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="w-72 shrink-0 hidden md:block">

                    {/* Recent posts */}
                    <div className="mb-6">
                        <div className="bg-[#00bc86] text-white px-3 py-2 rounded-t-lg font-semibold text-[15px]">
                            Bài viết mới nhất
                        </div>
                        <div className="border border-t-0 border-gray-200 rounded-b-lg divide-y divide-gray-100">
                            {recentPosts.map((p, i) => (
                                <a key={i} href={p.href} className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-12 h-12 rounded-md object-cover shrink-0"
                                    />
                                    <p className="text-sm text-gray-700 leading-snug group-hover:text-orange-500 transition-colors line-clamp-3">
                                        {p.title}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Top viewed */}
                    <div>
                        <div className="bg-[#00bc86] text-white px-3 py-2 rounded-t-lg font-semibold text-[15px]">
                            Bài xem nhiều nhất
                        </div>
                        <div className="border border-t-0 border-gray-200 rounded-b-lg">
                            {topPosts.map((p, i) => (
                                <a
                                    key={i}
                                    href={p.href}
                                    className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors group border-b border-gray-100 last:border-0"
                                >
                                    <span className="text-2xl font-bold text-red-500 w-6 text-right shrink-0 leading-none">
                                        {i + 1}
                                    </span>
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors leading-snug">
                                        {p.title}
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
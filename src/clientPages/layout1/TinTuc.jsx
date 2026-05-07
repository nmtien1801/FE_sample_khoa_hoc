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

function PostCard({ post, featured }) {
  return (
    <a href={post.href} className="group block">
      <div className={`flex ${featured ? "flex-row gap-4" : "flex-col gap-3"} bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100`}>
        <div className={`overflow-hidden ${featured ? "w-[38%] shrink-0" : "w-full"}`}>
          <img
            src={post.image}
            alt={post.title}
            className={`object-cover w-full group-hover:scale-105 transition-transform duration-300 ${featured ? "h-40" : "h-44"}`}
          />
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

export default function BlogArchive() {
  return (
    <div className="max-w-[1270px] mx-auto px-4 py-8 pt-28 font-sans">
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
          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} featured={post.featured} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-72 shrink-0 hidden md:block">

          {/* Recent posts */}
          <div className="mb-6">
            <div className="bg-orange-500 text-white px-3 py-2 rounded-t-lg font-semibold text-[15px]">
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
            <div className="bg-orange-500 text-white px-3 py-2 rounded-t-lg font-semibold text-[15px]">
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
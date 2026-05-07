import React, { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  { icon: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/service_1.webp", title: "Giảng viên uy tín", desc: "Bài học chất lượng" },
  { icon: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/service_2.webp", title: "Thanh toán 1 lần", desc: "Học mãi mãi" },
  { icon: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/service_3.webp", title: "Học trực tuyến", desc: "Hỗ trợ trực tuyến" },
  { icon: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/service_4.webp", title: "Cam kết chất lượng", desc: "Chứng chỉ giáo dục" },
];

const categories = [
  { name: "Kĩ năng ngoại ngữ",       href: "/ki-nang-ngoai-ngu",     img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-1.webp" },
  { name: "Công nghệ thông tin",      href: "/cong-nghe-thong-tin",   img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-7.webp" },
  { name: "Gia đình",                 href: "/gia-dinh",              img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-12.webp" },
  { name: "Kinh doanh khởi nghiệp",  href: "/kinh-doanh-khoi-nghiep",img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-10.webp" },
  { name: "Marketing",               href: "/marketing",              img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-9.webp" },
  { name: "Nhiếp ảnh, quay phim",    href: "/nhiep-anh-quay-phim",   img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-8.webp" },
  { name: "Phát triển cá nhân",      href: "/phat-trien-ca-nhan",    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-2.webp" },
  { name: "Phong cách sống",         href: "/phong-cach-song",       img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-4.webp" },
  { name: "Sales, bán hàng",         href: "/sales-ban-hang",        img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-3.webp" },
  { name: "Sức khỏe, giới tính",     href: "/suc-khoe-gioi-tinh",    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-11.webp" },
  { name: "Thiết kế đồ họa",         href: "/thiet-ke-do-hoa",       img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-5.webp" },
  { name: "Tin học văn phòng",       href: "/tin-hoc-van-phong",     img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/cate-6.webp" },
];

const courses = [
  {
    id: 1,
    title: "Khoá học tải xuống",
    cat: "Khóa học",
    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/wallpaperflare-com-wallpaper-14-600x450.webp",
    href: "/khoa-hoc-tai-xuong",
    price: "569.000₫",
    oldPrice: "1.688.000₫",
    tabs: ["Tất cả", "Tin học văn phòng", "Sale, bán hàng"],
  },
  {
    id: 2,
    title: "Hướng dẫn sử dụng Illustrator cho người mới bắt đầu",
    cat: "Khóa học",
    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/14-600x450.webp",
    href: "/khoa-hoc-su-dung-illutrator-cho-nguoi-moi-bat-dau",
    price: "700.000₫",
    oldPrice: "2.000.000₫",
    tabs: ["Tất cả", "Tin học văn phòng", "Gia đình", "Sale, bán hàng"],
  },
  {
    id: 3,
    title: "Nhiếp ảnh cơ bản cho người mới bắt đầu",
    cat: "Kĩ năng ngoại ngữ",
    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/9-600x450.webp",
    href: "/wo-nhiep-anh-co-ban-cho-nguoi-moi-bat-dau",
    price: "800.000₫",
    oldPrice: "1.600.000₫",
    tabs: ["Tất cả", "Tin học văn phòng", "Gia đình", "Sale, bán hàng"],
  },
  {
    id: 4,
    title: "Làm chủ Canva.com cơ bản và nâng cao",
    cat: "Kĩ năng ngoại ngữ",
    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/7-600x450.webp",
    href: "/lam-chu-canva-com-co-ban-va-nang-cao-2",
    price: "500.000₫",
    oldPrice: "1.000.000₫",
    tabs: ["Tin học văn phòng", "Gia đình", "Sale, bán hàng"],
  },
];

const courseTabs = ["Tất cả", "Tin học văn phòng", "Gia đình", "Sale, bán hàng"];

const reviews = [
  { title: "Tuyệt vời!", text: "Mình thấy ThemeVip có rất nhiều khóa học bổ ích. Học viên được nghe trực tiếp sự giảng dạy của giáo viên, thực hành làm bài tập rất hiệu quả. Giảng viên nhiệt tình và dễ thương.", name: "Mr. Trung Dung", role: "Học viên lớp UI Design" },
  { title: "Tuyệt vời!", text: "Mình thấy ThemeVip có rất nhiều khóa học bổ ích. Học viên được nghe trực tiếp sự giảng dạy của giáo viên, thực hành làm bài tập rất hiệu quả. Giảng viên nhiệt tình và dễ thương.", name: "Mr. Trung Dung", role: "Học viên lớp UI Design" },
  { title: "Tuyệt vời!", text: "Mình thấy ThemeVip có rất nhiều khóa học bổ ích. Học viên được nghe trực tiếp sự giảng dạy của giáo viên, thực hành làm bài tập rất hiệu quả. Giảng viên nhiệt tình và dễ thương.", name: "Mr. Trung Dung", role: "Học viên lớp UI Design" },
];

const aboutPoints = [
  { color: "#f76758", text: "Học mọi lúc, mọi nơi: Với nền tảng học trực tuyến, học sinh có thể học từ bất kỳ đâu, vào thời gian rảnh rỗi, giúp tạo ra môi trường học tập linh hoạt và thuận tiện." },
  { color: "#B398FF", text: "Tiến bộ rõ rệt: Với các bài kiểm tra và bài tập giúp củng cố kiến thức, học sinh có thể thấy được sự tiến bộ rõ rệt trong quá trình học." },
  { color: "#FFC107", text: "Giáo viên tận tâm, chu đáo: Đội ngũ giáo viên của ThemeVip không chỉ giàu kinh nghiệm mà còn rất tận tâm trong việc chăm sóc, hướng dẫn học sinh." },
];

const posts = [
  {
    title: "Bí Quyết Tạo Thu Nhập Thụ Động Không Cần Vốn",
    excerpt: "Trong thời đại kỹ thuật số, nơi những giới hạn về địa lý và thời gian không còn là rào cản...",
    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/wallpaperflare-com-wallpaper-8-300x225.webp",
    href: "/bi-quyet-tao-thu-nhap-thu-dong-khong-can-von",
    day: "16", month: "Th9",
  },
  {
    title: "Vì sao nên chọn học thiết kế đồ họa",
    excerpt: "Vì sao nên học thiết kế đồ hoạ? Nhu cầu xã hội phát triển, số lượng doanh nghiệp ngày càng nhiều...",
    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/wallpaperflare-com-wallpaper-4-300x225.webp",
    href: "/vi-sao-nen-chon-hoc-thiet-ke-do-hoa",
    day: "10", month: "Th10",
  },
  {
    title: "Kinh nghiệm thiết kế website mà bạn nên biết ít nhất 1 lần",
    excerpt: "1. Dễ di chuyển, dễ đọc. Một hệ thống di chuyển rõ ràng, trực quan giúp người dùng nhanh chóng...",
    img: "https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/wallpaperflare-com-wallpaper-14-300x225.webp",
    href: "/kinh-nghiem-thiet-ke-website-ma-ban-nen-biet-it-nhat-1-lan-trong-doi",
    day: "10", month: "Th10",
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 relative inline-block">
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-0 left-0 w-full h-2 bg-[#00bc86]/20 -z-0 rounded" />
      </h2>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <a href={course.href} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-2 left-2 bg-[#00bc86] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          SALE
        </span>
      </div>
      <div className="p-4">
        <p className="text-[11px] font-semibold text-[#00bc86] uppercase tracking-wider mb-1">{course.cat}</p>
        <h3 className="text-sm font-bold text-gray-800 leading-snug mb-3 line-clamp-2 group-hover:text-[#00bc86] transition-colors">
          {course.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-black text-[#f76758]">{course.price}</span>
          <span className="text-xs text-gray-400 line-through">{course.oldPrice}</span>
        </div>
      </div>
    </a>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── SECTIONS ─────────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <section className="w-full bg-[#f5fbf6]">
      <div className="w-full overflow-hidden">
        <img
          src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/slider_edu.webp"
          alt="Banner khóa học"
          className="w-full object-cover hidden md:block"
        />
        <img
          src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/slider_mb_1.webp"
          alt="Banner khóa học mobile"
          className="w-full object-cover md:hidden"
        />
      </div>
    </section>
  );
}

function ServicesBar() {
  return (
    <section className="bg-[#326e51] py-5 border-b border-green-100">
      <div className="max-w-[1190px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="flex items-center gap-3">
              <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain shrink-0 brightness-0 invert" />
              
              <div>
                <p className="text-sm font-bold text-white leading-tight">{s.title}</p>
                <p className="text-xs text-white/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1190px] mx-auto px-4">
        <SectionTitle>Danh mục khóa học</SectionTitle>
        {/* Điều chỉnh gap và số cột linh hoạt */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-y-8 gap-x-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center text-center gap-2 transition-all"
            >
              {/* Thu nhỏ container chứa ảnh: h-16 w-16 hoặc h-20 w-20 */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center border border-transparent group-hover:border-green-400 group-hover:shadow-md transition-all duration-300">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Font chữ nhỏ lại và giới hạn chiều rộng để tránh làm vỡ layout */}
              <span className="text-[11px] sm:text-xs font-bold text-gray-600 group-hover:text-[#00bc86] transition-colors leading-tight max-w-[90px]">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
function CoursesSection({ title }) {
  const [activeTab, setActiveTab] = useState("Tất cả");

  const filtered = courses.filter((c) =>
    activeTab === "Tất cả" ? true : c.tabs.includes(activeTab)
  );

  return (
    <section className="py-10 bg-[#f5fbf6]">
      <div className="max-w-[1190px] mx-auto px-4">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <SectionTitle>{title}</SectionTitle>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {courseTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  activeTab === tab
                    ? "bg-[#00bc86] text-white border-[#00bc86]"
                    : "border-gray-300 text-gray-600 hover:border-[#00bc86] hover:text-[#00bc86]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/danh-sach-khoa-hoc"
            className="inline-block bg-[#00bc86] hover:bg-[#00a874] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm shadow-md hover:shadow-lg"
          >
            Xem tất cả
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const filtered = courses.filter((c) =>
    activeTab === "Tất cả" ? true : c.tabs.includes(activeTab)
  );

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1190px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <SectionTitle>Khóa học nổi bật</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {courseTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  activeTab === tab
                    ? "bg-[#00bc86] text-white border-[#00bc86]"
                    : "border-gray-300 text-gray-600 hover:border-[#00bc86] hover:text-[#00bc86]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <a href="#" className="block rounded-xl overflow-hidden hover:opacity-90 transition-opacity">
            <img src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/banner_featured_1.webp" alt="Banner 1" className="w-full object-cover" />
          </a>
          <a href="#" className="block rounded-xl overflow-hidden hover:opacity-90 transition-opacity">
            <img src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/banner_featured_2.webp" alt="Banner 2" className="w-full object-cover" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/danh-sach-khoa-hoc"
            className="inline-block bg-[#00bc86] hover:bg-[#00a874] text-white font-bold px-8 py-3 rounded-full transition-colors text-sm shadow-md hover:shadow-lg"
          >
            Xem tất cả
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1190px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="lg:w-[55%] shrink-0">
            <img
              src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/banner_about.webp"
              alt="Về ThemeVip"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <p className="text-sm font-bold text-[#00bc86] uppercase tracking-wider mb-2">
              Về ThemeVip
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
              Tại sao nên chọn ThemeVip
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Phụ huynh nên chọn ThemeVip để con em mình có thể học tập trong một môi trường trực tuyến hiện đại,
              dễ tiếp cận và phù hợp với độ tuổi tiểu học. Chúng tôi cung cấp những khóa học được thiết kế đặc
              biệt để phát triển kỹ năng tư duy, sáng tạo và khả năng học hỏi của trẻ.
            </p>
            <ul className="space-y-4 mb-8">
              {aboutPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 512 512" fill={p.color}>
                    <path d="M0 256C0 114.6 114.6 0 256 0c141.4 0 256 114.6 256 256s-114.6 256-256 256S0 397.4 0 256zm371.8-84.2c-10.9-10.9-28.7-10.9-39.6 0L224 280.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.9 10.9-10.9 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128c10.9-10.9 10.9-28.7 0-39.6z"/>
                  </svg>
                  <span className="text-sm text-gray-600 leading-relaxed">{p.text}</span>
                </li>
              ))}
            </ul>
            <a
              href="/danh-sach-khoa-hoc"
              className="inline-flex items-center gap-2 bg-[#00bc86] hover:bg-[#00a874] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Xem tất cả
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="py-12 bg-[#f5fbf6]">
      <div className="max-w-[1190px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left */}
          <div className="lg:w-64 shrink-0">
            <SectionTitle>Review về ThemeVip</SectionTitle>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              ThemeVip mong nhận được những góp ý và phản hồi từ các bạn để không ngừng nâng cao chất lượng khóa học trong tương lai.
            </p>
            <a
              href="#"
              className="inline-block border-2 border-[#00bc86] text-[#00bc86] hover:bg-[#00bc86] hover:text-white font-bold px-5 py-2.5 rounded-full transition-all text-sm"
            >
              Xem tất cả
            </a>
          </div>

          {/* Right: review cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <StarRating />
                  <img
                    src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/dau-phay.webp"
                    alt="quote"
                    className="w-8 h-auto opacity-60"
                  />
                </div>
                <h4 className="font-black text-gray-900 text-base">{r.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{r.text}</p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm font-bold text-gray-800">{r.name}</p>
                  <p className="text-xs text-[#00bc86]">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GoalBannersSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1190px] mx-auto px-4">
        <SectionTitle>Chinh phục mục tiêu của bạn</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4">
            <a href="#" className="block rounded-xl overflow-hidden hover:opacity-90 transition-opacity shadow-sm">
              <img src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/banner_index_1.webp" alt="Banner mục tiêu 1" className="w-full object-cover" />
            </a>
            <a href="#" className="block rounded-xl overflow-hidden hover:opacity-90 transition-opacity shadow-sm">
              <img src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/banner_index_2.webp" alt="Banner mục tiêu 2" className="w-full object-cover" />
            </a>
          </div>
          <a href="#" className="block rounded-xl overflow-hidden hover:opacity-90 transition-opacity shadow-sm">
            <img src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/banner_index_3.webp" alt="Banner mục tiêu 3" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="py-10 bg-[#f5fbf6]">
      <div className="max-w-[1190px] mx-auto px-4">
        <SectionTitle>Bài viết mới</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a key={i} href={post.href} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date badge */}
                <div className="absolute top-3 left-3 bg-[#00bc86] text-white text-center rounded-lg px-2 py-1 min-w-[40px]">
                  <span className="block text-lg font-black leading-none">{post.day}</span>
                  <span className="block text-[10px] font-semibold">{post.month}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-[#00bc86] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <ServicesBar />
      <CategoriesSection />
      <CoursesSection title="Khóa học mới nhất" />
      <FeaturedSection />
      <AboutSection />
      <ReviewsSection />
      <GoalBannersSection />
      <BlogSection />
    </main>
  );
}
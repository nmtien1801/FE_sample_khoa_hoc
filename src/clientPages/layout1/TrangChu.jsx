import React, { useState, useEffect } from "react";


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap');

  :root {
    --primary: #02173e;
    --secondary: #ff9000;
    --text: #2b2b2b;
    --light-bg: #f3f9ff;
  }

  .content {
    font-family: 'Be Vietnam Pro', sans-serif;
    color: var(--text);
    padding-top: 80px;
  }

  /* ===== HERO ===== */
  .hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #00092a 0%, #01173d 50%, #031f52 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 24px 160px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .hero-content { position: relative; max-width: 860px; }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,144,0,0.15);
    border: 1px solid rgba(255,144,0,0.3);
    border-radius: 999px;
    padding: 6px 18px;
    margin-bottom: 28px;
    font-size: 13px;
    font-weight: 600;
    color: var(--secondary);
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .hero-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--secondary);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.3); }
  }

  .hero h1 {
    font-size: clamp(32px, 5vw, 60px);
    font-weight: 800;
    color: white;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .hero h1 span { color: var(--secondary); }

  .hero p {
    font-size: clamp(15px, 2vw, 18px);
    color: rgba(255,255,255,0.7);
    line-height: 1.8;
    max-width: 680px;
    margin: 0 auto 36px;
  }

  .hero-btns {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.25s;
    cursor: pointer;
  }

  .btn-primary {
    background: var(--secondary);
    color: white;
    box-shadow: 0 6px 20px rgba(255,144,0,0.35);
  }

  .btn-primary:hover {
    background: #e68000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255,144,0,0.45);
  }

  .btn-outline {
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.35);
  }

  .btn-outline:hover {
    border-color: white;
    background: rgba(255,255,255,0.08);
  }

  /* ===== FEATURE CARDS (section 2) ===== */
  .features {
    background: white;
    padding: 0 24px;
    margin-top: -80px;
    position: relative;
    z-index: 2;
  }

  .features-grid {
    max-width: 1270px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  }

  .feature-card {
    position: relative;
    overflow: hidden;
    min-height: 220px;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
  }

  .feature-card img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  .feature-card:hover img { transform: scale(1.05); }

  .feature-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,10,30,0.88) 0%, rgba(0,10,30,0.3) 60%, transparent 100%);
    transition: background 0.3s;
  }

  .feature-card:hover .feature-overlay {
    background: linear-gradient(to top, rgba(2,23,62,0.95) 0%, rgba(2,23,62,0.6) 100%);
  }

  .feature-text {
    position: relative;
    padding: 24px;
    color: white;
  }

  .feature-text h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .feature-text h3 span { color: var(--secondary); }
  .feature-text p { font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.5; }

  /* ===== ABOUT ===== */
  .about {
    padding: 80px 24px;
    background: #f8faff;
  }

  .about-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .about-image {
    position: relative;
  }

  .about-image img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(2,23,62,0.15);
  }

  .about-image::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: 12px;
    bottom: 12px;
    border: 3px solid var(--secondary);
    border-radius: 16px;
    z-index: -1;
  }

  .section-tag {
    display: inline-block;
    background: rgba(255,144,0,0.1);
    color: var(--secondary);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 16px;
    border-radius: 999px;
    margin-bottom: 16px;
  }

  .section-title {
    font-size: clamp(26px, 3.5vw, 40px);
    font-weight: 800;
    color: var(--primary);
    line-height: 1.25;
    margin-bottom: 20px;
  }

  .section-title span { color: var(--secondary); }

  .about-divider {
    width: 60px;
    height: 4px;
    background: var(--secondary);
    border-radius: 2px;
    margin-bottom: 20px;
  }

  .about p {
    font-size: 16px;
    color: #555;
    line-height: 1.9;
    margin-bottom: 16px;
  }

  .quote-tag {
    display: inline-block;
    background: var(--secondary);
    color: white;
    padding: 4px 14px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
  }

  /* ===== CTA CONTACT STRIP ===== */
  .contact-strip {
    background: white;
    padding: 32px 24px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }

  .contact-strip h3 {
    font-size: 22px;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 16px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .social-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-decoration: none;
    transition: all 0.2s;
    font-weight: 700;
    color: white;
  }

  .social-icon:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
  .social-fb { background: #1877f2; }
  .social-msg { background: linear-gradient(135deg, #00B2FF, #006AFF); }
  .social-zalo { background: #0068ff; }
  .social-yt { background: #ff0000; }
  .social-tt { background: #000000; }

  /* ===== SERVICES ===== */
  .services {
    background: linear-gradient(135deg, #000a1c 0%, #01173d 100%);
    padding: 80px 24px;
    position: relative;
    overflow: hidden;
  }

  .services::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,144,0,0.08) 0%, transparent 70%);
    border-radius: 50%;
  }

  .services-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .services-header .section-title { color: white; }

  .services-header p {
    color: rgba(255,255,255,0.65);
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
  }

  .services-grid {
    max-width: 1270px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .service-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 32px 28px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--secondary);
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  .service-card:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255,144,0,0.3);
    transform: translateY(-4px);
  }

  .service-card:hover::before { transform: scaleX(1); }

  .service-card h3 {
    font-size: 20px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    line-height: 1.3;
  }

  .service-card h3 span { color: var(--secondary); display: block; font-size: 14px; font-weight: 600; margin-bottom: 4px; }

  .service-list {
    list-style: none;
    margin-bottom: 24px;
  }

  .service-list li {
    padding: 8px 0 8px 26px;
    color: rgba(255,255,255,0.75);
    font-size: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    position: relative;
    line-height: 1.4;
  }

  .service-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: 700;
  }

  .service-list li:last-child { border-bottom: none; }

  .service-card .btn-primary {
    width: 100%;
    justify-content: center;
    padding: 12px;
    font-size: 14px;
  }

  /* ===== CTA SECTION ===== */
  .cta-section {
    background: #f3f9ff;
    padding: 72px 24px;
    text-align: center;
  }

  .cta-section .section-title { color: var(--primary); margin-bottom: 16px; }

  .cta-section p {
    color: #666;
    font-size: 16px;
    max-width: 640px;
    margin: 0 auto 32px;
    line-height: 1.8;
  }

  /* ===== NEWS ===== */
  .news {
    padding: 72px 24px;
    background: #f3f9ff;
  }

  .section-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .badge-tag {
    display: inline-block;
    background: white;
    border: 2px solid var(--secondary);
    color: var(--secondary);
    font-size: 12px;
    font-weight: 700;
    padding: 6px 20px;
    border-radius: 999px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .news-grid {
    max-width: 1270px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .news-card {
    background: white;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    transition: all 0.3s;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  }

  .news-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  .news-body { padding: 20px; }

  .news-body h5 {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary);
    line-height: 1.5;
    margin-bottom: 10px;
    transition: color 0.2s;
  }

  .news-card:hover .news-body h5 { color: var(--secondary); }

  .news-body p {
    font-size: 13px;
    color: #777;
    line-height: 1.7;
    margin-bottom: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--secondary);
    font-size: 13px;
    font-weight: 600;
  }

  .news-more { text-align: center; margin-top: 36px; }

  /* ===== KNOWLEDGE ===== */
  .knowledge {
    padding: 72px 24px;
    background: white;
  }

  .knowledge-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .know-card {
    display: flex;
    gap: 16px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #eee;
    text-decoration: none;
    color: inherit;
    transition: all 0.25s;
    align-items: flex-start;
  }

  .know-card:hover {
    border-color: var(--secondary);
    box-shadow: 0 6px 24px rgba(255,144,0,0.1);
    transform: translateX(4px);
  }

  .know-img {
    width: 110px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .know-text h5 {
    font-size: 15px;
    font-weight: 700;
    color: var(--primary);
    line-height: 1.4;
    margin-bottom: 8px;
    transition: color 0.2s;
  }

  .know-card:hover .know-text h5 { color: var(--secondary); }

  .know-text p {
    font-size: 13px;
    color: #888;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .know-more { text-align: center; margin-top: 32px; }

  /* ===== EBOOK ===== */
  .ebook {
    background: linear-gradient(135deg, #000d26 0%, #01244f 100%);
    padding: 80px 24px;
    position: relative;
    overflow: hidden;
  }

  .ebook::after {
    content: '';
    position: absolute;
    bottom: -80px;
    right: -80px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255,144,0,0.12) 0%, transparent 70%);
    border-radius: 50%;
  }

  .ebook-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .ebook-image img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  }

  .ebook-content .section-title { color: white; }

  .ebook-content p {
    color: rgba(255,255,255,0.7);
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 28px;
  }

  .ebook-content p strong { color: var(--secondary); }

  .ebook-form { display: flex; flex-direction: column; gap: 12px; }

  .ebook-form input {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    padding: 14px 18px;
    font-size: 14px;
    color: white;
    font-family: inherit;
    transition: border-color 0.2s;
    outline: none;
  }

  .ebook-form input::placeholder { color: rgba(255,255,255,0.4); }
  .ebook-form input:focus { border-color: var(--secondary); }

  .ebook-form textarea {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    padding: 14px 18px;
    font-size: 14px;
    color: white;
    font-family: inherit;
    resize: vertical;
    min-height: 90px;
    outline: none;
  }

  .ebook-form textarea::placeholder { color: rgba(255,255,255,0.4); }
  .ebook-form textarea:focus { border-color: var(--secondary); }

  .ebook-form .btn-primary { width: 100%; justify-content: center; }

  .ebook-note {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    margin-top: 8px;
    font-style: italic;
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .features-grid { grid-template-columns: 1fr; }
    .about-inner { grid-template-columns: 1fr; }
    .services-grid { grid-template-columns: 1fr; }
    .news-grid { grid-template-columns: 1fr; }
    .knowledge-grid { grid-template-columns: 1fr; }
    .ebook-inner { grid-template-columns: 1fr; }
    .ebook-image { display: none; }
    .about-image::before { display: none; }
  }

  @media (max-width: 600px) {
    .hero { padding: 80px 16px 120px; }
    .hero h1 { font-size: 28px; }
    .hero-btns { flex-direction: column; align-items: center; }
    .btn { width: 100%; justify-content: center; }
    .features { margin-top: -40px; }
  }
`;

const featureCards = [
  {
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/head-banner-blue-1-img.jpeg",
    title: "Hướng dẫn khởi nghiệp KDOL",
    accent: "khởi nghiệp KDOL",
    desc: "Định hướng sản phẩm và bán hàng, kiếm 50-100tr/tháng",
  },
  {
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/head-banner-blue-2-img.jpeg",
    title: "Đào tạo bán hàng đa kênh",
    accent: "bán hàng đa kênh",
    desc: "Đào tạo marketing thực chiến: youtube, facebook, tiktok, website",
  },
  {
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/head-banner-blue-3-img.jpeg",
    title: "Xây dựng đội nhóm kinh doanh vô địch",
    accent: "Xây dựng đội nhóm",
    desc: "Bí quyết trở thành nam châm hút nhân tài, xây dựng đội nhóm mạnh",
  },
];

const services = [
  {
    sub: "Gói 1",
    title: "Hướng dẫn Khởi nghiệp KDOL",
    items: ["Lựa chọn sản phẩm", "Xác định mục tiêu", "Lập kế hoạch kinh doanh", "Định hướng phát triển dài hạn", "Thu nhập từ 50tr-100tr/tháng"],
  },
  {
    sub: "Gói 2",
    title: "Đào tạo Bán hàng đa kênh",
    items: ["Bán hàng trên Tiktok", "Bán hàng trên Facebook", "Bán hàng trên Youtube", "Bán hàng trên Instagram", "Bán hàng qua Livestream", "Bán hàng trên Website"],
  },
  {
    sub: "Gói 3",
    title: "Xây dựng Đội nhóm kinh doanh",
    items: ["Cơ bản về xây dựng đội nhóm", "Trở thành 01 leader xuất chúng", "Bí quyết hút nhân tài", "Truyền lửa, giữ lửa cho đội nhóm"],
  },
];

const posts = [
  {
    href: "#",
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online-hieu-qua-hinh-4.jpeg",
    title: "20 ý tưởng kinh doanh online hiệu quả không phải ai cũng biết",
    excerpt: "Những điều cần chú ý nếu muốn kinh doanh online hiệu quả. Kinh doanh online tuy là một thị trường tiềm năng nhưng cũng đầy hố to, cạm bẫy.",
  },
  {
    href: "#",
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/kinh-doanh-online.jpeg",
    title: "10 bước để kinh doanh online thành công cho người mới bắt đầu",
    excerpt: "Kinh doanh online là một ý tưởng tuyệt vời dành cho những người đam mê kiếm tiền hay đơn giản là có nhiều thời gian rảnh rỗi.",
  },
  {
    href: "#",
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/mua-ten-mien-thuong-hieu.jpeg",
    title: "7 bước xây dựng thương hiệu cho doanh nghiệp nhỏ và startup",
    excerpt: "Doanh nghiệp nhỏ lo bán hàng tốt là được, làm thương hiệu để mai tính? Thực tế thì xây dựng thương hiệu không chỉ là câu chuyện dành cho các ông bự.",
  },
  {
    href: "#",
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/dua-nen-tang-thuong-hieu-tham-nhuan-moi-bo-phan-trong-doanh-nghiep.jpeg",
    title: "3 Xu Hướng Digital Marketing đỉnh cao trong năm 2021",
    excerpt: "Những khái niệm này chắc hẳn đã xuất hiện nhan nhản trên các trang tin tức online. Thế nhưng có bao nhiêu doanh nghiệp thực sự hiểu và áp dụng triệt để.",
  },
  {
    href: "#",
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/chili-t4-25-ramatthuonghieu-web-1200x625-1.png",
    title: "Tận dụng sàn thương mại điện tử để xây dựng thương hiệu",
    excerpt: "Sự phát triển thần tốc của thương mại điện tử đã thay đổi cục diện của toàn thị trường. Nó đã thúc đẩy người tiêu dùng ra quyết định mua hàng nhanh hơn.",
  },
  {
    href: "#",
    img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/nhan-dien-thuong-hieu-xay-dung-su-tin-tuong-cua-khach-hang.jpeg",
    title: "CV của một PR Executive – nhân viên quan hệ công chúng",
    excerpt: "Khi mà mạng xã hội, internet chưa trở nên phổ biến thì khái niệm PR (Public Relations) chỉ được nhắc tới ở những doanh nghiệp lớn.",
  },
];

export default function Content() {
  return (
    <>
      <style>{styles}</style>
      <div className="content">

        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">Chào mừng bạn đến với KDOL Academy</div>
            <h1>Hướng dẫn <span>khởi nghiệp KDOL</span></h1>
            <p>
              Kinh doanh Online là 1 nghề cần phải học. Muốn thành công bạn cần định hướng đúng, học đúng phương pháp và kiên trì đi đến cùng. Chúng tôi sẽ đồng hành cùng bạn trên con đường đó.
            </p>
            <div className="hero-btns">
              <a href="#" className="btn btn-primary">Về chúng tôi →</a>
              <a href="#" className="btn btn-outline">Xem khoá học</a>
            </div>
          </div>
        </section>

        {/* ===== FEATURE CARDS ===== */}
        <section className="features">
          <div className="features-grid">
            {featureCards.map((card) => (
              <div key={card.title} className="feature-card">
                <img src={card.img} alt={card.title} />
                <div className="feature-overlay" />
                <div className="feature-text">
                  <h3>
                    {card.title.replace(card.accent, "").split("").length > 0 &&
                      card.title.split(card.accent)[0]}
                    <span>{card.accent}</span>
                    {card.title.split(card.accent)[1]}
                  </h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="about">
          <div className="about-inner">
            <div className="about-image">
              <img
                src="https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/334.png"
                alt="CEO"
              />
            </div>
            <div className="about-content">
              <span className="section-tag">Về chúng tôi</span>
              <h2 className="section-title">
                <span>Kinh doanh Online</span>
                <br />cũng là một nghề để học
              </h2>
              <div className="about-divider" />
              <p>
                Trên đời này không có công việc nào là dễ dàng, nhàn hạ mà lại có thể nhanh chóng kiếm được nhiều tiền. Mọi hoạt động kiếm tiền đều phải xuất phát từ giá trị thật. Bạn trao giá trị càng lớn thì bạn sẽ nhận lại càng nhiều.
              </p>
              <p>
                Trên đời này có ai thành công mà chưa từng nếm mùi thất bại. Chỉ có bại mà không nản chí, bại mà không bỏ cuộc, bại mà dám đứng lên làm lại thì bạn mới xứng đáng được nếm mùi vị của thành công.
              </p>
              <span className="quote-tag">CEO Tống Lê Hùng</span>
            </div>
          </div>
        </section>

        {/* ===== CONTACT STRIP ===== */}
        <section className="contact-strip">
          <h3>Cần tư vấn kinh doanh online, liên hệ ngay với Linh nhé!</h3>
          <div className="social-icons">
            {[
              { label: "f", cls: "social-fb", href: "https://facebook.com/joseph.thien.75" },
              { label: "m", cls: "social-msg", href: "https://messenger.com/t/joseph.thien.75" },
              { label: "Z", cls: "social-zalo", href: "https://chat.zalo.me/0972939830" },
              { label: "▶", cls: "social-yt", href: "#" },
              { label: "♪", cls: "social-tt", href: "#" },
            ].map((s) => (
              <a key={s.label} href={s.href} className={`social-icon ${s.cls}`} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="services">
          <div className="services-header">
            <span className="section-tag">Dịch vụ</span>
            <h2 className="section-title">Tôi <span>có thể giúp gì</span> cho bạn?</h2>
            <p>Tham gia học tập và đội nhóm của CEO Trương Văn Linh để bắt đầu KDOL và thành công cùng những người đồng đội tuyệt vời</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <h3>
                  <span>{s.sub}</span>
                  {s.title}
                </h3>
                <ul className="service-list">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#" className="btn btn-primary">Đăng ký ngay →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section">
          <span className="section-tag">Hành động ngay</span>
          <h2 className="section-title">Bắt đầu <span>khởi nghiệp KDOL</span><br />ngay hôm nay</h2>
          <p>
            Tôi hứa sẽ giúp bạn định hướng được mục tiêu kinh doanh và bắt đầu kinh doanh Online KDOL ngay từ bây giờ. Hãy trở thành một trong những chiến binh xuất chúng trong đội nhóm của chúng tôi.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="btn btn-primary">Tham gia Group đào tạo miễn phí →</a>
            <a href="#" className="btn btn-outline" style={{ color: "#333", borderColor: "#ccc" }}>Đặt lịch tư vấn ✓</a>
          </div>
        </section>

        {/* ===== NEWS ===== */}
        <section className="news">
          <div className="section-header">
            <div className="badge-tag">Tuần này có gì mới?</div>
            <h2 className="section-title"><span>Tin tức</span> thị trường</h2>
            <p style={{ color: "#666", fontSize: 15 }}>Tổng hợp một số kiến thức kinh doanh online hữu ích chúng tôi biên tập dành riêng cho bạn</p>
          </div>
          <div className="news-grid">
            {posts.slice(0, 3).map((post) => (
              <a key={post.title} href={post.href} className="news-card">
                <img src={post.img} alt={post.title} className="news-img" />
                <div className="news-body">
                  <h5>{post.title}</h5>
                  <p>{post.excerpt}</p>
                  <span className="news-link">Xem chi tiết →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="news-more">
            <a href="#" className="btn btn-primary">Xem thêm →</a>
          </div>
        </section>

        {/* ===== KNOWLEDGE ===== */}
        <section className="knowledge">
          <div className="section-header">
            <div className="badge-tag">Cập nhật xu hướng thị trường</div>
            <h2 className="section-title"><span>Kiến thức</span> kinh doanh online</h2>
            <p style={{ color: "#666", fontSize: 15 }}>Thị trường luôn luôn biến động, hãy là người làm chủ được kỹ năng và kiến thức để bắt đầu kinh doanh ngay hôm nay</p>
          </div>
          <div className="knowledge-grid">
            {posts.map((post) => (
              <a key={post.title} href={post.href} className="know-card">
                <img src={post.img} alt={post.title} className="know-img" />
                <div className="know-text">
                  <h5>{post.title}</h5>
                  <p>{post.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="know-more">
            <a href="#" className="btn btn-primary">Xem tất cả →</a>
          </div>
        </section>

        {/* ===== EBOOK ===== */}
        <section className="ebook">
          <div className="ebook-inner">
            <div className="ebook-image">
              <img
                src="https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/12.png"
                alt="Ebook KDOL"
              />
            </div>
            <div className="ebook-content">
              <span className="section-tag">Quà tặng miễn phí</span>
              <h2 className="section-title">Đăng ký nhận <span>Ebook</span> miễn phí</h2>
              <p>
                Đăng ký ngay để nhận quà tặng chúng tôi dành tặng riêng cho bạn.
                Đó là ebook <strong>"Khởi nghiệp kinh doanh Online từ con số 0"</strong>.
              </p>
              <div className="ebook-form">
                <input type="text" placeholder="Họ và tên..." />
                <input type="tel" placeholder="Số điện thoại..." />
                <input type="email" placeholder="Địa chỉ email..." />
                <textarea placeholder="Ghi chú..." />
                <a href="#" className="btn btn-primary">Đăng ký nhận ebook →</a>
              </div>
              <p className="ebook-note">* Mọi thông tin bạn cung cấp sẽ được bảo mật và chỉ được phục vụ mục đích tư vấn khởi nghiệp kinh doanh online.</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
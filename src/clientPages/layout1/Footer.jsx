import React from 'react';

const Footer = () => {
  const footerLinks = [
    { name: "Trang chủ", href: "#" },
    { name: "Giới thiệu", href: "#" },
    { name: "Kiến thức KDOL", href: "#" },
    { name: "Tin tức KDOL", href: "#" },
    { name: "Bài viết chia sẻ", href: "#" },
    { name: "Liên hệ", href: "#" },
  ];

  const socialIcons = [
    { img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/face.jpg", link: "#" },
    { img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/messenger.jpg", link: "#" },
    { img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/zalo.jpg", link: "#" },
    { img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/youtube.jpg", link: "#" },
    { img: "https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/tiktok.jpg", link: "#" },
  ];

  return (
    <footer className="relative bg-[#080808] text-white pt-20">
      {/* Background Image Overlay - Hiệu ứng giống bản gốc nhưng nhẹ hơn */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/bn.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[880px] mx-auto text-center">
          
          {/* Quote Section */}
          <div className="mb-10">
            <p className="text-[#c0c0c0] text-base md:text-lg italic leading-relaxed">
              "Trên đời này không có công việc nào là dễ dàng, nhàn hạ mà lại có thể nhanh chóng kiếm được nhiều tiền. 
              Mọi hoạt động kiếm tiền đều phải xuất phát từ giá trị thật. Bạn trao giá trị càng lớn thì bạn sẽ nhận lại càng nhiều. 
              Trên đời này có ai thành công mà chưa từng nếm mùi thất bại. Chỉ có bại mà không nản chí, bại mà không bỏ cuộc, 
              bại mà dám đứng lên làm lại thì bạn mới xứng đáng được nếm mùi vị của thành công."
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-10"></div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {socialIcons.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="group relative overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-1"
              >
                <img 
                  src={social.img} 
                  alt="Social Icon" 
                  className="w-10 h-10 object-cover grayscale group-hover:grayscale-0 transition-all duration-300 shadow-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Absolute Footer / Copyright Section */}
      <div className="bg-black/50 border-t border-white/5 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase font-bold tracking-widest text-white/60 hover:text-[#ff9000] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Copyright Text */}
          <div className="text-xs text-white/40 tracking-wide text-center md:text-right">
            Copyright 2026 © <span className="text-white/60 font-semibold">Web Demo</span>. All Right Reserved
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-11 h-11 bg-[#ff9000] rounded-full flex items-center justify-center text-white shadow-2xl shadow-orange-500/20 hover:bg-orange-600 hover:-translate-y-1 transition-all z-[100]"
        aria-label="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
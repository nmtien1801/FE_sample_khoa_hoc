import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Trang chủ", href: "/layout1" },
  { label: "Giới thiệu", href: "/layout1/gioi-thieu" },
  {
    label: "Kiến thức KDOL",
    href: "/layout1/kien-thuc",
    children: [
      { label: "Khởi nghiệp", href: "/layout1/kien-thuc/khoi-nghiep" },
      { label: "Tiktok", href: "/layout1/kien-thuc/tiktok" },
      { label: "Youtube", href: "/layout1/kien-thuc/youtube" },
      { label: "Facebook", href: "/layout1/kien-thuc/facebook" },
      { label: "Website", href: "/layout1/kien-thuc/website" },
    ],
  },
  { label: "Tin tức KDOL", href: "/layout1/tin-tuc" },
  { label: "Bài viết chia sẻ", href: "/layout1/bai-viet" },
  { label: "Liên hệ", href: "/layout1/lien-he" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Xử lý hiệu ứng khi scroll (giống class .scrolled cũ)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] font-['Be_Vietnam_Pro'] transition-all duration-300 h-20 flex items-center
      ${scrolled ? "bg-[#02173e] shadow-2xl" : "bg-[#02173e]/90"}`}
    >
      <div className="max-w-[1270px] w-full mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="#" className="flex items-center gap-[10px] group">
          <div className="w-[42px] h-[42px] bg-[#ff9000] rounded-[10px] flex items-center justify-center text-xl font-[800] text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col leading-[1.1]">
            <span className="text-[15px] font-[800] text-white tracking-[0.5px]">KDOL Academy</span>
            <span className="text-[11px] font-[500] text-[#ff9000] tracking-[1px] uppercase">Kinh doanh online</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <ul className="flex items-center gap-1 list-none">
            {navItems.map((item) => (
              <li key={item.label} className="relative group/item">
                <Link
                  to={item.href}
                  className="flex items-center gap-1 text-[13px] font-[600] text-white/90 uppercase tracking-[0.5px] px-[14px] py-2 rounded-md hover:text-[#ff9000] hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 transition-transform group-hover/item:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <ul className="absolute top-[calc(100%+8px)] left-0 min-w-[200px] bg-[#02173e] border border-white/10 rounded-xl overflow-hidden opacity-0 invisible translate-y-[-8px] group-hover/item:opacity-100 group-hover/item:visible group-hover/item:translate-y-0 transition-all duration-200 shadow-[0_10px_40px_rgba(0,0,0,0.4)] z-50 list-none">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.href}
                          className="block px-[18px] py-[10px] text-[13px] font-[500] text-white/80 hover:text-white hover:bg-[#ff9000]/20 hover:pl-6 border-b border-white/5 last:border-none transition-all"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="ml-2">
              <Link
                to="#"
                className="bg-[#ff9000] text-white px-[18px] py-[9px] rounded-lg text-[13px] font-[700] shadow-[0_4px_12px_rgba(255,144,0,0.3)] hover:bg-[#e68000] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(255,144,0,0.4)] transition-all inline-block"
              >
                Đăng ký tư vấn
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#02173e] transition-all duration-300 lg:hidden overflow-y-auto pt-24 px-6
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <ul className="flex flex-col gap-1 list-none pb-10">
          {navItems.map((item) => (
            <li key={item.label} className="border-b border-white/10 last:border-none">
              <Link to={item.href} className="block py-4 text-sm font-[600] text-white/90 uppercase hover:text-[#ff9000]">
                {item.label}
              </Link>
              {item.children && (
                <ul className="pl-4 pb-2 list-none">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link to={child.href} className="block py-2 text-[13px] text-white/60 hover:text-white">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="mt-4">
            <Link to="#" className="block w-full bg-[#ff9000] text-white text-center py-4 rounded-lg font-[700] uppercase text-sm">
              Đăng ký tư vấn
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
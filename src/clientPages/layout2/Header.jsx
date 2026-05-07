import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Trang chủ", href: "/layout2" },
  {
    label: "Danh sách khóa học",
    href: "/layout2/courses",
    highlight: true,
    children: [
      { label: "Kinh doanh khởi nghiệp", href: "/layout2/courses?category=Kinh doanh khởi nghiệp" },
      { label: "Kĩ năng ngoại ngữ", href: "/layout2/courses?category=Kĩ năng ngoại ngữ" },
      { label: "Công nghệ thông tin", href: "/layout2/courses?category=Công nghệ thông tin" },
      { label: "Phong cách sống", href: "/layout2/courses?category=Phong cách sống" },
    ],
  },
  { label: "Khóa học tiêu biểu", href: "/layout2/courses" },
  { label: "Tin tức", href: "/layout2/tin-tuc" },
  { label: "Liên hệ", href: "/layout2/lien-he" },
];

const CART_KEY = "layout2_cart";

function getCartCount() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  } catch {
    return 0;
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeChild, setActiveChild] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(getCartCount());
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
        setActiveChild(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm font-sans">
      <div className="max-w-[1190px] mx-auto px-4 h-[70px] flex items-center gap-3">

        {/* Logo */}
        <a href="/" className="shrink-0 flex items-center gap-2">
          <img
            src="https://khoahocvip.themevip.vip/wp-content/uploads/2025/02/logotvip-1024x154.png"
            alt="ThemeVip"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Divider */}
        <div className="hidden lg:block h-8 w-px bg-gray-200 shrink-0 mx-1" />

        {/* Danh mục mega-menu */}
        <div className="hidden lg:block relative shrink-0" ref={menuRef}>
          <button
            onClick={() => { setMenuOpen(!menuOpen); setActiveChild(null); }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${menuOpen ? "rotate-90" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-[#00bc86] font-bold text-sm">Danh mục</span>
          </button>

          {/* Dropdown panel */}
          {menuOpen && (
            <div className="absolute top-[calc(100%+8px)] left-0 flex shadow-2xl rounded-2xl overflow-hidden border border-gray-100 z-50">
              {/* Column 1: menu list */}
              <div className="w-56 bg-white py-2">
                {menuItems.map((item) => (
                  <div
                    key={item.label}
                    onMouseEnter={() => item.children ? setActiveChild(item) : setActiveChild(null)}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center justify-between px-5 py-3 text-sm transition-colors
                        ${item.highlight ? "text-[#f76758] font-bold" : "text-gray-700 font-medium"}
                        ${activeChild?.label === item.label ? "bg-gray-50" : "hover:bg-gray-50"}
                      `}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </a>
                  </div>
                ))}
              </div>

              {/* Column 2: sub-items */}
              {activeChild?.children && (
                <div className="w-56 bg-white py-2 border-l border-gray-100">
                  {activeChild.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-3 text-sm text-gray-700 font-medium hover:bg-gray-50 hover:text-[#00bc86] transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search */}
        <form
          action="/"
          method="get"
          className="hidden lg:flex flex-1 items-center bg-gray-100 rounded-full px-5 py-2.5 gap-2"
        >
          <input
            type="search"
            name="s"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm khóa học"
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none min-w-0"
          />
          <input type="hidden" name="post_type" value="product" />
          <button
            type="submit"
            aria-label="Tìm kiếm"
            className="text-[#00bc86] hover:text-[#00a874] transition-colors shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-1 shrink-0">
          {/* Cart */}
          <Link to="/layout2/cart" className="relative p-2.5 text-gray-500 hover:text-[#00bc86] transition-colors" aria-label="Giỏ hàng">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-1 right-1 bg-[#f76758] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center leading-none">
              {cartCount}
            </span>
          </Link>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-200 mx-2" />

          {/* Tài khoản */}
          <a
            href="/layout2"
            className="ml-1 bg-[#00bc86] hover:bg-[#00a874] active:scale-95 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            Tài khoản
          </a>
        </div>

        {/* Mobile right */}
        <div className="flex lg:hidden items-center gap-1.5 ml-auto">
          <Link to="/layout2/cart" className="relative p-2 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0.5 right-0.5 bg-[#f76758] text-white text-[8px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">1</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-600"
            aria-label="Menu"
          >
            {mobileOpen
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3">
            <form action="/" method="get" className="flex items-center bg-gray-100 rounded-full px-4 py-2.5 gap-2">
              <input
                type="search" name="s"
                placeholder="Tìm kiếm khóa học..."
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <input type="hidden" name="post_type" value="product" />
              <button type="submit" className="text-[#00bc86]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          <nav className="px-4 pb-5 space-y-0.5">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileDropOpen(!mobileDropOpen)}
                    className={`w-full flex items-center justify-between py-3 text-sm font-semibold border-b border-gray-100 ${item.highlight ? "text-[#f76758]" : "text-gray-700"}`}
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${mobileDropOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropOpen && (
                    <div className="pl-4 pb-1">
                      {item.children.map((child) => (
                        <a key={child.label} href={child.href} className="block py-2.5 text-sm text-gray-600 hover:text-[#00bc86] border-b border-gray-50">
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={item.label} href={item.href} className="block py-3 text-sm font-medium text-gray-700 hover:text-[#00bc86] border-b border-gray-100">
                  {item.label}
                </a>
              )
            )}
            <div className="pt-4 flex gap-3">
              <a href="/dashboard" className="flex-1 text-center bg-[#00bc86] hover:bg-[#00a874] text-white text-sm font-bold py-3 rounded-full transition-colors">
                Tài khoản
              </a>
              <a href="/bai-viet/tin-tuc" className="flex-1 text-center border-2 border-gray-200 text-sm font-semibold text-gray-600 py-3 rounded-full hover:border-[#00bc86] hover:text-[#00bc86] transition-colors">
                Blog
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
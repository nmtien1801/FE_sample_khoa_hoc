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

  useEffect(() => {
    setCartCount(getCartCount());
  }, [location.pathname]);

  useEffect(() => {
    const handleCartUpdate = () => setCartCount(getCartCount());
    window.addEventListener("layout2CartUpdate", handleCartUpdate);
    return () => window.removeEventListener("layout2CartUpdate", handleCartUpdate);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (!search.trim()) {
      navigate("/layout2/courses");
      return;
    }
    navigate(`/layout2/courses?search=${encodeURIComponent(search.trim())}`);
    setMobileOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm font-sans">
      <div className="max-w-[1190px] mx-auto px-4 h-[70px] flex items-center gap-3">

        <Link to="/layout2" className="shrink-0 flex items-center gap-2">
          <img
            src="https://khoahocvip.themevip.vip/wp-content/uploads/2025/02/logotvip-1024x154.png"
            alt="ThemeVip"
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex gap-3">
          {menuItems.map((item) => (
            item.children ? (
              <div key={item.label} className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${item.highlight ? "text-[#00bc86]" : "text-gray-700 hover:text-[#00bc86]"}`}
                >
                  {item.label}
                  <span className="inline-block text-xs">▾</span>
                </button>
                {menuOpen && (
                  <div className="absolute left-0 top-full mt-3 flex w-[260px] rounded-3xl border border-gray-200 bg-white shadow-xl">
                    <div className="w-full py-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? "bg-slate-100 text-[#00bc86]" : "text-gray-700 hover:text-[#00bc86]"}`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </div>

        <form onSubmit={handleSearch} className="hidden lg:flex flex-1 items-center bg-slate-100 rounded-full px-4 py-2.5 gap-2">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm khóa học"
            className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
          />
          <button type="submit" className="text-[#00bc86] hover:text-[#008f66] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <Link to="/layout2/cart" className="relative p-2 text-slate-600 hover:text-[#00bc86] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f76758] text-[10px] font-black text-white">{cartCount}</span>
          </Link>
          <Link
            to="/layout2"
            className="rounded-full bg-[#00bc86] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#008f66] transition"
          >
            Tài khoản
          </Link>
        </div>

        <div className="flex lg:hidden ml-auto items-center gap-2">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-slate-600">
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <Link to="/layout2/cart" className="relative p-2 text-slate-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f76758] text-[10px] font-black text-white">{cartCount}</span>
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3">
            <form onSubmit={handleSearch} className="flex items-center bg-slate-100 rounded-full px-4 py-2.5 gap-2">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm khóa học..."
                className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
              />
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
                    className={`w-full flex items-center justify-between py-3 text-sm font-semibold border-b border-gray-100 ${item.highlight ? "text-[#00bc86]" : "text-slate-700"}`}
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${mobileDropOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropOpen && (
                    <div className="pl-4 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block py-2.5 text-sm text-slate-600 hover:text-[#00bc86] border-b border-gray-50"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-[#00bc86] border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

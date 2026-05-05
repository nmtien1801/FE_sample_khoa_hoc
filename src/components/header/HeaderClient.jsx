import React, { useState, useRef, useEffect } from "react";
import { Menu, Search, Phone, ChevronDown, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

// MOCK DATA: Dữ liệu giả lập cho danh mục và sản phẩm/khóa học
const MOCK_CATEGORIES = [
  { id: 1, name: "Dạy học Online", path: "/sample1" },
  { id: 2, name: "Tiếng Anh", path: "/sample4" },
  { id: 3, name: "Tiếng Hàn", path: "/sample2" },
  { id: 4, name: "Tiếng Trung", path: "/sample3" },
  { id: 5, name: "Tiếng Nhật", path: "/sample5" },
];

const MOCK_PRODUCTS = [
  { id: 1, maSP: "OL-01", name: "Khóa học Livestream Pro", price: 1500000, image: "https://picsum.photos/200?random=1" },
  { id: 2, maSP: "EN-02", name: "IELTS Breakthrough 7.0", price: 4500000, image: "https://picsum.photos/200?random=2" },
  { id: 3, maSP: "KR-03", name: "Tiếng Hàn Sơ Cấp 1", price: 1200000, image: "https://picsum.photos/200?random=3" },
  { id: 4, maSP: "CN-04", name: "Hán Ngữ Giao Tiếp HSK3", price: 2800000, image: "https://picsum.photos/200?random=4" },
  { id: 5, maSP: "JP-05", name: "Luyện thi N3 cấp tốc", price: 3200000, image: "https://picsum.photos/200?random=5" },
];

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const searchRef = useRef(null);
  const megaRef = useRef(null);

  const menuItems = [
    { label: "TRANG CHỦ", path: "/" }, // Quay về Portal
    { label: "DẠY HỌC ONLINE", path: "/sample1" },
    { label: "TIẾNG ANH", path: "/sample4" },
    { label: "TIẾNG HÀN", path: "/sample2" },
    { label: "TIẾNG TRUNG", path: "/sample3" },
    { label: "TIẾNG NHẬT", path: "/sample5" },
    { label: "LIÊN HỆ", path: "/lien-he" },
  ];

  const filteredSuggestions = MOCK_PRODUCTS.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.maSP.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setShowSuggestions(false);
      if (megaRef.current && !megaRef.current.contains(e.target)) setIsMegaOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) return toast.warning("Vui lòng nhập từ khóa!");
    
    const exactMatch = MOCK_PRODUCTS.find(p => 
      p.name.toLowerCase().trim() === searchQuery.toLowerCase().trim() ||
      p.maSP.toLowerCase().trim() === searchQuery.toLowerCase().trim()
    );

    if (exactMatch) {
      navigate(`/course/${exactMatch.id}`);
    } else {
      toast.info(`Đang tìm kiếm: ${searchQuery}`);
      // Giả lập chuyển hướng tới trang kết quả chung
      navigate(`/search?q=${searchQuery}`);
    }
    setShowSuggestions(false);
  };

  return (
    <header className="bg-[#ed792f] shadow-md sticky top-0 z-50 w-full text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex items-center justify-between gap-4">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[#ed792f] text-xl border-2 border-white">
                TM
              </div>
            </NavLink>
          </div>

          {/* SEARCH BAR */}
          <div className="hidden md:flex flex-1 justify-center max-w-2xl">
            <div ref={searchRef} className="relative w-full h-[42px] bg-white flex items-center rounded-md overflow-visible shadow-lg">
              <input
                type="text"
                className="flex-1 h-full px-4 outline-none text-sm text-gray-800 placeholder:text-gray-400"
                placeholder="Tìm khóa học, mã môn học..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
              />

              {/* Suggestions Dropdown */}
              {showSuggestions && searchQuery && filteredSuggestions.length > 0 && (
                <div className="absolute top-[45px] left-0 w-full bg-white border border-gray-200 shadow-2xl z-[70] rounded-md overflow-hidden animate-in fade-in slide-in-from-top-1">
                  {filteredSuggestions.map((item, index) => (
                    <div
                      key={item.id}
                      className={`px-4 py-2 cursor-pointer flex items-center gap-3 hover:bg-orange-50 transition-colors ${highlightedIndex === index ? 'bg-orange-100' : ''}`}
                      onClick={() => {
                        setSearchQuery(item.name);
                        setShowSuggestions(false);
                        navigate(`/course/${item.id}`);
                      }}
                    >
                      <img src={item.image} alt="" className="w-8 h-8 rounded object-cover" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                        <p className="text-[10px] text-gray-500 uppercase">{item.maSP}</p>
                      </div>
                      <span className="text-xs font-bold text-orange-600">{item.price.toLocaleString()}đ</span>
                    </div>
                  ))}
                </div>
              )}

              <button onClick={handleSearch} className="h-full px-5 bg-gray-100 hover:bg-orange-600 hover:text-white transition-all border-l border-gray-200 rounded-r-md">
                <Search className="w-5 h-5 text-gray-600 hover:text-inherit" />
              </button>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <a href="tel:0372672396" className="flex items-center justify-end gap-1 font-bold text-sm hover:opacity-80 transition-opacity">
                <Phone className="w-3 h-3" /> 037.267.2396
              </a>
              <p className="text-[10px] opacity-80 uppercase tracking-tighter">Hỗ trợ học viên 24/7</p>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-white/10 rounded-lg">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="bg-white border-t border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => 
                `px-5 py-3 text-[12px] font-bold transition-all border-b-2 ${
                  isActive ? "text-[#ed792f] border-[#ed792f]" : "text-gray-600 border-transparent hover:text-[#ed792f]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-0 left-0 w-[260px] h-full bg-white shadow-xl p-5 flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-black text-[#ed792f]">MENU CHÍNH</span>
              <X className="w-6 h-6 text-gray-400 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="space-y-2">
              {menuItems.map(item => (
                <NavLink 
                  key={item.label} 
                  to={item.path} 
                  className="block p-3 rounded-lg text-gray-700 font-bold hover:bg-orange-50 hover:text-[#ed792f]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
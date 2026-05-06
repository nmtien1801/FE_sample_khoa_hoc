import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Globe } from 'lucide-react';

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lưu ý: to="khoa-hoc" (không có /) để nó tự động nối thành /layout1/khoa-hoc
  const menuItems = [
    { name: 'Trang chủ', path: '' },
    { name: 'Khóa học', path: 'khoa-hoc' },
    { name: 'Giới thiệu', path: 'gioi-thieu' },
    { name: 'Tin tức', path: 'tin-tuc' },
    { name: 'Liên hệ', path: 'lien-he' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/layout1" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            E1
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tighter">EDUCORE</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === ''}
              className={({ isActive }) =>
                `text-sm font-bold transition-all hover:text-indigo-600 ${
                  isActive ? 'text-indigo-600 underline underline-offset-8' : 'text-gray-500'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Tìm khóa học..." 
              className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm w-48 focus:w-64 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          </div>
          <button className="text-gray-600 hover:text-indigo-600 relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
          <Link to="/login" className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-colors">
            Vào học
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-gray-800 border-b border-gray-50 pb-2">
              {item.name}
            </Link>
          ))}
          <button className="bg-indigo-600 text-white py-4 rounded-xl font-bold">Đăng ký ngay</button>
        </div>
      )}
    </header>
  );
};

export default Header1;
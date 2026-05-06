import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer1 = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">E</div>
            <span className="text-xl font-bold text-gray-900">EDUCORE</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Nền tảng học tập trực tuyến hàng đầu cung cấp kiến thức thực chiến từ các chuyên gia Global.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:shadow-md transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Khám phá</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><Link to="khoa-hoc" className="hover:text-indigo-600 transition-colors">Thư viện khóa học</Link></li>
            <li><Link to="about" className="hover:text-indigo-600 transition-colors">Về chúng tôi</Link></li>
            <li><Link to="instructor" className="hover:text-indigo-600 transition-colors">Trở thành giảng viên</Link></li>
            <li><Link to="plans" className="hover:text-indigo-600 transition-colors">Gói thành viên</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6">Hỗ trợ</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><Link to="faq" className="hover:text-indigo-600 transition-colors">Trung tâm trợ giúp</Link></li>
            <li><Link to="terms" className="hover:text-indigo-600 transition-colors">Điều khoản dịch vụ</Link></li>
            <li><Link to="privacy" className="hover:text-indigo-600 transition-colors">Chính sách bảo mật</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-gray-900 mb-6">Liên hệ</h4>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Phone size={18} className="text-indigo-600" /> <span>+84 123 456 789</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail size={18} className="text-indigo-600" /> <span>hello@educore.com</span>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Newsletter</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email của bạn" className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-indigo-500 w-full" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold">Gửi</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} EDUCORE International Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
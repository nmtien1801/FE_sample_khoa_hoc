import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Layout1LienHe = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-gray-900 leading-tight">Liên hệ với <br/> đội ngũ hỗ trợ</h2>
              <p className="text-gray-500 text-lg">Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về lộ trình học tập.</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Trụ sở chính", detail: "Toà nhà Innovation, Công viên phần mềm Quang Trung, TP.HCM" },
                { icon: Phone, title: "Hotline tư vấn", detail: "+84 123 456 789" },
                { icon: Mail, title: "Email hỗ trợ", detail: "support@educore.edu.vn" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl border border-gray-50 hover:border-indigo-100 transition-colors group">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-indigo-400 uppercase tracking-widest">Họ tên</label>
                  <input type="text" className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Nguyễn Văn A" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-indigo-400 uppercase tracking-widest">Số điện thoại</label>
                  <input type="text" className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="090..." />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-indigo-400 uppercase tracking-widest">Email liên hệ</label>
                <input type="email" className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="name@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-indigo-400 uppercase tracking-widest">Nội dung yêu cầu</label>
                <textarea rows="4" className="w-full bg-gray-800 border-none rounded-2xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Bạn cần hỗ trợ gì?"></textarea>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/20">
                Gửi yêu cầu ngay <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Layout1LienHe;
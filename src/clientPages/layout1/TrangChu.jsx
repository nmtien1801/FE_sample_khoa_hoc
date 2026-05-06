import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

const Layout1TrangChu = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-6xl font-black text-gray-900 leading-[1.1]">
              Học hôm nay, <br />
              <span className="text-indigo-600 underline decoration-indigo-200">Dẫn đầu</span> ngày mai.
            </h1>
            <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
              Truy cập hơn 5.000+ bài giảng chất lượng cao từ các chuyên gia đầu ngành. Chứng chỉ có giá trị trên toàn cầu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="khoa-hoc" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100">
                Khám phá khóa học <ArrowRight size={20} />
              </Link>
              <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                Dùng thử miễn phí
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">+2k</div>
               </div>
               <p className="text-sm font-medium text-gray-500 italic">"Hơn 20,000 học viên đã thay đổi sự nghiệp"</p>
            </div>
          </div>
          
          <div className="relative animate-in zoom-in duration-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" className="rounded-[40px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" alt="Hero" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="font-black text-xl">100%</p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Tin cậy & Bảo mật</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Partners */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
           <p className="text-center text-gray-400 font-bold text-xs uppercase tracking-widest mb-10">Hợp tác cùng các đối tác công nghệ hàng đầu</p>
           <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'].map(brand => (
                <span key={brand} className="text-2xl font-black text-gray-800 tracking-tighter italic">{brand}</span>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
             <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.2em]">Khám phá</span>
             <h2 className="text-4xl font-black text-gray-900">Khóa học nổi bật nhất</h2>
          </div>
          <Link to="khoa-hoc" className="font-bold text-indigo-600 flex items-center gap-2 hover:gap-4 transition-all">
            Xem tất cả bài giảng <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map(i => (
            <div key={i} className="group cursor-pointer">
              <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-video">
                <img src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-indigo-600 shadow-lg">Bán chạy</div>
              </div>
              <div className="px-2 space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                  <span className="flex items-center gap-1"><Users size={14} /> 12.5k học viên</span>
                  <span className="flex items-center gap-1"><Award size={14} /> 4.9 Đánh giá</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Lập trình Fullstack chuyên nghiệp 2026</h3>
                <p className="text-sm text-gray-500 line-clamp-2">Nắm vững kiến thức từ Frontend đến Backend với bộ công nghệ mới nhất hiện nay.</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-black text-gray-900">1.990.000đ</span>
                  <button className="bg-indigo-50 text-indigo-600 px-5 py-2 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-all text-sm">Đăng ký</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Sẵn sàng để nâng tầm <br/> sự nghiệp của bạn?</h2>
           <p className="text-indigo-100 max-w-xl mx-auto mb-10 text-lg">Gia nhập cộng đồng hơn 100.000 học viên thành công của chúng tôi ngay hôm nay.</p>
           <div className="flex flex-wrap justify-center gap-4">
             <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black hover:bg-indigo-50 transition-all shadow-xl">Bắt đầu học miễn phí</button>
             <button className="bg-indigo-700 text-white border border-indigo-500 px-10 py-4 rounded-2xl font-black hover:bg-indigo-800 transition-all">Liên hệ tư vấn</button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Layout1TrangChu;
import React from 'react';

const Layout1TinTuc = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-indigo-600 font-black text-sm uppercase tracking-widest">Blog & News</span>
          <h2 className="text-4xl font-black text-gray-900">Kiến thức mới mỗi ngày</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map(item => (
            <article key={item} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-64 overflow-hidden relative">
                <img src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl text-xs font-black">
                  12 THÁNG 5, 2026
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex gap-2">
                  <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase">Technology</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                  Tương lai của lập trình viên trong kỷ nguyên AI 2026
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  AI không thay thế lập trình viên, nhưng lập trình viên biết sử dụng AI sẽ thay thế những người còn lại. Khám phá lộ trình thích nghi...
                </p>
                <div className="pt-6 border-t border-gray-50 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <span className="text-sm font-bold text-gray-900">By Admin</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout1TinTuc;
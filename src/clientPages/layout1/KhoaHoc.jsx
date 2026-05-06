import React from 'react';
import { Search, Filter, Star, Clock, BookOpen } from 'lucide-react';

const Layout1KhoaHoc = () => {
  const categories = ["Tất cả", "Lập trình Web", "Data Science", "Thiết kế Đồ họa", "Marketing"];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto text-center space-y-4">
          <h1 className="text-4xl font-black text-white">Thư viện Khóa học</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Nâng cao kỹ năng của bạn với lộ trình đào tạo được thiết kế bởi các chuyên gia hàng đầu thế giới.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 space-y-8">
            <div className="relative">
              <input type="text" placeholder="Tìm tên khóa học..." className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600 transition-all" />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>

            <div>
              <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                <Filter size={18} /> Danh mục
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat, i) => (
                  <button key={i} className={`px-4 py-2 rounded-lg text-sm font-bold text-left transition-all ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(id => (
                <div key={id} className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                    <div className="absolute bottom-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-xs">
                      Web Dev
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-1 text-orange-400">
                      <Star size={14} fill="currentColor" /> <span className="text-sm font-black text-gray-900">4.9</span>
                    </div>
                    <h3 className="font-black text-gray-900 line-clamp-2 hover:text-indigo-600 cursor-pointer transition-colors">Mastering React & Next.js Professional</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-bold">
                      <span className="flex items-center gap-1"><Clock size={14} /> 40 Giờ</span>
                      <span className="flex items-center gap-1"><BookOpen size={14} /> 120 Bài giảng</span>
                    </div>
                    <div className="pt-4 border-t flex items-center justify-between">
                      <span className="text-xl font-black text-indigo-600">1.490k</span>
                      <button className="text-sm font-bold text-gray-900 hover:underline">Chi tiết →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout1KhoaHoc;
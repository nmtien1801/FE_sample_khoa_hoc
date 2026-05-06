import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users2, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout1GioiThieu = () => {
  const stats = [
    { label: "Học viên", value: "50,000+" },
    { label: "Khóa học", value: "1,200+" },
    { label: "Giảng viên", value: "300+" },
    { label: "Quốc gia", value: "25+" }
  ];

  const values = [
    {
      icon: Target,
      title: "Sứ mệnh",
      desc: "Phổ cập kiến thức thực chiến chất lượng cao đến mọi người học trên toàn cầu với mức chi phí tối ưu nhất."
    },
    {
      icon: Lightbulb,
      title: "Tầm nhìn",
      desc: "Trở thành hệ sinh thái đào tạo trực tuyến chuẩn quốc tế dẫn đầu khu vực Đông Nam Á vào năm 2030."
    },
    {
      icon: ShieldCheck,
      title: "Cam kết",
      desc: "Chúng tôi đồng hành cùng học viên cho đến khi có việc làm, cam kết cập nhật nội dung bài giảng trọn đời."
    }
  ];

  return (
    <div className="bg-white">
      {/* Section 1: Hero Story */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.3em]">Câu chuyện của chúng tôi</span>
            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Định nghĩa lại cách thức <br /> 
              <span className="text-indigo-600">Học tập & Phát triển</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Bắt đầu từ một nhóm nhỏ các chuyên gia công nghệ tại thung lũng Silicon, EDUCORE ra đời với khát vọng phá bỏ rào cản giữa kiến thức hàn lâm và kỹ năng thực tế mà doanh nghiệp cần. 
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Chúng tôi không chỉ bán khóa học, chúng tôi cung cấp một lộ trình thay đổi sự nghiệp toàn diện.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-[3rem] rotate-3 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" 
              className="rounded-[3rem] shadow-2xl transition-transform hover:rotate-0 duration-500 -rotate-3" 
              alt="About Team" 
            />
          </div>
        </div>
      </section>

      {/* Section 2: Numbers */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-5xl font-black text-white">{stat.value}</p>
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Giá trị cốt lõi</h2>
          <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed italic">"{item.desc}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Team/Expert Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 mb-16">
            <h2 className="text-4xl font-black text-gray-900">Gặp gỡ đội ngũ chuyên gia</h2>
            <p className="text-gray-500">Giảng viên của chúng tôi đến từ các tập đoàn hàng đầu như Google, Meta, Amazon và Microsoft.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="group">
                <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-[3/4]">
                  <img 
                    src={`https://i.pravatar.cc/400?img=${i+10}`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    alt="Instructor" 
                  />
                </div>
                <h4 className="text-xl font-black text-gray-900">Dr. Alex Johnson</h4>
                <p className="text-indigo-600 font-bold text-sm uppercase tracking-tighter">Senior AI Engineer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-indigo-600 rounded-[4rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden">
          <div className="z-10 space-y-4 text-center lg:text-left">
            <h2 className="text-4xl font-black leading-tight">Bạn đã sẵn sàng để <br /> thay đổi tương lai?</h2>
            <p className="text-indigo-100">Bắt đầu hành trình học tập cùng 50.000+ học viên khác ngay bây giờ.</p>
          </div>
          <Link 
            to="../khoa-hoc" 
            className="z-10 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black hover:bg-gray-100 transition-all flex items-center gap-3 shadow-xl"
          >
            Đăng ký khóa học đầu tiên <ArrowRight size={20} />
          </Link>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Layout1GioiThieu;
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-sans pt-20">

      {/* Hero banner */}
      <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://khoahockdol.mauthemewp.com/wp-content/uploads/2021/09/456.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-[#00153d]/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight drop-shadow">
            Liên hệ
          </h1>
          <p className="text-white/80 mt-2 text-sm">
            Trang chủ &rsaquo; Liên hệ
          </p>
        </div>
      </div>

      {/* Contact form section */}
      <div className="max-w-[900px] mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Liên hệ Linh Marketing
          </h2>
          <p className="text-gray-500 mb-8 text-base">
            Để liên hệ với Linh Marketing hoặc đội ngũ của anh ấy, hãy sử dụng thông tin bên dưới...
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-6 py-5 text-center">
              <p className="text-lg font-semibold">✅ Gửi thông tin thành công!</p>
              <p className="text-sm mt-1 text-green-600">Chúng tôi sẽ liên hệ lại với bạn sớm nhất.</p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8">

              {/* Left: form inputs */}
              <div className="flex-1 flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Họ và tên..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Địa chỉ email..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Lời nhắn..."
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-semibold py-3 rounded-lg transition-all duration-150 text-sm"
                >
                  Gửi thông tin
                </button>
              </div>

              {/* Right: contact info */}
              <div className="md:w-72 shrink-0 flex flex-col gap-5">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Bạn có thể liên hệ qua thông tin trực tiếp bên dưới. (Vui lòng liên hệ vào giờ hành chính:{" "}
                  <span className="font-medium text-gray-700">9h00 – 17h30</span> hàng ngày)
                </p>

                <div>
                  <h3 className="text-base font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                    Thông tin liên hệ
                  </h3>
                  <ul className="flex flex-col gap-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <span><strong className="text-gray-700">Địa chỉ:</strong> Lê Xá – Mai Lâm – Đông Anh – Hà Nội</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <span><strong className="text-gray-700">Hotline / Zalo:</strong> 0906.092.xxx</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span><strong className="text-gray-700">Email:</strong> webdemo@gmail.com</span>
                    </li>
                  </ul>
                </div>

                {/* Working hours card */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2">Giờ làm việc</p>
                  <p className="text-sm text-orange-800">Thứ 2 – Thứ 7: <span className="font-medium">9:00 – 17:30</span></p>
                  <p className="text-sm text-orange-800">Chủ nhật: <span className="font-medium">Nghỉ</span></p>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
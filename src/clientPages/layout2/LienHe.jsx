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
    <div className="font-['Be_Vietnam_Pro'] bg-gray-50 min-h-screen pt-15 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* CỘT BÊN TRÁI: FORM & THÔNG TIN (Code hiện tại của bạn) */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 h-full">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#02173e] mb-3">
                Liên hệ <span className="text-orange-500">Linh Marketing</span>
              </h2>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Để liên hệ với Linh Marketing hoặc đội ngũ của anh ấy, hãy sử dụng thông tin bên dưới hoặc gửi tin nhắn trực tiếp qua form.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl px-6 py-10 text-center animate-bounce-in">
                  <p className="text-xl font-bold">✅ Gửi thông tin thành công!</p>
                  <p className="text-sm mt-2 text-green-600">Chúng tôi sẽ liên hệ lại với bạn sớm nhất.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-bold text-green-700 underline">Gửi lại tin nhắn khác</button>
                </div>
              ) : (
                <div className="flex flex-col gap-10">
                  {/* Form inputs */}
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Họ và tên..."
                            className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Số điện thoại..."
                            className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
                        />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Địa chỉ email..."
                      className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
                    />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Bạn cần tư vấn gì? Hãy để lại lời nhắn..."
                      rows={4}
                      className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all resize-none"
                    />
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-orange-500 hover:bg-[#e68000] active:scale-[0.98] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-200 text-sm uppercase tracking-widest"
                    >
                      Gửi tin nhắn ngay
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CỘT BÊN PHẢI: BẢN ĐỒ (Bổ sung mới) */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden h-full min-h-[400px] border border-gray-100 p-2">
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3957813506164!2d105.88582047596956!3d21.10077368056743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9689886475b%3A0xc3b8392176e73d4d!2zTMOqIFjDoSwgTWFpIEzDom0sIMSQw7RuZyBBbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1714981234567!5m2!1svi!2s"
                    className="w-full h-full rounded-2xl min-h-[500px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
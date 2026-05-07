import React, { useState } from "react";

const footerLinks = [
  { label: "Trang chủ", href: "/layout2" },
  { label: "Danh sách khóa học", href: "/layout2/courses" },
  { label: "Khóa học tiêu biểu", href: "/layout2/courses" },
  { label: "Tin tức", href: "/layout2/tin-tuc" },
  { label: "Liên hệ", href: "/layout2/lien-he" },
  { label: "Giới thiệu", href: "/layout2" },
];

const accordionSections = [
  { title: "Về ThemeVip", links: footerLinks },
  { title: "Trợ giúp", links: footerLinks },
  { title: "Hợp tác liên kết", links: footerLinks },
];

const socialLinks = [
  {
    label: "Phone",
    href: "tel:19006750",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.056 6.502C5.256 6.221 5.45 5.947 5.65 5.666c.686-.963.661-.652.188-1.731C5.432 3.014 5.02 2.1 4.613 1.18 4.23.325 4.273.179 3.211.13 2.817.106 2.441.161 2.168.313 1.27.826.463 2.1.22 3.19c-1.05 6.476 7.808 14.157 15.137 13.797 1.031-.097 2.014-.945 2.445-1.981.133-.372.218-.762.273-1.158.176-1.25.14-.987-.97-1.548-.898-.452-1.796-.909-2.7-1.36-.861-.44-.661-.55-1.274.133-.406.451-.806.896-1.213 1.347-.54.598-.37.573-1.152.287-2.39-.866-4.799-2.615-5.86-5.146-.267-.646-.237-.512.375-1.06z" fill="white" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11.017 5.799a5.2 5.2 0 100 10.403 5.2 5.2 0 000-10.403zm0 8.578a3.378 3.378 0 110-6.756 3.378 3.378 0 010 6.756z" fill="white" />
        <path d="M16.431 6.82a1.214 1.214 0 100-2.428 1.214 1.214 0 000 2.428z" fill="white" />
        <path d="M20.628 4.375a6.576 6.576 0 00-2.965-2.96 10.07 10.07 0 00-3.463-.474c-1.084-.047-1.428-.06-4.178-.06s-3.093 0-4.168.06a10.07 10.07 0 00-3.457.474 6.576 6.576 0 00-2.963 2.96A10.07 10.07 0 00.94 7.834c-.049 1.082-.064 1.425-.064 4.174s0 3.093.064 4.17a10.07 10.07 0 00.474 3.458 6.576 6.576 0 002.963 2.962 10.07 10.07 0 003.464.474c1.085.047 1.428.061 4.178.061s3.092 0 4.168-.061a10.07 10.07 0 003.463-.474 6.576 6.576 0 002.965-2.962 10.07 10.07 0 00.474-3.457c.049-1.083.064-1.426.064-4.175s0-3.092-.064-4.17a10.07 10.07 0 00-.465-3.46zm-1.37 11.723a3.502 3.502 0 01-1.957 1.958 7.51 7.51 0 01-2.546.272c-1.07.049-1.372.061-4.115.061s-3.049 0-4.1-.061a7.51 7.51 0 01-2.545-.272 3.502 3.502 0 01-1.957-1.958 7.51 7.51 0 01-.273-2.542c-.049-1.069-.06-1.37-.06-4.113s0-3.047.06-4.097a7.51 7.51 0 01.273-2.541A3.502 3.502 0 013.99 3.047a7.51 7.51 0 012.545-.272c1.071-.049 1.372-.061 4.115-.061s3.049 0 4.1.061a7.51 7.51 0 012.545.272 3.502 3.502 0 011.957 1.958 7.51 7.51 0 01.272 2.541c.049 1.07.06 1.371.06 4.114s0 3.048-.054 4.1a7.51 7.51 0 01-.272 2.458z" fill="white" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
        <path d="M8.789.129L6.598.125C4.137.125 2.547 1.755 2.547 4.278V6.193H.344A.344.344 0 000 6.537v2.774c0 .19.154.344.344.344h2.203v7.001c0 .19.154.344.344.344h2.874c.19 0 .344-.154.344-.344V9.655H8.685c.19 0 .344-.154.344-.344V6.537a.344.344 0 00-.344-.344H6.11V4.57c0-.78.186-1.176 1.203-1.176L8.789 3.39a.344.344 0 00.344-.344V.473a.344.344 0 00-.344-.344z" fill="white" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
        <path d="M11.499 16h-.005C10.801 15.996 4.667 15.944 2.925 15.489A3.556 3.556 0 01.422 13.084c-.455-1.646-.423-4.809-.423-5.065 0-.251-.032-3.44.423-5.1A3.556 3.556 0 012.92.494h.005C4.649.056 10.797.004 11.49 0h.014C12.201.004 18.354.056 20.073.511a3.556 3.556 0 012.498 1.405c.473 1.659.428 4.856.424 5.125.004.264.031 3.401-.424 5.056a3.556 3.556 0 01-2.493 1.418h-.004C18.345 15.94 12.197 16 11.504 16h-.005zM9.208 11.503V4.497l6.288 3.501-6.288 3.505z" fill="white" />
      </svg>
    ),
  },
];

function AccordionItem({ title, links }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-200 hover:text-white transition-colors"
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="pb-3 space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-gray-400 hover:text-[#00bc86] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1a2e23] text-white font-sans">

      {/* Main footer content */}
      <div className="max-w-[1190px] mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left column */}
          <div className="lg:w-[42%] shrink-0 space-y-6">
            {/* Logo */}
            <a href="/">
              <img
                src="https://khoahocvip.themevip.vip/wp-content/uploads/2025/02/logotvip.png"
                alt="ThemeVip"
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00bc86] flex items-center justify-center transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Subscribe */}
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-3">Đăng ký để nhận tin</h4>
              {subscribed ? (
                <div className="bg-[#00bc86]/20 border border-[#00bc86]/40 text-[#00bc86] text-sm px-4 py-2.5 rounded-lg">
                  ✓ Đăng ký thành công!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn"
                    required
                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00bc86] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-[#00bc86] hover:bg-[#00a874] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shrink-0"
                  >
                    Gửi
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#00bc86]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M256 0C156.7 0 76 80.7 76 180c0 33.5 9.3 66.3 26.9 94.7l142.9 230.3a15 15 0 0025.5-.2L410.6 272.2C427.2 244.4 436 212.5 436 180 436 80.7 355.3 0 256 0zm0 270.2c-49.7 0-90.2-40.4-90.2-90.2S206.3 89.8 256 89.8 346.1 130.2 346.1 180c0 49.8-40.4 90.2-90.1 90.2z" />
                </svg>
                <span>266 Đội Cấn, Liễu Giai, Hà Nội</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 shrink-0 text-[#00bc86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:19006750" className="hover:text-[#00bc86] transition-colors">1900 6750</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 shrink-0 text-[#00bc86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@themevip.net" className="hover:text-[#00bc86] transition-colors">info@themevip.net</a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 space-y-4">
            {/* Desktop: 3 columns */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {accordionSections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
                    {section.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-[#00bc86] transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile: accordion */}
            <div className="md:hidden">
              {accordionSections.map((section) => (
                <AccordionItem key={section.title} title={section.title} links={section.links} />
              ))}
            </div>

            {/* Payment */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
                Hình thức thanh toán
              </h4>
              <img
                src="https://khoahocvip.themevip.vip/wp-content/uploads/2023/10/payment.webp"
                alt="Hình thức thanh toán"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#122018]">
        <div className="max-w-[1190px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <span>
            © Bản quyền thuộc về{" "}
            <strong className="text-gray-300">TV</strong>
            {" "}|{" "}
            Cung cấp bởi{" "}
            <a href="https://themevip.net" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00bc86] transition-colors">
              ThemeVip
            </a>
          </span>
          <span>Hotline bán hàng: <a href="tel:0123456789" className="text-gray-400 hover:text-[#00bc86] transition-colors">0123.456.789</a></span>
        </div>
      </div>
    </footer>
  );
}
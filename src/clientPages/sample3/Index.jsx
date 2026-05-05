import React from "react";
import { Button, Card } from "../../components/common";

const heroImage = encodeURI("/sample/Dạy học online.png");
const stats = [
    { label: "Học viên", value: "8.500+" },
    { label: "Khóa học", value: "120+" },
    { label: "Giảng viên", value: "45+" },
];

const Sample3 = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative overflow-hidden">
                <img src={heroImage} alt="Sample 3" className="h-[420px] w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/40 to-emerald-950/90" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="max-w-3xl">
                        <p className="mb-4 rounded-full bg-emerald-500/20 px-4 py-2 text-sm uppercase tracking-[0.2em] text-emerald-200">Mẫu Online Academy</p>
                        <h1 className="mb-6 text-4xl font-semibold sm:text-5xl">Triển khai trải nghiệm học trực tuyến hiện đại cho mọi ngành học.</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200">Giao diện sạch, dễ sử dụng, tối ưu cho học viên, phụ huynh và quản trị viên.</p>
                        <Button variant="primary">Khám phá ngay</Button>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10">
                <div className="grid gap-6 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.label} className="rounded-3xl bg-slate-900/80 p-8 text-center shadow-2xl shadow-emerald-500/10">
                            <p className="text-4xl font-semibold text-white">{item.value}</p>
                            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-emerald-300">{item.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Card title="Giao diện cá nhân hóa" description="Mỗi khóa học được thiết kế riêng biệt theo diện mạo thương hiệu." footer="Tùy biến dễ dàng" />
                    <Card title="Hệ thống đánh giá" description="Đánh giá năng lực, xếp hạng khóa học và phản hồi trực tiếp." footer="Quản lý thông minh" />
                    <Card title="Báo cáo chi tiết" description="Bảng điều khiển quản lý hiển thị số liệu hiệu quả học tập." footer="Phân tích sâu" />
                </div>
            </section>
        </main>
    );
};

export default Sample3;

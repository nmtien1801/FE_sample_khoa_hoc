import React from "react";
import { Button, Card } from "../../components/common";

const heroImage = encodeURI("/sample/Trung tâm Tiếng Anh.png");
const programs = [
    { title: "IELTS 1:1", description: "Luyện thi chuyên sâu với giáo viên bản ngữ.", badge: "Nâng cao" },
    { title: "Giao tiếp tự tin", description: "Kỹ năng nói và phát âm chuẩn quốc tế.", badge: "Khởi đầu" },
    { title: "Anh văn thiếu nhi", description: "Lộ trình học cho bé phát triển toàn diện.", badge: "Trẻ em" },
];

const Sample4 = () => {
    return (
        <main className="min-h-screen bg-sky-950 text-slate-100">
            <section className="relative overflow-hidden bg-sky-950">
                <img src={heroImage} alt="Trung tâm Tiếng Anh" className="h-[420px] w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-950/30 to-slate-950/90" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="max-w-3xl text-white">
                        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-sky-200">Mẫu Trung tâm Anh ngữ</p>
                        <h1 className="mb-6 text-4xl font-semibold sm:text-5xl">Học tiếng Anh chuẩn quốc tế với chương trình hiện đại.</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200">Hệ thống khóa học từ giao tiếp cơ bản tới chứng chỉ IELTS chuyên sâu.</p>
                        <Button variant="primary">Đăng ký tư vấn</Button>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10">
                <div className="grid gap-6 sm:grid-cols-3">
                    {programs.map((program) => (
                        <Card key={program.title} title={program.title} description={program.description} footer={program.badge} />
                    ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-100 shadow-xl shadow-sky-500/10">
                    <h2 className="mb-4 text-3xl font-semibold">Bài học nổi bật</h2>
                    <p className="max-w-2xl text-slate-300">Nền tảng hỗ trợ lớp học hybrid, bài tập gia tăng, báo cáo tiến độ và học liệu theo chủ đề.</p>
                </div>
            </section>
        </main>
    );
};

export default Sample4;

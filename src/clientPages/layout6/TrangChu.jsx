import React from "react";
import { Button, Card } from "../../components/common";

const heroImage = encodeURI("/sample/Trung tâm tiếng Trung.png");
const advantages = [
    { title: "Luyện ngữ âm chuẩn", description: "Phát âm chữ Hán và luyện nghe nhanh chóng." },
    { title: "Học theo chủ đề", description: "Văn hoá, du học và giao tiếp kinh doanh." },
    { title: "Luyện HSK", description: "Thi HSK các trình độ từ sơ cấp đến cao cấp." },
];

const Sample6 = () => {
    return (
        <main className="min-h-screen bg-rose-950 text-slate-100">
            <section className="relative overflow-hidden">
                <img src={heroImage} alt="Trung tâm tiếng Trung" className="h-[420px] w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 via-slate-950/30 to-rose-950/90" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="max-w-3xl text-white">
                        <p className="mb-4 inline-block rounded-full bg-rose-400/20 px-4 py-2 text-sm uppercase tracking-[0.2em] text-rose-200">Mẫu Trung tâm Trung ngữ</p>
                        <h1 className="mb-6 text-4xl font-semibold sm:text-5xl">Khóa học tiếng Trung chuẩn HSK, học hiệu quả theo lộ trình.</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200">Giao diện thiết kế đơn giản, tập trung vào nội dung và trải nghiệm học tập.</p>
                        <Button>Khóa học thử</Button>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10">
                <div className="grid gap-6 sm:grid-cols-3">
                    {advantages.map((item) => (
                        <Card key={item.title} title={item.title} description={item.description} />
                    ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-100 shadow-xl shadow-rose-500/10">
                    <h2 className="mb-4 text-3xl font-semibold">Lợi thế học tập</h2>
                    <p className="max-w-2xl text-slate-300">Tích hợp trợ giảng, bài tập tự động, lịch học và đánh giá năng lực theo từng bài học.</p>
                </div>
            </section>
        </main>
    );
};

export default Sample6;

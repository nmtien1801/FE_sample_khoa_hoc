import React from "react";
import { Button, Card } from "../../components/common";

const heroImage = encodeURI("/sample/Trung tâm tiếng Hàn.png");
const specialties = [
    { title: "Học giao tiếp Hàn Quốc", description: "Nghe nói thực tế, luyện phát âm chuẩn Hàn." },
    { title: "Korean K-Pop & K-Drama", description: "Học tiếng Hàn qua văn hoá và truyền thông." },
    { title: "Chuẩn TOPIK", description: "Lộ trình thi TOPIK từ cơ bản đến nâng cao." },
];

const Sample5 = () => {
    return (
        <main className="min-h-screen bg-emerald-950 text-slate-100">
            <section className="relative overflow-hidden">
                <img src={heroImage} alt="Trung tâm tiếng Hàn" className="h-[420px] w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950/30 to-emerald-950/90" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="max-w-3xl text-white">
                        <p className="mb-4 inline-block rounded-full bg-emerald-400/20 px-4 py-2 text-sm uppercase tracking-[0.2em] text-emerald-200">Mẫu Trung tâm Hàn ngữ</p>
                        <h1 className="mb-6 text-4xl font-semibold sm:text-5xl">Khám phá chương trình học tiếng Hàn hiện đại, dễ nhớ.</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200">Phù hợp học viên mới bắt đầu, du học sinh và người đi làm cần giao tiếp nhanh.</p>
                        <Button variant="secondary">Tư vấn miễn phí</Button>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10">
                <div className="grid gap-6 sm:grid-cols-3">
                    {specialties.map((item) => (
                        <Card key={item.title} title={item.title} description={item.description} />
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <Card title="Lớp học online" description="Học mọi lúc, mọi nơi với giảng viên chuyên sâu." footer="Linh hoạt" />
                    <Card title="Luyện thi TOPIK" description="Khoá luyện đề, phản biện và cấu trúc trình độ." footer="Chuẩn xác" />
                    <Card title="Tương tác 1:1" description="Học kèm giáo viên với feedback ngay lập tức." footer="Chuyên nghiệp" />
                </div>
            </section>
        </main>
    );
};

export default Sample5;

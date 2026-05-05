import React from "react";
import { Button, Card } from "../../components/common";
import SampleBadge from "../../components/specific/SampleBadge.jsx";

const heroImage = encodeURI("/sample/Dạy học online 1.png");
const courses = [
    { title: "Lập trình React cơ bản", description: "Học cách xây dựng ứng dụng web hiện đại với React.", tags: ["Frontend", "React", "UI"], price: "1.800.000đ" },
    { title: "Nền tảng JavaScript", description: "Từ ES6 đến nâng cao, chuẩn bị cho mọi dự án.", tags: ["JavaScript", "Web"], price: "1.200.000đ" },
    { title: "Thiết kế UX/UI", description: "Tạo trải nghiệm học tập trực tuyến chuyên nghiệp.", tags: ["Design", "UX", "Figma"], price: "1.500.000đ" },
];

const Sample1 = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="relative overflow-hidden">
                <img src={heroImage} alt="Sample 1" className="h-[420px] w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/80" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <div className="max-w-3xl text-white">
                        <SampleBadge text="Mẫu Dạy học Online" />
                        <h1 className="mb-6 mt-6 text-4xl font-semibold sm:text-5xl">Nền tảng học trực tuyến dành cho cả giáo viên và học viên.</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200">Tổ chức lớp, quản lý bài học, trao đổi nội dung và đo lường tiến độ trong một giao diện thân thiện.</p>
                        <Button variant="primary">Bắt đầu ngay</Button>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl space-y-8 px-6 py-16 sm:px-10">
                <div className="grid gap-6 sm:grid-cols-3">
                    <Card title="Khoá học tương tác" description="Bài học đa phương tiện, bài tập và bài kiểm tra nối tiếp." />
                    <Card title="Lớp học livestream" description="Hỗ trợ tương tác thời gian thực và trao đổi trực tiếp với giảng viên." />
                    <Card title="Báo cáo tiến độ" description="Tự động đánh giá năng lực và theo dõi hiệu suất học tập." />
                </div>

                <div>
                    <h2 className="mb-4 text-3xl font-semibold text-white">Khoá học nổi bật</h2>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {courses.map((course) => (
                            <Card key={course.title} title={course.title} description={course.description} footer={course.price}>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {course.tags.map((tag) => (
                                        <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{tag}</span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Sample1;

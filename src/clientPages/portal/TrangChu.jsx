import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/common";

const samples = [
    {
        id: "layout1",
        title: "Mẫu Dạy học Online 1",
        description: "Nền tảng học trực tuyến với giao diện hiện đại, quản lý khóa học và bài giảng.",
        image: "/sample/Dạy học online 1.png",
        path: "/layout1",
    },
    {
        id: "layout2",
        title: "Mẫu Dạy học Online 2",
        description: "Giao diện sáng tạo với tính năng tương tác cao và quản lý giảng viên.",
        image: "/sample/Dạy học online 2.png",
        path: "/layout2",
    },
    {
        id: "layout3",
        title: "Mẫu Online Academy",
        description: "Hệ thống học tập toàn diện với báo cáo chi tiết và thống kê.",
        image: "/sample/Dạy học online.png",
        path: "/layout3",
    },
    {
        id: "layout4",
        title: "Mẫu Trung tâm Tiếng Anh",
        description: "Chương trình học tiếng Anh chuẩn quốc tế với lộ trình IELTS.",
        image: "/sample/Trung tâm Tiếng Anh.png",
        path: "/layout4",
    },
    {
        id: "layout5",
        title: "Mẫu Trung tâm Tiếng Hàn",
        description: "Khóa học tiếng Hàn hiện đại, từ cơ bản đến TOPIK chuyên sâu.",
        image: "/sample/Trung tâm tiếng Hàn.png",
        path: "/layout5",
    },
    {
        id: "layout6",
        title: "Mẫu Trung tâm Tiếng Trung",
        description: "Lộ trình học tiếng Trung chuẩn HSK với phương pháp hiệu quả.",
        image: "/sample/Trung tâm tiếng Trung.png",
        path: "/layout6",
    },
];

const LandingPage = () => {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-semibold sm:text-5xl">WebDayHoc Templates</h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-300">
                        Bộ sưu tập 6 mẫu giao diện website học trực tuyến và trung tâm ngoại ngữ.
                        Chọn mẫu phù hợp với nhu cầu của bạn.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {samples.map((sample) => (
                        <Link key={sample.id} to={sample.path} className="group">
                            <Card
                                title={sample.title}
                                description={sample.description}
                                image={sample.image}
                                className="h-full transition-transform group-hover:scale-105"
                            >
                                <div className="mt-4">
                                    <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-200 transition-colors group-hover:bg-cyan-500/30">
                                        Xem mẫu →
                                    </span>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        to="/login"
                        className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
                    >
                        Ứng dụng Quản lý Legacy
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;

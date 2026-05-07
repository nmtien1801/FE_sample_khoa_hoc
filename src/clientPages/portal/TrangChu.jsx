import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/common";

const samples = [
    {
        id: "layout1",
        title: "Mẫu Khóa học kinh doanh",
        description: "Nền tảng học trực tuyến với giao diện hiện đại, quản lý khóa học và bài giảng.",
        image: "/sample/Dạy học online 1.png",
        path: "/layout1",
    },
    {
        id: "layout2",
        title: "Mẫu Dạy học Online 2",
        description: "Giao diện bán khóa học đa dạng, phù hợp không chỉ cho 1 khóa mà cho cả hệ thống học online.",
        image: "/sample/Dạy học online 2.png",
        path: "/layout2",
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

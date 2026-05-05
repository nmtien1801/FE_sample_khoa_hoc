import React, { useEffect } from "react";
import { Button, Card } from "../../components/common";
import SampleBadge from "../../components/specific/SampleBadge.jsx";
import SampleHeader from "../../components/specific/SampleHeader.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getListCourse } from '../../redux/courseSlice.js';

const heroImage = encodeURI("/sample/Dạy học online 1.png");

const Sample1 = () => {
    const dispatch = useDispatch();
    const { CourseList, loading } = useSelector((state) => state.course);

    useEffect(() => {
        const fetchCourses = async () => {
            await dispatch(getListCourse({ page: 1, limit: 3 }));
        };
        fetchCourses();
    }, [dispatch]);

    // Mock data fallback if no courses from API
    const mockCourses = [
        { id: 1, title: "Lập trình React cơ bản", description: "Học cách xây dựng ứng dụng web hiện đại với React.", tags: ["Frontend", "React", "UI"], price: "1.800.000đ" },
        { id: 2, title: "Nền tảng JavaScript", description: "Từ ES6 đến nâng cao, chuẩn bị cho mọi dự án.", tags: ["JavaScript", "Web"], price: "1.200.000đ" },
        { id: 3, title: "Thiết kế UX/UI", description: "Tạo trải nghiệm học tập trực tuyến chuyên nghiệp.", tags: ["Design", "UX", "Figma"], price: "1.500.000đ" },
    ];

    const courses = CourseList.length > 0 ? CourseList : mockCourses;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <SampleHeader title="Mẫu Dạy học Online 1" />

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
                            <Card key={course.id || course.title} title={course.title || course.name} description={course.description} footer={course.price || "Liên hệ"}>
                                {course.tags && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {course.tags.map((tag) => (
                                            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sample1;

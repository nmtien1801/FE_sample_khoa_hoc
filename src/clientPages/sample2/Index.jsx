import React, { useEffect } from "react";
import { Button, Card } from "../../components/common";
import SampleHeader from "../../components/specific/SampleHeader.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getListTeacher } from '../../redux/teacherSlice.js';

const heroImage = encodeURI("/sample/Dạy học online 2.png");

const Sample2 = () => {
    const dispatch = useDispatch();
    const { TeacherList, loading } = useSelector((state) => state.teacher);

    useEffect(() => {
        const fetchTeachers = async () => {
            await dispatch(getListTeacher({ page: 1, limit: 3 }));
        };
        fetchTeachers();
    }, [dispatch]);

    // Mock data fallback if no teachers from API
    const mockTeachers = [
        { id: 1, name: "Huỳnh Nam", title: "Chuyên gia Data Science", experience: "8 năm kinh nghiệm" },
        { id: 2, name: "Ngọc Trinh", title: "Giảng viên Web Fullstack", experience: "10 năm kinh nghiệm" },
        { id: 3, name: "Minh Anh", title: "Chuyên viên UX/UI", experience: "7 năm kinh nghiệm" },
    ];

    const teachers = TeacherList.length > 0 ? TeacherList : mockTeachers;

    const Sample2 = () => {
        return (
            <div className="min-h-screen bg-slate-900 text-slate-100">
                <SampleHeader title="Mẫu Dạy học Online 2" />

                <section className="relative overflow-hidden">
                    <img src={heroImage} alt="Sample 2" className="h-[420px] w-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/20 to-slate-950/75" />
                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                        <div className="max-w-3xl text-white">
                            <p className="mb-4 inline-block rounded-full bg-amber-400/15 px-4 py-2 text-sm uppercase tracking-[0.2em] text-amber-200">Mẫu dạy học sáng tạo</p>
                            <h1 className="mb-6 text-4xl font-semibold sm:text-5xl">Lớp học trực tuyến thân thiện với người dùng, sẵn sàng cho mọi chương trình.</h1>
                            <p className="mx-auto mb-8 max-w-2xl text-base text-slate-200">Giáo án trực quan, quản lý bài học và thông báo linh hoạt cho học viên và phụ huynh.</p>
                            <Button variant="secondary">Xem demo</Button>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl space-y-10 px-6 py-16 sm:px-10">
                    <div className="grid gap-6 sm:grid-cols-3">
                        <Card title="Học viên tương tác" description="Giải pháp kết nối hình ảnh, chat và quiz trong buổi học." />
                        <Card title="Quản lý bài giảng" description="Tải lên bài học, tài liệu và kiểm tra năng lực ngay trên web." />
                        <Card title="Hỗ trợ đa nền tảng" description="Tương thích trên máy tính, máy tính bảng và điện thoại." />
                    </div>

                    <div>
                        <h2 className="mb-4 text-3xl font-semibold text-white">Đội ngũ giảng viên</h2>
                        <div className="grid gap-6 sm:grid-cols-3">
                            {teachers.map((teacher) => (
                                <Card key={teacher.id || teacher.name} title={teacher.name} description={teacher.title || teacher.specialization} footer={teacher.experience || "Kinh nghiệm phong phú"} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}
export default Sample2;

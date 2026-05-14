import React, { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { courses } from "./courseData";
import { useSelector, useDispatch } from "react-redux";
import { getListCourse } from "../../redux/courseSlice";

const STORAGE_KEY = "layout2_purchasedCourses";

function getPurchasedCourseIds() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

export default function MyCourses() {
    const dispatch = useDispatch();
    // const { CourseList } = useSelector((state) => state.course);
    const purchasedIds = getPurchasedCourseIds();

    // useEffect(() => {
    //     dispatch(getListCourse());
    // }, []);

    const purchasedCourses = useMemo(
        () => courses.filter((course) => purchasedIds.includes(course.id)),
        [purchasedIds]
    );

    if (purchasedCourses.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 py-20">
                <div className="max-w-3xl mx-auto rounded-3xl bg-white p-10 text-center shadow-sm">
                    <p className="text-xl font-semibold text-slate-900">Bạn chưa mua khóa học nào.</p>
                    <p className="mt-4 text-slate-600">Đăng nhập hoặc quay lại danh sách khóa học để chọn khóa học phù hợp.</p>
                    <Link
                        to="/layout2/courses"
                        className="mt-8 inline-flex rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                    >
                        Xem danh sách khóa học
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-16">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-600">Tài khoản</p>
                    <h1 className="mt-3 text-4xl font-bold text-slate-900">Khóa học đã mua</h1>
                    <p className="mt-4 max-w-2xl text-slate-600">Xem lại khóa học đang theo học và tiếp tục mở các bài giảng đã mua.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {purchasedCourses.map((course) => (
                        <div key={course.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                                <img src={course.image} alt={course.title} className="h-32 w-full rounded-3xl object-cover lg:w-40" />
                                <div className="flex-1">
                                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">{course.category}</p>
                                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">{course.title}</h2>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>
                                    <div className="mt-4 flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-lg font-black text-slate-900">{course.price.toLocaleString()}₫</p>
                                            <p className="text-sm text-slate-500 line-through">{course.oldPrice.toLocaleString()}₫</p>
                                        </div>
                                        <Link
                                            to={`/layout2/my-courses/${course.id}`}
                                            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                                        >
                                            Xem bài học
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

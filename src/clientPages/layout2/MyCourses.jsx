import React, { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListCourse } from "../../redux/courseSlice";

const STORAGE_KEY = "layout2_purchasedCourses";

function getPurchasedCourseIds() {
    try {
        // Lưu ý: Đảm bảo dữ liệu trong localStorage khớp với kiểu dữ liệu ID của Database (thường là number hoặc string)
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

export default function MyCourses() {
    const dispatch = useDispatch();

    // Lấy CourseList và trạng thái loading từ redux
    const { CourseList, loading } = useSelector((state) => state.course);
    const purchasedIds = getPurchasedCourseIds();

    useEffect(() => {
        if (CourseList.length === 0) {
            dispatch(getListCourse());
        }
    }, [dispatch, CourseList.length]);

    // Lọc danh sách khóa học dựa trên ID từ localStorage
    const purchasedCourses = useMemo(() => {
        return CourseList.filter((course) =>
            // Kiểm tra theo trường id hoặc orderId tùy theo logic database của bạn
            purchasedIds.includes(course.id) || purchasedIds.includes(course.orderId)
        );
    }, [CourseList, purchasedIds]);

    // Hiển thị loading khi đang tải dữ liệu
    if (loading && CourseList.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
            </main>
        );
    }

    // Hiển thị nếu chưa mua khóa học nào
    if (purchasedCourses.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 py-20">
                <div className="max-w-3xl mx-auto rounded-3xl bg-white p-10 text-center shadow-sm">
                    <p className="text-xl font-semibold text-slate-900">Bạn chưa sở hữu khóa học nào.</p>
                    <p className="mt-4 text-slate-600">Hãy khám phá các khóa học mới nhất từ Creatimic Studio.</p>
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
                    <p className="mt-4 max-w-2xl text-slate-600">Tiếp tục hành trình chinh phục kiến thức của bạn.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {purchasedCourses.map((course) => (
                        <div key={course.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                                {/* Dùng ảnh từ database hoặc ảnh mặc định nếu null */}
                                <img
                                    src={course.image || "https://via.placeholder.com/300x200"}
                                    alt={course.title}
                                    className="h-32 w-full rounded-3xl object-cover lg:w-40"
                                />
                                <div className="flex-1">
                                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">
                                        {course.Category?.name || "Khóa học"}
                                    </p>
                                    <h2 className="mt-2 text-xl font-bold text-slate-900 line-clamp-1">{course.title}</h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{course.summary}</p>

                                    <div className="mt-4 flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-lg font-black text-slate-900">
                                                {Number(course.price).toLocaleString()}₫
                                            </p>
                                        </div>
                                        <Link
                                            to={`/layout2/my-courses/${course.id}`}
                                            className="rounded-full bg-emerald-600 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                                        >
                                            Vào học ngay
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
import React, { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { courses } from "./courseData";

const STORAGE_KEY = "layout2_cart";

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function setCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = useMemo(() => courses.find((item) => item.id === Number(id)), [id]);
console.log('sssssssss ', course);

    // if (!course) {
    //     return (
    //         <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    //             <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
    //                 <p className="text-lg font-semibold text-slate-900">Khóa học không tồn tại.</p>
    //                 <button
    //                     onClick={() => navigate("/layout2/courses")}
    //                     className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition"
    //                 >
    //                     Quay về danh sách khóa học
    //                 </button>
    //             </div>
    //         </div>
    //     );
    // }

    const handleAddToCart = () => {
        const cart = getCart();
        const exist = cart.find((item) => item.id === course.id);
        if (exist) {
            setCart(cart.map((item) => item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...course, quantity: 1 }]);
        }
        window.dispatchEvent(new Event("layout2CartUpdate"));
        toast.success(`Đã thêm ${course.title} vào giỏ hàng`);
    };

    const relatedCourses = courses.filter((item) => item.category === course.category && item.id !== course.id).slice(0, 3);

    return (
        <main className="min-h-screen bg-slate-50 pb-16">
            <section className="bg-white border-b border-slate-200 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                        <Link to="/layout2" className="hover:text-emerald-600">Trang chủ</Link>
                        <span>/</span>
                        <Link to="/layout2/courses" className="hover:text-emerald-600">Danh sách khóa học</Link>
                        <span>/</span>
                        <span className="font-semibold text-slate-900">{course.title}</span>
                    </nav>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 grid gap-8 xl:grid-cols-[2fr_1fr]">
                <div className="space-y-8">
                    <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                        <img src={course.image} alt={course.title} className="w-full object-cover" />
                        <div className="p-8">
                            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">{course.category}</span>
                            <h1 className="mt-5 text-3xl font-bold text-slate-900">{course.title}</h1>
                            <p className="mt-4 text-slate-600 leading-7">{course.description}</p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-3xl bg-slate-50 p-5 text-sm">
                                    <p className="font-semibold text-slate-900">Thời lượng</p>
                                    <p className="mt-2 text-slate-600">{course.duration}</p>
                                </div>
                                <div className="rounded-3xl bg-slate-50 p-5 text-sm">
                                    <p className="font-semibold text-slate-900">Mức độ</p>
                                    <p className="mt-2 text-slate-600">{course.level}</p>
                                </div>
                                <div className="rounded-3xl bg-slate-50 p-5 text-sm">
                                    <p className="font-semibold text-slate-900">Học viên</p>
                                    <p className="mt-2 text-slate-600">{course.students} người</p>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-3xl font-black text-slate-900">{course.price.toLocaleString()}₫</p>
                                    <p className="text-sm text-slate-500 line-through">{course.oldPrice.toLocaleString()}₫</p>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <button
                                        onClick={handleAddToCart}
                                        className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                                    >
                                        Thêm giỏ hàng
                                    </button>
                                    <Link
                                        to="/layout2/cart"
                                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 transition"
                                    >
                                        Xem giỏ hàng
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold text-slate-900">Nội dung khóa học</h2>
                        <ul className="mt-6 space-y-4 text-slate-600">
                            {course.details.map((item, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                        <h3 className="text-xl font-semibold text-slate-900">Thông tin nhanh</h3>
                        <div className="mt-6 grid gap-4 text-sm text-slate-600">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3"> <span>Danh mục</span> <span>{course.category}</span> </div>
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3"> <span>Thời lượng</span> <span>{course.duration}</span> </div>
                            <div className="flex items-center justify-between"> <span>Học viên</span> <span>{course.students}</span> </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                        <h3 className="text-xl font-semibold text-slate-900">Khóa học cùng chủ đề</h3>
                        <div className="mt-5 space-y-4">
                            {relatedCourses.map((related) => (
                                <Link
                                    key={related.id}
                                    to={`/layout2/courses/${related.id}`}
                                    className="block rounded-3xl border border-slate-200 p-4 hover:border-emerald-600 hover:bg-slate-50 transition"
                                >
                                    <h4 className="font-semibold text-slate-900">{related.title}</h4>
                                    <p className="mt-2 text-sm text-slate-600">{related.price.toLocaleString()}₫</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    );
}

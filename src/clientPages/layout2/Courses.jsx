import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { courses, categories } from "./courseData";

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

export default function Courses() {
    const [searchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const categoryParam = searchParams.get("category") || "Tất cả";
        const searchParam = searchParams.get("search") || "";
        setSelectedCategory(categoryParam);
        setSearch(searchParam);
    }, [searchParams]);

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const matchesCategory = selectedCategory === "Tất cả" || course.category === selectedCategory;
            const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, search]);

    const handleAddToCart = (course) => {
        const cart = getCart();
        const exists = cart.find((item) => item.id === course.id);
        if (exists) {
            const updated = cart.map((item) => item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item);
            setCart(updated);
        } else {
            setCart([...cart, { ...course, quantity: 1 }]);
        }
        window.dispatchEvent(new Event("layout2CartUpdate"));
        toast.success(`Đã thêm ${course.title} vào giỏ hàng`);
    };

    return (
        <main className="min-h-screen bg-slate-50 pb-16">
            <section className="bg-gradient-to-r from-emerald-600 to-slate-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Danh sách khóa học</p>
                        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Chọn khóa học phù hợp để phát triển kỹ năng và bán được nhiều học viên.</h1>
                        <p className="mt-5 text-base text-emerald-100/90">Các khóa học được thiết kế để giúp bạn xây dựng hệ thống kinh doanh online, tạo nội dung và tối ưu chuyển đổi từ học viên tiềm năng.</p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedCategory === category ? "bg-white text-slate-900" : "bg-white/10 text-emerald-100 hover:bg-white/20"}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full sm:w-auto">
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Tìm khóa học"
                                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:opacity-80 focus:border-white focus:outline-none sm:w-80"
                            />
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-emerald-100/90">
                        <span>{filteredCourses.length} khóa học</span>
                        <span>|</span>
                        <span>{selectedCategory === "Tất cả" ? "Tất cả danh mục" : selectedCategory}</span>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
                        <Link to={`/layout2/courses/${course.id}`} className="block overflow-hidden bg-slate-950">
                            <img src={course.image} alt={course.title} className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
                        </Link>
                        <div className="p-6">
                            <Link to={`/layout2/courses/${course.id}`} className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">{course.category}</Link>
                            <h2 className="mt-4 text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors line-clamp-2">
                                <Link to={`/layout2/courses/${course.id}`}>{course.title}</Link>
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>
                            <div className="mt-5 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-2xl font-black text-slate-900">{course.price.toLocaleString()}₫</p>
                                    <p className="text-sm text-slate-500 line-through">{course.oldPrice.toLocaleString()}₫</p>
                                </div>
                                <button
                                    onClick={() => handleAddToCart(course)}
                                    className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                                >
                                    Thêm giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

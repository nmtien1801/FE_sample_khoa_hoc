import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(getCart());
    }, []);

    const handleQuantityChange = (id, delta) => {
        const updated = cartItems.map((item) => {
            if (item.id !== id) return item;
            const nextQuantity = Math.max(1, item.quantity + delta);
            return { ...item, quantity: nextQuantity };
        });
        const filtered = updated.filter((item) => item.quantity > 0);
        setCartItems(filtered);
        setCart(filtered);
        window.dispatchEvent(new Event("layout2CartUpdate"));
    };

    const handleRemove = (id) => {
        const updated = cartItems.filter((item) => item.id !== id);
        setCartItems(updated);
        setCart(updated);
        window.dispatchEvent(new Event("layout2CartUpdate"));
        toast.info("Đã xoá khỏi giỏ hàng");
    };

    const total = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [cartItems]
    );

    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-slate-50 py-20">
                <div className="max-w-3xl mx-auto rounded-3xl bg-white p-10 text-center shadow-sm">
                    <p className="text-xl font-semibold text-slate-900">Giỏ hàng của bạn hiện đang trống.</p>
                    <p className="mt-4 text-slate-600">Hãy quay lại danh sách khóa học để thêm khóa học yêu thích.</p>
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
        <main className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Giỏ hàng</p>
                        <h1 className="mt-3 text-3xl font-bold text-slate-900">Xem lại khóa học đã chọn</h1>
                    </div>
                    <Link
                        to="/layout2/courses"
                        className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 transition"
                    >
                        Tiếp tục mua khóa học
                    </Link>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.7fr_0.8fr]">
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                                    <img src={item.image} alt={item.title} className="h-36 w-36 rounded-3xl object-cover" />
                                    <div className="flex-1">
                                        <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">{item.category}</p>
                                        <h2 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h2>
                                        <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                                        <div className="mt-4 flex items-center gap-3 flex-wrap">
                                            <span className="text-lg font-black text-slate-900">{item.price.toLocaleString()}₫</span>
                                            <span className="text-sm text-slate-500">x {item.quantity}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="inline-flex overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                                className="px-4 py-2 text-slate-700 hover:bg-slate-200"
                                            >-</button>
                                            <div className="px-4 py-2 text-sm font-semibold text-slate-900">{item.quantity}</div>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                                className="px-4 py-2 text-slate-700 hover:bg-slate-200"
                                            >+</button>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">Tóm tắt đơn hàng</h2>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between text-sm text-slate-600">
                                <span>Tổng số khóa học</span>
                                <span>{cartItems.length}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-slate-600">
                                <span>Tổng tiền</span>
                                <span className="font-semibold text-slate-900">{total.toLocaleString()}₫</span>
                            </div>
                        </div>
                        <button className="mt-8 w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition">
                            Thanh toán ngay
                        </button>
                    </aside>
                </div>
            </div>
        </main>
    );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Sample1 from "../clientPages/sample1/Index.jsx";
import Sample2 from "../clientPages/sample2/Index.jsx";
import Sample3 from "../clientPages/sample3/Index.jsx";
import Sample4 from "../clientPages/sample4/Index.jsx";
import Sample5 from "../clientPages/sample5/Index.jsx";
import Sample6 from "../clientPages/sample6/Index.jsx";

const sampleLinks = [
    { path: "/sample1", title: "Mẫu 1" },
    { path: "/sample2", title: "Mẫu 2" },
    { path: "/sample3", title: "Mẫu 3" },
    { path: "/sample4", title: "Mẫu Anh" },
    { path: "/sample5", title: "Mẫu Hàn" },
    { path: "/sample6", title: "Mẫu Trung" },
];

function AppRouter() {
    return (
        <Router>
            <div className="min-h-screen bg-slate-950 text-slate-100">
                <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-lg">
                    <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-4 py-3">
                        <div className="text-xl font-semibold text-white">WebDayHoc Templates</div>
                        <nav className="flex flex-wrap gap-3">
                            {sampleLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-cyan-500 text-slate-950" : "bg-white/10 text-slate-100 hover:bg-white/20"}`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/login"
                                className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/20"
                            >
                                Legacy App
                            </NavLink>
                        </nav>
                    </div>
                </header>

                <Routes>
                    <Route path="/sample1" element={<Sample1 />} />
                    <Route path="/sample2" element={<Sample2 />} />
                    <Route path="/sample3" element={<Sample3 />} />
                    <Route path="/sample4" element={<Sample4 />} />
                    <Route path="/sample5" element={<Sample5 />} />
                    <Route path="/sample6" element={<Sample6 />} />
                    <Route path="/" element={<Navigate to="/sample1" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;

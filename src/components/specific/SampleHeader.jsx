import React from "react";
import { Link } from "react-router-dom";

const SampleHeader = ({ title }) => {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-lg">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3">
                <Link
                    to="/"
                    className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                    WebDayHoc Templates
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-300">{title}</span>
                    <Link
                        to="/"
                        className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/20"
                    >
                        ← Quay lại
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default SampleHeader;
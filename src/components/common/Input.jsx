import React from "react";

const Input = ({ label, type = "text", className = "", ...props }) => {
    return (
        <label className="block text-sm leading-6 text-slate-100">
            {label ? <span className="mb-2 block text-slate-200">{label}</span> : null}
            <input
                type={type}
                className={`w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 ${className}`}
                {...props}
            />
        </label>
    );
};

export default Input;

import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const variants = {
        primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "bg-transparent border border-white/20 text-white hover:bg-white/10",
    };

    return (
        <button
            className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

import React from "react";

const SampleBadge = ({ text }) => {
    return (
        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200 shadow-sm shadow-slate-950/20">
            {text}
        </span>
    );
};

export default SampleBadge;

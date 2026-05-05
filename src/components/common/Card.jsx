import React from "react";

const Card = ({ title, description, image, footer, className = "", children }) => {
    return (
        <div className={`rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur-sm ${className}`}>
            {image ? <img src={image} alt={title} className="mb-5 h-48 w-full rounded-3xl object-cover" /> : null}
            {title ? <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3> : null}
            {description ? <p className="mb-4 text-sm leading-6 text-slate-300">{description}</p> : null}
            {children}
            {footer ? <div className="mt-4 text-sm text-slate-400">{footer}</div> : null}
        </div>
    );
};

export default Card;

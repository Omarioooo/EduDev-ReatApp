import React from "react";

export default function Card({ img, title, description, color, bgColor }) {
    return (
        <>
            <div className="card">
                <span
                    className="icon"
                    style={{ color: color, background: bgColor }}
                >
                    {img}
                </span>
                <h3 style={{ "--cardColor": color }}>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

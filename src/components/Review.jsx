import React from "react";
import RatingStars from "./RatingStars";

export default function Review({ stars, img, description, name, job }) {

    return (
        <>
            <div className="review info-card">
                <RatingStars stars={stars}/>
                <p>{description}</p>
                <div className="reviewer">
                    <img src={img} alt={name} />
                    <div className="info">
                        <span className="name">{name}</span>
                        <span className="job">{job}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

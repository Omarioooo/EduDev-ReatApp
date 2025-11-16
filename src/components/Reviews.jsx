import React from "react";
import SectionHeader from "./SectionHeader";
import Review from "./Review";
import { ReviewData } from "../data";

export default function Reviews() {
    return (
        <>
            <div className="reviews section bg-white">
                <div className="container">
                    <SectionHeader
                        title={"Each and every client is important"}
                        description={
                            "Discover what our students are saying in the reviews section! real feedback from learners who have experienced and benefit from our courses."
                        }
                    />
                    <div className="reviews-wrapper">
                        {ReviewData.map((review) => {
                            const { id, stars, img, description, name, job } =
                                review;
                            return (
                                <Review
                                    id={id}
                                    stars={stars}
                                    img={img}
                                    description={description}
                                    name={name}
                                    job={job}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

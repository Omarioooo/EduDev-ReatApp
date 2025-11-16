import React from "react";
import {cardData} from "../data";
import Card from "./Card";

export default function Home() {
    return (
        <>
            <div className="home section bg-dark-blue">
                <div className="container">
                    <div className="home-header">
                        <span className="join-us">Join US</span>
                        <p>Best Learning Opportunities</p>
                        <p>
                            We Know how large objects will act, but things on a
                            small scale just do not act that way
                        </p>
                        <div className="home-btns">
                            <button className="quote-btns">
                                Get Quote Now
                            </button>
                            <button className="learn-more-btn">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="cards-wrapper">
                        {cardData.map((card) => {
                            const {
                                id,
                                img,
                                title,
                                description,
                                color,
                                bgColor,
                            } = card;
                            return (
                                <Card
                                    key={id}
                                    img={img}
                                    title={title}
                                    description={description}
                                    color={color}
                                    bgColor={bgColor}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

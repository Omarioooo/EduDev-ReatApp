import React from "react";
import Home from "./Home";
import Courses from "./Courses";
import Reviews from "./Reviews";
import JoinUS from "./JoinUS";

export default function Main() {
    return (
        <>
            <div className="main">
                <Home />
                <Courses />
                <Reviews />
                <JoinUS />
            </div>
        </>
    );
}

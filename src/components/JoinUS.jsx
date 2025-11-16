import React from "react";

export default function JoinUS() {
    return (
        <>
            <div className="join section bg-dark-blue">
                <div className="container">
                    <span className="text-primary">Practice Advice</span>
                    <h3>Join Us</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Animi iste mollitia quasi voluptas minima totam
                        modi rem cupiditate. Exercitationem
                    </p>
                    <form>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                        />
                        <input type="button" id="btn" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

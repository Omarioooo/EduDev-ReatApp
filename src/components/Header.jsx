import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <div id="header" className="header bg-dark-blue">
                <div className="navbar container">
                    <a href="#" className="logo">
                        EduDev
                    </a>
                    <ul>
                        <li>
                            <a href="#" className="home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="product">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="#" className="pricing">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="account">
                        <a href="#" className="btn-login">
                            Login
                        </a>
                        <a href="#" className="btn-join">
                            Join Us <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

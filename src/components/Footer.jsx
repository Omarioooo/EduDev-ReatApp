import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="footer section">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="connect">
                            <h3 className="footer-section-title">
                                Get In Touch
                            </h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p className="media">
                                <FaFacebook /> <FaTwitter /> <FaLinkedin />
                            </p>
                        </div>
                        <div className="info">
                            <h3 className="footer-section-title">
                                Company Info
                            </h3>
                            <ul>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                            </ul>
                        </div>
                        <div className="features">
                            <h3 className="footer-section-title">Features</h3>
                            <ul>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                            </ul>
                        </div>
                        <div className="resources">
                            <h3 className="footer-section-title">Resources</h3>
                            <ul>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                                <li>Lorem, ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                    <p className="copy-rights">
                        @ 2025 | All rights reserved make by{" "}
                        <span>Omar Mohamed</span>
                    </p>
                </div>
            </div>
        </>
    );
}

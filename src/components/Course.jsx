import React from "react";
import { FaBook, FaStar } from "react-icons/fa";
import { IoIosArrowForward, IoMdAlarm } from "react-icons/io";

export default function Course({
    img,
    department,
    title,
    rating,
    description,
    sales,
    price,
    discount,
    duration,
    lessons,
}) {
    return (
        <>
            <div className="course info-card">
                <span className="sale">Sale</span>
                <img src={img} alt={title} />
                <div className="course-data">
                    <span className="rate">
                        <FaStar /> {rating}
                    </span>
                    <span className="dept">{department}</span>
                    <h3 className="title">{title}</h3>
                    <p>{description}</p>
                    <span className="sales">{sales} Sales</span>
                    <div className="pricing">
                        <span className="price">
                            <del>{price}</del>
                        </span>
                        <span className="discount">{discount}</span>
                    </div>
                    <div className="content">
                        <span className="duration">
                            {" "}
                            <IoMdAlarm /> {duration}
                        </span>
                        <span className="lessons">
                            {" "}
                            <FaBook /> {lessons}
                        </span>
                    </div>
                    <button>
                        Learn More <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </>
    );
}

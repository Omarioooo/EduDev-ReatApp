import { CiMap } from "react-icons/ci";
import { FaCreditCard, FaImages } from "react-icons/fa";

import img1 from "./images/Graphic_design.jpg";
import img2 from "./images/Project_design.jpg";
import img3 from "./images/web.jpg";
import personImg from "./images/person.png";

export const cardData = [
    {
        id: 1,
        img: <CiMap />,
        title: "Book Library",
        description:
            "The gradual accumulation of information about atomic and small-scale behavior",
        color: "#e74040",
        bgColor: "#ffdcd1",
    },
    {
        id: 2,
        img: <FaImages />,
        title: "Market Analysis",
        description:
            "The gradual accumulation of information about atomic and small-scale behavior",
        color: "#2dc071",
        bgColor: "#b9eaa8",
    },
    {
        id: 3,
        img: <FaCreditCard />,
        title: "+50 online courses",
        description:
            "The gradual accumulation of information about atomic and small-scale behavior",
        color: "#23a6f0",
        bgColor: "#b2e3ff",
    },
];

export const CourseData = [
    {
        id: 1,
        img: img1,
        department: "Graphic Design",
        title: "UI & UX Design",
        rating: "4.7",
        description:
            "Unlock your creativity with our UI & UX course! Learn essential design principles, master industry-leading tools, and create stunning visuals to bring your ideas to life.",
        sales: "80",
        price: "$11.99",
        discount: "$4.99",
        duration: "22hr 30min",
        lessons: "64 Lessons",
    },
    {
        id: 2,
        img: img2,
        department: "Software Development",
        title: "Project Design",
        rating: "4.6",
        description:
            "Transform ideas into actionable pains with our Project Design course! Learn to structure, organize, and execute projects effectively using professional tools and techniques",
        sales: "160",
        price: "$15.99",
        discount: "$7.99",
        duration: "30hr 30min",
        lessons: "121 Lessons",
    },
    {
        id: 3,
        img: img3,
        department: "Web Development",
        title: "HTML & CSS",
        rating: "4.9",
        description:
            "Build the foundation of web development with our HTML & CSS course! Learn to create stunning. responsive websites from scratch with hands-on projects and practical",
        sales: "288",
        price: "$10.99",
        discount: "$8.99",
        duration: "16hr 40min",
        lessons: "107 Lessons",
    },
];

export const ReviewData = [
    {
        id: 1,
        stars: 5,
        img: personImg,
        description:
            "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-word skills. Highly recommend it to anyone looking to learn!",
        name: "Omar Mohamed",
        job: "Developer",
    },
    {
        id: 2,
        stars: 4,
        img: personImg,
        description:
            "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-word skills. Highly recommend it to anyone looking to learn!",
        name: "Omar Mohamed",
        job: "Software Engineer",
    },
    {
        id: 3,
        stars: 2,
        img: personImg,
        description:
            "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-word skills. Highly recommend it to anyone looking to learn!",
        name: "Omar Mohamed",
        job: "Backend Developer",
    }
];

import { FaRegStar, FaStar } from "react-icons/fa";

    // get rating
    export default function RatingStars({stars}) {
        return (
            <div className="stars">
                {Array.from({ length: 5 }, (_, index) =>
                    index < stars ? (
                        <FaStar key={index} color="#ffc107" />
                    ) : (
                        <FaRegStar key={index} color="#ffc107" />
                    )
                )}
            </div>
        );
    }
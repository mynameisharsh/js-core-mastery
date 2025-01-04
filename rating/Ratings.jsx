import { useState } from "react";

const Ratings = ({ limit = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const onHover = (index) => setHoveredIndex(index);
  const onMouseLeave = () => setHoveredIndex(0);
  const onClickRating = (rating) => setRating(rating);
  return (
    <div>
      {Array(limit)
        .fill("")
        .map((_, index) => {
          const isActive = index + 1 <= (hoveredIndex || rating);
          return (
            <span
              key={index}
              style={{
                cursor: "pointer",
                fontSize: 30,
                color: isActive ? "red" : "black",
              }}
              onMouseEnter={() => onHover(index + 1)}
              onMouseLeave={() => onMouseLeave()}
              onClick={() => onClickRating(index + 1)}
            >
              ★
            </span>
          );
        })}
    </div>
  );
};

export default Ratings;
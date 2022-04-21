import { Star, StarBorder } from "@material-ui/icons";
import React, { useContext } from "react";

const Rating = ({ rating, style, handleRating }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => handleRating(i + 1)} style={style}>
          {rating > i ? (
            <Star fontSize="15px" />
          ) : (
            <StarBorder fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;

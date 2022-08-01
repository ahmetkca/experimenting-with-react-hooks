import React from "react";

import { useState } from "react";

import Star from "./Star";

import { createArray } from "../utils/utils";

const StarRating = ( { totalStars = 5 }) => {
    const [selectedStarIndex, setSelectedStarIndex] = useState(0);

    return (
        <div className="star-rating">
            {createArray(totalStars).map((_, index) => {
                return <Star 
                            key={index} 
                            selected={selectedStarIndex > index} 
                            index={index} 
                            onSelected={setSelectedStarIndex} />
            })}
            <p>{selectedStarIndex} of {totalStars}</p>
        </div>
    );
};

export default StarRating;

import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ index, selected = false, onSelected }) => {

    const handleClick = () => {
        onSelected(index + 1);
    }


    return (
        <span className="star" onClick={() => handleClick()}>
            <FaStar color={selected ? "red" : "gray"}/>
        </span>
    )
}

export default Star;
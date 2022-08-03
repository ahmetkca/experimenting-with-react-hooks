import React from "react";

import { useInput } from "../hooks/useInput";
import { useState } from "react";

const FormWithCustomHook = () => {
    const [colors, setColors] = useState([]);
    const [color, handleColorChange, resetColor] = useInput('#000000');
    const [name, handleNameChange, resetName] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setColors([...colors, { name, value: color }]);
        resetColor();
        resetName();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input value={name} onChange={handleNameChange} type="text" placeholder="Color name..." />
            </label>
            <label>
                <input value={color} onChange={handleColorChange} type="color" />
            </label>
            <button type="submit">Add</button>

            <h3>Colors: </h3>
            <ul>
                {colors.map(({ name, value }) => (
                    <li key={name}>
                        <span>{name}</span>
                        <span>{value}</span>
                    </li>
                ))}
            </ul>
        </form>
    );
}

export default FormWithCustomHook;
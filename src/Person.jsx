import React from "react";

const Person = ({ person, deletePerson }) => {
    return (
        <div>
        <h2>{person.name}</h2>
        <p>{person.number}</p>
        <button onClick={deletePerson}>Delete</button>
        </div>
    );
    }
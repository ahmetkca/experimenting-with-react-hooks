import { useReducer } from "react";

const UseReducerComponent = () => {

    const [number, setNumber] = useReducer(
      (number, newNumber) => number + newNumber,
      0                                           // initial value
    )
  
    return (
      <h1 onClick={() => setNumber(1)}>{number}</h1>
    );
  };

  export default UseReducerComponent;
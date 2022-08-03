import { useState, useEffect } from "react";

const UseStateComponent01 = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      console.log(`Count is ${count}`);
    }
      , [count]); // Only run the effect if count changes
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default UseStateComponent01;

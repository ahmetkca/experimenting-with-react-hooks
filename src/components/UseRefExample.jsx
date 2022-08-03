import { useRef } from "react";

const UseRefExample = () => {

    const sound = useRef();
    const color = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const soundValue = sound.current.value;
      const colorValue = color.current.value;
      alert(`${soundValue} sounds like ${colorValue}`);
      sound.current.value = '';
      color.current.value = '';
    }
  
    return (
      <form onSubmit={handleSubmit} >
        <label>
          <input ref={sound} type="text" placeholder="Sound..." />
        </label>
  
        <label>
          <input ref={color} type="color" />
        </label>
  
        <button type="submit">Add</button>
  
      </form>
    )
  }

  export default UseRefExample;
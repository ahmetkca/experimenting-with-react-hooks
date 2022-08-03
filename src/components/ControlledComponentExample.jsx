import { useState  } from "react";

const ControlledComponentExample = () => {
    const [sound, setSound] = useState('');
    const [color, setColor] = useState('#000000');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      alert(`${sound} sounds like ${color}`);
      setColor('#000000');
      setSound('');
    }
  
    return (
      <form onSubmit={handleSubmit} >
        <label>
          <input value={sound} onChange={(e) => setSound(e.target.value)} type="text" placeholder="Sound..." />
        </label>
  
        <label>
          <input value={color} onChange={(e) => setColor(e.target.value)} type="color" />
        </label>
  
        <button type="submit">Add</button>
      </form>
    )
  }

  export default ControlledComponentExample;
  
import { useState } from "react";

const UseStateComponent03 = () => {
    const [check, setCheck] = useState(false);
  
    return (
      <div>
        <p>Check: {check ? 'Checked' : 'Not Checked'}</p>
        <label>
          <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
          Checkbox
        </label>
      </div>
    );
  }

  export default UseStateComponent03;
import { useReducer } from "react";

const CheckBoxWithUseReducer = () => {

    const [checked, toggle] = useReducer(
      (checked) => !checked,
      false
    );
  
    return (
      <>
        <label>
          {checked ? "Checked" : 'Not Checked'}
          <input type="checkbox" value={checked} onChange={toggle} />
        </label>
      </>
    )
  }

export default CheckBoxWithUseReducer;
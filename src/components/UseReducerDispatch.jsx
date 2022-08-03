import { useReducer } from "react";

const initialState = {
    message: "Hi!",
  };
  
  const reducer = (state, action) => {
    if (typeof action !== 'object' && action === null) throw new Error("actions must be plain object.");
    if (typeof action.type === 'undefined') throw new Error('Actions may not have an undefined "type" property.');
  
    switch (action.type) {
      case 'yell':
        return {
          message: `HEEEYYYYY!, previous message: ${state.message}`
        }
      case 'whisper':
        return {
          message: `execuse me..., previous message: ${state.message}`
        }
      default:
        return {
          message: "Hello World!"
        }
    }
  }
  
  const UseReducerDispatch = () => {
    const [state, dispatch] = useReducer(
      reducer,
      initialState,
    )
  
    return (
      <>
        <p>Message: {state.message}</p>
        <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
        <button onClick={() => dispatch({ type: 'whisper' })}>whisper</button>
      </>
    )
  }

export default UseReducerDispatch;
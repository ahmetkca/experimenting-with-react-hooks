import { useState } from 'react';

const UseStateComponent02 = () => {
    const [status, setStatus] = useState('Not Delivered');
  
    return (
      <div>
        <p>Status: {status}</p>
        <button onClick={() => {
          status === 'Not Delivered' ? setStatus('Delivered') : setStatus('Not Delivered');
        }}>
          Toggle Status
        </button>
      </div>
    );
  }

  export default UseStateComponent02;
import './App.css';

import { useState } from 'react';

import StarRating from './components/StarRating';

const UseStateComponent01 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

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




const App = (props) => {
  return (
    <div className="App">
      <StarRating totalStars={10} />
      <UseStateComponent01 />
      <UseStateComponent02 />
      <UseStateComponent03 />
      <h2>Number: {props.number}</h2>
      {props.people.map((person, key) => (
        <div key={key + person.id}>
          <h3 key={`${key}+${person.id}`}>{person.name}</h3>
          <p>{person.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

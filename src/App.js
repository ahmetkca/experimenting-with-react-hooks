import './App.css';

import { useState, useEffect } from 'react';

import StarRating from './components/StarRating';
import { click } from '@testing-library/user-event/dist/click';
import { FaSpinner } from 'react-icons/fa';

import { CgSpinnerAlt } from 'react-icons/cg';

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

const UseEffectComponent01 = () => {
  const [name, setName] = useState('Alan');
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
    
  }, [name]); // Only run the effect if name changes

  useEffect(() => {
    console.log(`${name} is ${admin ? 'admin' : 'not admin'}`);
    document.title = `${name} is ${admin ? 'admin' : 'not admin'}`; // Update the document title
  }, [admin]); // Only run the effect if admin changes

  return (
    <section>
      <p>Congratulations {name}</p>
      <button onClick={() => setName('Max')}>
        Change Winner
      </button>
      <p>{admin ? <span>logged in</span> : <span>not logged in</span>}</p>
      {admin && <button onClick={() => setAdmin(false)}>Logout</button>}
      {!admin && <button onClick={() => setAdmin(true)}>Login</button>}
    </section>
  )
}


const UseEffectFetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(
      async () => {
        await fetch('https://api.github.com/users')
          .then(response => response.json())
          .then(json => setData(json));
      }, 3750);
  }
  , []); // Only run the effect once, on mount

  return (
    <div>
      <h2>Github Users</h2>
      {/* <button onClick={() => setData(null)} >
        {data ? 'Reset' : '(Github users are permanently gone until page is refreshed!)'}
      </button> */}
      {data ? data.map((user, key) => (
        <div key={key}>
          <img width={128} height={128} src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
        </div>
    )) : <span ><CgSpinnerAlt className='my-spinner' /></span>}
    </div>
  );
}




const App = (props) => {
  return (
    <div className="App">
      <UseEffectFetchData />

      <UseEffectComponent01 />

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

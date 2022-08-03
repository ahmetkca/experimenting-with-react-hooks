import { useState, useEffect } from "react";
import { CgSpinnerAlt } from 'react-icons/cg';

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

export default UseEffectFetchData;
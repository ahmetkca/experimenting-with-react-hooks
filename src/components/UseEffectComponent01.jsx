import { useState, useEffect } from "react";

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

  export default UseEffectComponent01;
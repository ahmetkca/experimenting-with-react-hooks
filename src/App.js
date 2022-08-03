import './App.css';

import StarRating from './components/StarRating';
import FormWithCustomHook from './components/FromWithCustomHook';

import UseStateComponent01 from './components/UseStateComponent01';
import UseStateComponent02 from './components/UseStateComponent02';
import UseStateComponent03 from './components/UseStateComponent03';
import ControlledComponentExample from './components/ControlledComponentExample';
import UseRefExample from './components/UseRefExample';
import UseReducerDispatch from './components/UseReducerDispatch';
import UseReducerComponent from './components/UseReducerComponent';
import UseEffectFetchData from './components/UseEffectFetchData';
import UseEffectComponent01 from './components/UseEffectComponent01';
import CheckBoxWithUseReducer from './components/CheckboxWithUseReducer';
import UseContextExample from './components/UseContextExample';
import FetchDataWithCustomHook from './components/FetchDataWithCustomHook';


const App = (props) => {
  return (
    <div className="App">
      <FetchDataWithCustomHook />
      <hr/>
      <UseContextExample />
      <h3>Form with Custom Hook (useInput)</h3>
      <FormWithCustomHook />
      <hr/>
      <h3>Form with Controlled Component (useState)</h3>
      <ControlledComponentExample />
      <hr/>
      <h3>Form using useRef</h3>
      <UseRefExample />
      <hr/>
      <UseReducerDispatch />
      <hr/>
      <CheckBoxWithUseReducer />
      <hr/>
      <UseReducerComponent />
      <hr/>
      <UseEffectFetchData />
      <hr/>

      <UseEffectComponent01 />
      <hr/>

      <StarRating totalStars={10} />
      <hr/>
      <UseStateComponent01 />
      <hr/>
      <UseStateComponent02 />
      <hr/>
      <UseStateComponent03 />
      <hr/>
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

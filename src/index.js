import React from 'react';
import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [, , third] = [1, 2, 3];

console.log(third);

const people = [
  { id: Date.now() + Math.ceil(Math.random() * 9999), name: 'Max', age: 28,  },
  { id: Date.now() + Math.ceil(Math.random() * 9999), name: 'Manu', age: 29 },
  { id: Date.now() + Math.ceil(Math.random() * 9999), name: 'Stephanie', age: 26 }
];

export const TreesContext = createContext();

export const useTrees = () => {
  return useContext(TreesContext);
}

const trees = [
  {
    id: 1,
    name: 'Oak',
    color: 'green',
    age: 10,
  },
  {
    id: 2,
    name: 'Pine',
    color: 'green',
    age: 20,
  },
  {
    id: 3,
    name: 'Cherry',
    color: 'red',
    age: 30,
  }
];

console.log(people);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TreesContext.Provider value={{ trees }}>
      <App people={people} number={third} />
    </TreesContext.Provider>
  </React.StrictMode>
);
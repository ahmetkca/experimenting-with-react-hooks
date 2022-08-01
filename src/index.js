import React from 'react';
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

console.log(people);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App people={people} number={third} />
  </React.StrictMode>
);
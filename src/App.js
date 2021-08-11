import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;

    default:
      return state;
  }
};

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <div>{count}</div>
      <CountContext.Provider value={{ count, dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;

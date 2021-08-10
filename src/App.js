import './App.css';
import ComponentC from './Components/ComponentC';
import React from 'react';

export const UserContext = React.createContext();
export const NameContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <UserContext.Provider value='Aakash'>
        <NameContext.Provider value='Mittal'>
          <ComponentC />
        </NameContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

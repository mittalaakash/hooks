import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  return (
    <div>
      <input
        type='text'
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <h1>firstName is {name.firstName}</h1>
      <input
        type='text'
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
      <h1>lastName is {name.lastName}</h1>
    </div>
  );
}

export default HookCounterThree;

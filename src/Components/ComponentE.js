import React, { useContext } from 'react';
import { NameContext, UserContext } from '../App';

function ComponentE() {
  const user = useContext(UserContext);
  const name = useContext(NameContext);
  return (
    <div>
      hello {user} {name}
    </div>
  );
}

export default ComponentE;

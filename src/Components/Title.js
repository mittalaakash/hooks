import React from 'react';

function Title() {
  console.log('rendering tile');
  return (
    <div>
      <h1>useCallback Hook</h1>
    </div>
  );
}

export default React.memo(Title);

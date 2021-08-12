import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
function DocumentTitle() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increment
      </button>
      <p>{count}</p>
    </div>
  );
}

export default DocumentTitle;

import React, { useEffect, useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} />
      <input type='checkbox' name='name' id='' />
    </div>
  );
}

export default FocusInput;

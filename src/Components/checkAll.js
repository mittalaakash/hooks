import React, { useEffect, useState } from 'react';
const names = [
  { name: 'apple' },
  { name: 'orange' },
  { name: 'banana' },
  { name: 'kiwi' },
];
function Check() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    setFruits(names);
  }, []);

  const handleChange = e => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      const newState = fruits.map(fruit => ({ ...fruit, isChecked: checked }));
      setFruits(newState);
    } else {
      const newState = fruits.map(fruit =>
        fruit.name === name ? { ...fruit, isChecked: checked } : fruit,
      );
      setFruits(newState);
    }
  };
  return (
    <div>
      <div>
        <label>
          all
          <input
            type='checkbox'
            onChange={handleChange}
            name='allSelect'
            checked={fruits.every(el => el.isChecked === true) || false}
          />
        </label>
      </div>
      {fruits.map((fruit, i) => (
        <div key={i}>
          <label>
            {fruit.name}
            <input
              type='checkbox'
              checked={fruit?.isChecked || false}
              name={fruit.name}
              onChange={handleChange}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Check;

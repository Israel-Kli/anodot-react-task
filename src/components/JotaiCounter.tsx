import React from 'react';
import { atom, useAtom } from 'jotai';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';

const countAtom = atom(0);

const JotaiCounter: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);

  const increment = () => setCount((prev: number) => prev + 1);
  const decrement = () => setCount((prev: number) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Jotai Count: {count}</h1>
      <div className="button-group">
        <button onClick={increment}>
          <FaPlus />
        </button>
        <button onClick={decrement}>
          <FaMinus />
        </button>
        <button onClick={reset}>
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

export default JotaiCounter;

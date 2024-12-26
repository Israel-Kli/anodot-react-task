import React, { useContext } from 'react';
import { CounterContextProvider } from '../contexts/CounterContextProvider.tsx';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';

const ReactContextCounter: React.FC = () => {
  const context = useContext(CounterContextProvider);
  if (!context) {
    throw new Error('CounterContext must be used within a CounterProvider');
  }
  const { count, increment, decrement, reset } = context;

  return (
    <div className="counter-container">
      <h1>React Context Count: {count}</h1>
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

export default ReactContextCounter;

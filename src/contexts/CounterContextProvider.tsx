import React, { createContext, useState, useCallback, ReactNode } from 'react';

interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContextProvider = createContext<CounterContextType | null>(
  null
);

interface CounterProviderProps {
  children: ReactNode;
  initialCount?: number;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
  initialCount = 0,
}) => {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialCount);
  }, [initialCount]);

  return (
    <CounterContextProvider.Provider
      value={{ count, increment, decrement, reset }}
    >
      {children}
    </CounterContextProvider.Provider>
  );
};

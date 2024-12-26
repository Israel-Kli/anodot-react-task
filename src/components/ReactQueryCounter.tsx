import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';

const COUNTER_KEY = 'reactQueryCounter';

const ReactQueryCounter: React.FC = () => {
  const queryClient = useQueryClient();

  const { data: count = 0 } = useQuery({
    queryKey: [COUNTER_KEY],
    queryFn: () => {
      const savedCount = localStorage.getItem(COUNTER_KEY);
      return savedCount ? parseInt(savedCount) : 0;
    },
  });

  const mutation = useMutation({
    mutationFn: async (newCount: number) => {
      localStorage.setItem(COUNTER_KEY, newCount.toString());
      return newCount;
    },
    onSuccess: newCount => {
      queryClient.setQueryData([COUNTER_KEY], newCount);
    },
  });

  return (
    <div className="counter-container">
      <h1 className="counter-title">React Query Count: {count}</h1>
      <div className="button-group">
        <button onClick={() => mutation.mutate(count + 1)}>
          <FaPlus />
        </button>
        <button onClick={() => mutation.mutate(count - 1)}>
          <FaMinus />
        </button>
        <button onClick={() => mutation.mutate(0)}>
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

export default ReactQueryCounter;

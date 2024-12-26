import { useQuery } from '@tanstack/react-query';
import type { UserData } from '../types/types.ts';

const DEFAULT_USER = {
  username: 'Israel K',
  lastLogin: new Date().toLocaleString(),
};

const STORAGE_KEY = 'userData';

function getStoredUserData(): UserData {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  return DEFAULT_USER;
}

function updateLastLogin(userData: UserData): UserData {
  const updatedData = {
    ...userData,
    lastLogin: new Date().toLocaleString(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }

  return updatedData;
}

export function useUserData() {
  return useQuery<UserData, Error>({
    queryKey: ['userData'],
    queryFn: () => {
      const userData = getStoredUserData();
      return updateLastLogin(userData);
    },
    initialData: getStoredUserData(),
    refetchOnWindowFocus: false,
  });
}

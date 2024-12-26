import React from 'react';
import { useUserData } from '../hooks/useUserData';

const Header: React.FC = () => {
  const { data } = useUserData();

  return (
    <header className="header">
      <p>Welcome, {data?.username}</p>
      <p>Last Login: {data?.lastLogin}</p>
    </header>
  );
};

export default Header;

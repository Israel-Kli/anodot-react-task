import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterProvider } from './contexts/CounterContextProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './layouts/MainLayout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CounterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CounterProvider>
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';
import JotaiCounter from '../components/JotaiCounter';
import ReactContextCounter from '../components/ReactContextCounter';
import ReactQueryCounter from '../components/ReactQueryCounter';

const Page3: React.FC = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Page 3</h1>
      <div className="counters-grid">
        <section className="counter-section">
          <ReactContextCounter />
        </section>

        <section className="counter-section">
          <JotaiCounter />
        </section>

        <section className="counter-section">
          <ReactQueryCounter />
        </section>
      </div>
    </div>
  );
};

export default Page3;

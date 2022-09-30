import React from 'react';
import Header from '../components/Header';
import Interface from '../components/interface/Interface';

const IndexPage = () => {
  return (
    <>
      <div className="bg-gray-800 w-screen px-3 py-1">
        <Header />
      </div>
      <div className="w-screen">
        <Interface />
      </div>
    </>
  );
};

export default IndexPage;

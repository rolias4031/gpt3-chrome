import React, { useState } from 'react';
import Display from '../components/Display';
import Header from '../components/Header';
import Interface from '../components/Interface';

const IndexPage = () => {
  const [response, setResponse] = useState('');
  return (
    <>
      <div className="bg-gray-800 w-screen px-3 py-1">
        <Header />
      </div>
      <div className="bg-gray-600 w-screen px-3 py-3">
        <Interface raiseState={setResponse} />
      </div>
      <div className="bg-gray-800 w-screen min-h-screen px-3 py-5">
        <Display contState={response} />
      </div>
    </>
  );
};

export default IndexPage;

import React, { useState } from 'react';
import Info from '../components/interface/Info/Info';
import Header from '../components/Header';
import Interface from '../components/interface/Interface';

/* 
* main app page. controls what is showing using showInfo.
* all this sits in a flex-col from a div in _app
*/
const IndexPage = () => {
  const [showInfo, setShowInfo] = useState();
  if (showInfo) {
    return <Info raiseState={setShowInfo} />;
  }
  return (
    <>
      <div className="header-style w-full px-3 pb-1 pt-2 flex items-center">
        <Header raiseState={setShowInfo} />
      </div>
      <Interface />
    </>
  );
};

export default IndexPage;

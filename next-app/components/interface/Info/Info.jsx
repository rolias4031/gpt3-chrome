import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import InfoText from './InfoText';

function Info({ raiseState }) {
  const infos = {
    guides: 'guides',
    about: 'about',
  };
  const [infoSection, setInfoSection] = useState(infos.guides);
  return (
    <>
      <button onClick={() => raiseState(() => false)} className="p-3">
        <ArrowLeftIcon className="mode-icon" />
      </button>
      {/* Maybe a little bar that lets you select if too crowded */}
      <div className="flex items-center p-3 space-x-5 justify-center">
        <button
          onClick={() => setInfoSection(() => 'guides')}
          className={`info-section-link ${
            infoSection === 'guides' ? 'border-gray-400' : 'border-white'
          }`}
        >
          Guides
        </button>
        <button
          onClick={() => setInfoSection(() => 'about')}
          className={`info-section-link ${
            infoSection === 'about' ? 'border-gray-400' : 'border-white'
          }`}
        >
          About
        </button>
      </div>
      <InfoText contState={infoSection} />
    </>
  );
}

Info.propTypes = {
  raiseState: PropTypes.func.isRequired,
};

export default Info;

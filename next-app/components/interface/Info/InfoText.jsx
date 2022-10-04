import React from 'react';
import PropTypes from 'prop-types';
import AboutText from './AboutText';
import GuidesText from './GuidesText';

function InfoText({ contState }) {
  return (
    <div className="p-3 overflow-auto">
      {contState === 'guides' ? <GuidesText /> : <AboutText />}
    </div>
  );
}

InfoText.propTypes = {
  contState: PropTypes.string.isRequired,
};

export default InfoText;

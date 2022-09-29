import React from 'react';
import PropTypes from 'prop-types';

function Display({ contState }) {
  function formatResponse(text) {
    const textArray = text.split('\n');
    console.log(textArray);
    return textArray.map((text, i) => {
      if (!text) return;
      return (
        <p key={`${text}-${i}`} className="mb-2 leading-tight">
          {text}
        </p>
      );
    });
  }
  const formatted = formatResponse(contState);
  return <div className="text-white text-xs">{formatted}</div>;
}

Display.propTypes = {
  contState: PropTypes.string,
};

Display.defaultProps = {
  contState: null,
};

export default Display;

import React from 'react';
import PropTypes from 'prop-types';
/*
* THIS COMPONENT:
1. conditionally renders the response as either: IsLoading, IsError, or Response depending on the payload passed from Interface.
2. formats the response using formatResponse, to preserve text structure
*/

function Display({ response }) {
  function formatResponse(text) {
    const textArray = text.split('\n');
    return textArray.map((text, i) => {
      if (!text) return;
      return (
        <p key={`${text}-${i}`} className="mb-2 leading-tight">
          {text}
        </p>
      );
    });
  }

  return <div className="text-white text-xs">{formatResponse(response)}</div>;
}
Display.propTypes = {
  response: PropTypes.string,
};

Display.defaultProps = {
  response: null,
};

export default Display;

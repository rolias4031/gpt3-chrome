import React from 'react';
import PropTypes from 'prop-types';

/*
Enhance this page by specifying client or server error.
500 gives on page: "OpenAI is having problems"
400 gives: steps to fix client error
*/

function IsError({ message }) {
  return (
    <div className='my-auto text-center'>
      <p className="text-lg font-bold text-gray-300">
        {message ? message : 'Something went wrong'}
      </p>
    </div>
  );
}

IsError.propTypes = {
  message: PropTypes.string,
};

IsError.defaultProps = {
  message: null,
};

export default IsError;

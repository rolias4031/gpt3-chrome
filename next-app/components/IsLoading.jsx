import React from 'react';
import PropTypes from 'prop-types';
import { Cog6ToothIcon } from '@heroicons/react/20/solid';

function IsLoading({ message }) {
  return (
    <div className='self-center w-full'>
      {message && <p className="text-sm font-semibold">{message}</p>}
      <Cog6ToothIcon className="loading-icon-style mx-auto" />
    </div>
  );
}

IsLoading.propTypes = {
  message: PropTypes.string,
};

IsLoading.defaultProps = {
  message: null,
};

export default IsLoading;

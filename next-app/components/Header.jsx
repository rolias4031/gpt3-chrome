import React from 'react';
import PropTypes from 'prop-types';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

function Header({ raiseState }) {
  return (
    <>
      <span className="flex-1 text-xs">Pocket Law</span>
      <button onClick={() => raiseState(() => true)}>
        <InformationCircleIcon className="mode-icon" />
      </button>
    </>
  );
}

Header.propTypes = {
  raiseState: PropTypes.func.isRequired,
};

export default Header;

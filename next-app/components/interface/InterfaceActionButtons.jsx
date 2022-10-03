import React from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

function InterfaceActionButtons({ contState, raiseState, onClear }) {
  function disableButton(input) {
    if (input.length === 0) {
      return true;
    }
    return false;
  }
  return (
    <>
      <button
        onClick={() => {
          raiseState('');
          onClear();
        }}
        className="btn mx-2"
        type="button"
      >
        Clear
      </button>
      <button className="btn" type="submit" disabled={disableButton(contState)}>
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
    </>
  );
}

InterfaceActionButtons.propTypes = {
  contState: PropTypes.string.isRequired,
  raiseState: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default InterfaceActionButtons;

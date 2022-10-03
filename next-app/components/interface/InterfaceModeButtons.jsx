import React from 'react';
import PropTypes from 'prop-types';
import {
  BookOpenIcon,
  KeyIcon,
  ListBulletIcon,
} from '@heroicons/react/20/solid';

function InterfaceModeButtons({ raiseState, contState }) {
  const MODES = {
    DEFINE: 'define',
    EXPLAIN: 'explain',
    EXAMPLE: 'example',
  };
  function changeModeHandler(event) {
    const name = event.currentTarget.name;
    raiseState(() => name);
  }
  function renderIconStyle(mode, name) {
    const style = mode === name ? 'mode-icon-selected' : 'mode-icon';
    return style;
  }

  return (
    <>
      <button
        onClick={changeModeHandler}
        className=""
        type="button"
        name={MODES.EXPLAIN}
      >
        <BookOpenIcon className={renderIconStyle(contState, MODES.EXPLAIN)} />
      </button>
      <button
        onClick={changeModeHandler}
        className=""
        type="button"
        name={MODES.DEFINE}
      >
        <KeyIcon className={renderIconStyle(contState, MODES.DEFINE)} />
      </button>
      <button
        onClick={changeModeHandler}
        className=""
        type="button"
        name={MODES.EXAMPLE}
      >
        <ListBulletIcon className={renderIconStyle(contState, MODES.EXAMPLE)} />
      </button>
      {/* lsat resort onClick={() => raiseState('mode')} */}
    </>
  );
}

InterfaceModeButtons.propTypes = {
  raiseState: PropTypes.func.isRequired,
  contState: PropTypes.string.isRequired,
};

export default InterfaceModeButtons;

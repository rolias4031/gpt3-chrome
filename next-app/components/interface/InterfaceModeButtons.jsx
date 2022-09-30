import React from 'react';
import {
  BookOpenIcon,
  KeyIcon,
  LightBulbIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/20/solid';
function InterfaceModeButtons() {
  function changeModeHandler() {}
  const btnStyle = 'mode-icon';
  return (
    <>
      <button onClick={changeModeHandler} className="" type="button">
        <BookOpenIcon className={btnStyle} />
      </button>
      <button onClick={changeModeHandler} className="" type="button">
        <KeyIcon className={btnStyle} />
      </button>
      <button onClick={changeModeHandler} className="" type="button">
        <LightBulbIcon className={btnStyle} />
      </button>
    </>
  );
}

export default InterfaceModeButtons;

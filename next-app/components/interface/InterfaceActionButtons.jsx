import React from 'react';

function InterfaceActionButtons({ raiseState }) {
  return (
    <>
      <button
        onClick={() => raiseState('')}
        className="btn text-gray-200 bg-gray-400 active:bg-gray-800 rounded mx-2"
        type="button"
      >
        Clear
      </button>
      <input
        className="btn text-gray-200 bg-gray-400 rounded cursor-pointer active:bg-gray-800"
        type="submit"
        value="Send"
      />
    </>
  );
}

export default InterfaceActionButtons;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InterfaceActionButtons from './InterfaceActionButtons';
import InterfaceModeButtons from './InterfaceModeButtons';
import { presets } from '../../lib/presets';

function InterfaceForm({ onSubmit }) {
  const [mode, setMode] = useState('explain'); // explain, summarize, example
  const [textAreaInput, setTextAreaInput] = useState('');
  function submitHandler(event) {
    event.preventDefault();
    onSubmit({ prompt: presets[mode].createPrompt(textAreaInput) });
  }
  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="flex items-center pb-2 pt-2">
        <div className="flex space-x-3">
          <InterfaceModeButtons raiseState={setMode} />
        </div>
        <div className="ml-auto">
          <InterfaceActionButtons raiseState={setTextAreaInput} />
        </div>
      </div>
      <textarea
        onChange={(event) => setTextAreaInput(event.target.value)}
        className="border w-full h-20 p-2 text-sm rounded bg-gray-100"
        value={textAreaInput}
        name=""
        id=""
      ></textarea>
    </form>
  );
}

InterfaceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InterfaceForm;

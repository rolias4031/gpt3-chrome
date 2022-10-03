import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InterfaceActionButtons from './InterfaceActionButtons';
import InterfaceModeButtons from './InterfaceModeButtons';
import { presets } from '../../lib/presets';

function InterfaceForm({ onSubmit, onClear }) {
  const [mode, setMode] = useState('explain'); // explain, summary, example
  const [textAreaInput, setTextAreaInput] = useState('');
  function submitHandler(event) {
    event.preventDefault();
    console.log(presets[mode].createPrompt(textAreaInput));
    onSubmit({ prompt: presets[mode].createPrompt(textAreaInput) });
  }
  return (
    <form onSubmit={submitHandler} className="w-full p-3 interface-form-colors">
      <div className="flex items-center justify-between pb-4">
        <div className="flex space-x-3 px-2 py-1 bg-gray-200 rounded-md">
          <InterfaceModeButtons raiseState={setMode} contState={mode} />
        </div>
        <div className="flex items-center">
          <InterfaceActionButtons
            contState={textAreaInput}
            raiseState={setTextAreaInput}
            onClear={onClear}
          />
        </div>
      </div>
      {/* changes based on mode? */}
      <input
        onChange={(event) => setTextAreaInput(event.target.value)}
        value={textAreaInput}
        placeholder={presets[mode].inputPlaceholder}
        spellCheck="false"
        className="w-full pb-1 focus:ring-0 focus:outline-none text-input-style"
        type="text"
      />
    </form>
  );
}

InterfaceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default InterfaceForm;

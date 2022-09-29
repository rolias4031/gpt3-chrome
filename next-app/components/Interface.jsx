import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InterfaceActionButtons from './InterfaceActionButtons';
import InterfaceModeButtons from './InterfaceModeButtons';
import { useMakeCompletion } from '../lib/mutations';
import { presets } from '../lib/presets';

// BookOpen KeyIcon LightBulb ChatBubbleLeft Bolt

function Interface({ raiseState }) {
  const [mode, setMode] = useState('explain'); // explain, summarize, example
  const [textAreaInput, setTextAreaInput] = useState('');
  const { mutate, isLoading, isSuccess, data, error } = useMakeCompletion();
  console.log(textAreaInput);

  function submitHandler(event) {
    event.preventDefault();
    // make this dyanmic according to preset mode
    mutate(
      { prompt: presets[mode].createPrompt(textAreaInput) },
      {
        onSuccess: (data) => {
          raiseState(() => data.choices[0].text);
        },
      },
    );
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full">
        <div className="flex items-center pb-2 pt-2">
          <div className='flex space-x-3'>
            <InterfaceModeButtons />
          </div>
          <div className="ml-auto">
            <InterfaceActionButtons />
          </div>
        </div>
        <textarea
          onChange={(event) => setTextAreaInput(event.target.value)}
          className="border w-full h-20 text-sm rounded bg-gray-100"
          name=""
          id=""
        ></textarea>
      </form>
    </div>
  );
}

Interface.propTypes = {
  raiseState: PropTypes.func.isRequired,
};

export default Interface;

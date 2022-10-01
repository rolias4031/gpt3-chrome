import React from 'react';
import { useMakeCompletion } from '../../lib/mutations';
import Display from '../Display';
import IsLoading from '../IsLoading';
import IsError from '../IsError';
import InterfaceForm from './InterfaceForm';

// BookOpen KeyIcon LightBulb ChatBubbleLeft Bolt

function Interface() {
  const { mutate, reset, isLoading, isSuccess, isError, data } =
    useMakeCompletion();

  return (
    <>
      {/* contains all form components and state for mutate */}
      <div className="sticky top-0 border-2 border-black">
        <InterfaceForm onSubmit={mutate} onClear={reset} />
      </div>
      {/* controls the display for the entire app */}
      <div className="flex flex-1 w-full h-auto overflow-auto">
        {isSuccess && <Display response={data.choices[0].text} />}
        {isLoading && <IsLoading />}
        {isError && <IsError />}
      </div>
    </>
  );
}

Interface.propTypes = {};

export default Interface;

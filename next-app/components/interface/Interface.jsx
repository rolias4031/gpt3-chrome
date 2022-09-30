import React from 'react';
import { useMakeCompletion } from '../../lib/mutations';
import Display from '../Display';
import IsLoading from '../IsLoading';
import IsError from '../IsError';
import InterfaceForm from './InterfaceForm';

// BookOpen KeyIcon LightBulb ChatBubbleLeft Bolt

function Interface() {
  const { mutate, isLoading, isSuccess, isError, data } = useMakeCompletion();

  return (
    <>
      {/* contains all form components and state for mutate */}
      <div className='bg-gray-600 w-screen px-3 py-2'>
        <InterfaceForm onSubmit={mutate} />
      </div>
      {/* controls the display for the entire app */}
      <div className="bg-gray-800 w-screen h-screen p-3">
        {isSuccess && <Display response={data.choices[0].text} />}
        {isLoading && <IsLoading />}
        {isError && <IsError />}
      </div>
    </>
  );
}

Interface.propTypes = {};

export default Interface;

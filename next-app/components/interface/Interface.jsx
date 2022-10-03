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
      <InterfaceForm onSubmit={mutate} onClear={reset} />
      {/* controls the display for the entire app */}
      {isSuccess && <Display response={data.choices[0].text} />}
      {isLoading && <IsLoading />}
      {isError && <IsError />}
    </>
  );
}

Interface.propTypes = {};

export default Interface;

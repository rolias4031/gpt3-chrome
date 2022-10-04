/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function AboutText() {
  return (
    <div className="mb-5">
      {/* Tech */}
      <p className="info-subheader mb-1">Tech</p>
      <p className="info-body">
        Pocket Law uses OpenAI's{' '}
        <a
          className="text-blue-600 underline"
          href="https://openai.com/api/"
          target="_blank"
          rel="noreferrer"
        >
          GPT-3 language model
        </a>
        , the most powerful AI model in existence, to power its searches.
      </p>
      <p className='info-body'></p>
      {/*  */}
      <p className="info-subheader mb-1 mt-3">Feedback</p>
      <p className='info-body'>
        If you find any issues while using the app, please send 
      </p>
    </div>
  );
}

export default AboutText;

/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ClipboardDocumentListIcon } from '@heroicons/react/20/solid';

function CopyButton({ response }) {
  const [copySuccess, setCopySuccess] = useState(false);
  async function copyHandler() {
    await navigator.clipboard.writeText(response);
    setCopySuccess(() => true);
    setTimeout(() => {
      setCopySuccess(() => false);
    }, 2500);
  }
  return (
    <button
      className="flex items-center btn-copy p-1 mb-2 active:bg-gray-300"
      onClick={copyHandler}
    >
      <ClipboardDocumentListIcon className="mode-icon-sm" />
      {copySuccess && (
        <p className="text-xs text-gray-600 mx-1 font-medium">Copied</p>
      )}
    </button>
  );
}

CopyButton.propTypes = {
  response: PropTypes.string.isRequired,
};

export default CopyButton;

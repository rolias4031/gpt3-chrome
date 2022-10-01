import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

function Header() {
  return (
    <>
      <span className="flex-1 text-xs">Pocket Law</span>
      <button>
        <InformationCircleIcon className="w-4 h-4" />
      </button>
    </>
  );
}

export default Header;

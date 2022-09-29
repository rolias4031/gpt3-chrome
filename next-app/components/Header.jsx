import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

function Header() {
  return (
    <div className='flex'>
      <p className="flex-1 text-xs text-gray-400">Pocket Law</p>
      <button>
        <InformationCircleIcon className='w-4 h-4 text-slate-400'/>
      </button>
    </div>
  );
}

export default Header;

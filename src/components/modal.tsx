import React from 'react';
import { CloseIcon } from '../consts/icons';

function Modal({ open, onClose, children }: any) {
  return (
    // backdrop
    <div
      className={`fixed z-10 inset-0 justify-center items-center transition-colors
            ${open ? 'visible bg-black/40' : 'invisible'}`}
    >
      {/* modal */}
      <div
        className={`bg-primary rounded-xl sticky shadow p-6 w-1/3 h-1/2 ml-auto transition-all
            ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-lg text-text bg-primary hover:bg-secondary"
        >
          {CloseIcon({ height: 24, width: 24 })}
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;

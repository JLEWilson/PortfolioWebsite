import React from 'react';
import { CloseIcon } from '../consts/icons';

// interface modalProps {
//     width: string | number
//     height:string | number
//     alignment: {
//         top: string | number
//         right: string | number
//         bottom: string | number
//         left: string | number
//     }
// }

function Modal({ open, onClose, children }: any) {
  return (
    // backdrop
    <div
      className={`fixed inset-0 justify-center items-center transition-colors
            ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      {/* modal */}
      <div
        className={`bg-white rounded-xl shado p-6 transition-all
            ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 roudned-lg text-text bg-primary hover:bg-secondary"
        >
          {CloseIcon({ height: 24, width: 24 })}
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;

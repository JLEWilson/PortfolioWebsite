import React from 'react';

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

const Modal = ({ open, onClose, children}) => {
    return (
        //backdrop
        <div className={`fixed inset-0 justify-center items-center transition-colors
            ${open ? "visible bg-black/20" : "invisible"}`}>
        {/* modal */}
            <div className={`bg-white rounded-xl shado p-6 transition-all`}></div>
        </div>
    );
};

export default Modal;
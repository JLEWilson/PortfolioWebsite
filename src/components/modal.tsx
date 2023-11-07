import React from 'react'
import { CloseIcon } from '../consts/icons'

function Modal({ open, onClose, children }: any) {
  const modal = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    const handler = (event: any) => {
      if (!modal.current) {
        return
      }
      // if click was not inside of the element. "!" means not
      // in other words, if click is outside the modal element
      if (!modal.current.contains(event.target)) {
        onClose()
      }
    }
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])
  return (
    // backdrop
    <div
      className={`fixed inset-0 justify-center items-center t
      ransition-colors z-10
            ${open ? 'visible bg-black/40' : 'invisible'}`}
    >
      {/* modal */}
      <div
        ref={modal}
        className={`bg-primary rounded-xl absolute right-0 
        z-20 shadow p-6 w-1/3 h-1/2 transition-all
            ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          type='button'
          onClick={onClose}
          className='absolute top-2 right-2 p-2 rounded-lg 
          text-text bg-primary hover:bg-secondary'
        >
          {CloseIcon({ height: 24, width: 24 })}
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal

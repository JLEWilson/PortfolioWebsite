import React from 'react'
import { CloseIcon } from '../consts/icons'
import join from '../utils'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  const modal = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const handler = (event: any) => {
      if (!modal.current) {
        return
      }
      if (!modal.current.contains(event.target)) {
        onClose()
      }
    }
    document.addEventListener('click', handler, true)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  return (
    // backdrop
    <div
      className={join(
        'z-10',
        'fixed inset-0 justify-center items-center',
        'transition-colors',
        `${open ? 'visible bg-black/40' : 'invisible'}`,
      )}
    >
      {/* modal */}
      <div
        ref={modal}
        className={join(
          'w-1/2 h-full flex flex-col',
          'absolute z-20 right-0 rounded-xl p-6',
          'bg-background',
          'shadow transition-all',
          `${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`,
        )}
      >
        <button
          type='button'
          onClick={onClose}
          className={join(
            'absolute top-8 right-8',
            'p-2 rounded',
            'fill-secondary bg-primary hover:bg-secondary hover:fill-background',
            'transition',
          )}
        >
          {CloseIcon({ height: 24, width: 24 })}
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal

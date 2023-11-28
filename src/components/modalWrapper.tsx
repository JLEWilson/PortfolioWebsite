import React from 'react'
import { MenuIcon } from '../consts/icons'
import Links, { flexDirection } from './links'
import Modal from './modal'
import Navigation from './navigation'
import join from '../utils'

// This file should be renamed and made more single funcion,
// possibly a nav container but for now we can
// flesh it out and separate

const ModalWrapper = () => {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Navigation />
        <Links direction={flexDirection.column} />
      </Modal>
      <button
        type='button'
        onClick={() => setModalOpen(true)}
        className={join(
          'md:hidden',
          'absolute top-8 right-8',
          'p-2 rounded',
          'fill-secondary hover:fill-background hover:bg-secondary bg-primary',
          'transition',
        )}
      >
        {MenuIcon({ height: 24, width: 24 })}
      </button>
      <div className='hidden md:block absolute top-8 right-8'>
        <Links direction={flexDirection.row} />
      </div>
    </div>
  )
}

export default ModalWrapper

import React from 'react'
import { MenuIcon } from '../consts/icons'
import Links from './links'
import Modal from './modal'

// This file should be renamed and made more single funcion,
// possibly a nav container but for now we can
// flesh it out and separate

function NavMenu() {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <div className=''>
      <div className='absolute top-10 right-10 fill-secondary'>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <h1>This is text</h1>
        </Modal>
        <button type='button' onClick={() => setModalOpen(true)}>
          {MenuIcon({ height: 24, width: 24 })}
        </button>
      </div>

      <div className='hidden md:block'>
        <Links />
      </div>
    </div>
  )
}

export default NavMenu

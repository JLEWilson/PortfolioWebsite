import React from 'react'
import { MenuIcon } from '../consts/icons'
import Links, { flexDirection } from './links'
import Modal from './modal'

// This file should be renamed and made more single funcion,
// possibly a nav container but for now we can
// flesh it out and separate

function NavMenu() {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <div className=''>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h1>This is text</h1>
        <Links direction={flexDirection.column} />
      </Modal>
      <button
        type='button'
        onClick={() => setModalOpen(true)}
        className='absolute top-8 right-8 p-2 fill-secondary 
        hover:bg-secondary hover:fill-background transition
        rounded'
      >
        {MenuIcon({ height: 24, width: 24 })}
      </button>
      <div className='hidden md:block'>
        <Links direction={flexDirection.row} />
      </div>
    </div>
  )
}

export default NavMenu

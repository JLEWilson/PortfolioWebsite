import React from 'react'
import { MenuIcon, CloseIcon } from '../consts/icons'
import Links from './links'
import Modal from './modal'

//This file should be renamed and made more single funcion, possibly a nav container but for now we can 
//flush it out and separate

function NavMenu() {
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleClick = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <div className=''>
      {
        modalOpen &&  
        <div className='absolute top-10 right-10 bg-secondary w-20 h-20 '>
          <Modal />
        </div>
      }
      <div onClick={handleClick}>
        {
          modalOpen ? 
              CloseIcon({ height: 24, width:24 }) 
           
          : MenuIcon({ height: 24, width: 24 })
        }
      </div> 

      <div className='hidden md:block'>
        <Links />
      </div>
    </div>
  )
}

export default NavMenu

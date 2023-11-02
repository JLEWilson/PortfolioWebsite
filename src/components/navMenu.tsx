import React from 'react'
import { MenuIcon, CloseIcon } from '../consts/icons'
import Links from './links'

function NavMenu() {
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleClick = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <div className='fill-text absolute top-10 right-10'>
      <div className='md:hidden bg-black' onClick={handleClick}>{
        modalOpen ? CloseIcon({ height: 24, width:24 }) : MenuIcon({ height: 24, width: 24 })
      }</div> 
     
      <div className='hidden md:block'>
        <Links />
      </div>
    </div>
  )
}

export default NavMenu

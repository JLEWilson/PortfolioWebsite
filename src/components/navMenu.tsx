import React from 'react'
import { MenuIcon } from '../consts/icons'
import Links from './links'

function NavMenu() {
  return (
    <div className='fill-text absolute top-10 right-10'>
      <div className='md:hidden'>{MenuIcon({ height: 24, width: 24 })}</div>
      <div className='hidden md:block'>
        <Links />
      </div>
    </div>
  )
}

export default NavMenu

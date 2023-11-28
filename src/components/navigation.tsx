import React from 'react'
import { useScrollContext } from '../ScrollContext'

const Navigation: React.FC = () => {
  const { scrollToTarget } = useScrollContext()
  const buttonStyles =
    'bg-moon-gradient bg-300% hover:animate-moon-md hover:border hover:border-primary rounded-lg text-left indent-1 p-2'
  return (
    <nav className='flex flex-col space-y-12 mt-20 text-text'>
      <button
        type='button'
        className={buttonStyles}
        onClick={() => scrollToTarget(0)}
      >
        Top
      </button>
      <button
        type='button'
        className={buttonStyles}
        onClick={() => scrollToTarget(1)}
      >
        About
      </button>
      <button
        type='button'
        className={buttonStyles}
        onClick={() => scrollToTarget(2)}
      >
        {' '}
        Projects
      </button>
    </nav>
  )
}

export default Navigation

import React from 'react'
import join from '../utils'
import { Typography } from '../Typography'

const Header = () => {
  return (
    <div className='mx-10'>
      <Typography
        variant='h1'
        className={join('font-Changa font-normal text-text text-left pt-5')}
      >
        Jacob Wilson
      </Typography>
      <Typography
        variant='h1'
        className={join(
          'text-text text-left',
          'font-Changa font-normal',
          '-mt-2',
          'rotate-x-180 translate-x-5',
          // eslint-disable-next-line max-len
          '[mask-image:_repeating-linear-gradient(transparent,_transparent_3px,_white_5px,_white_5px),linear-gradient(_transparent_50%,_white_90%)]',
        )}
      >
        Jacob Wilson
      </Typography>
    </div>
  )
}

export default Header

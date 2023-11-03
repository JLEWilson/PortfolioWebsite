import React from 'react'
import { Typography } from '../Typography'
import { join } from '../utils'
function Title() {
  return (
    <div className='h-[33vh]'>
      <div
        className={join(
          'relative overflow-hidden',         
          'xl:h-[192px] md:h-[90px] h-[36px]',
          'snap-center',
          'rounded',
          'fixed md:top-1/2 top-3/4 left-1/2',
          '-translate-x-1/2',
        )}
      >
        <h1
          className={join(
            'font-Roboto font-normal',
            'text-text xl:text-9xl/normal md:text-6xl/normal text-2xl/normal',
            'absolute',
            'top-0',
            'bg-primary',
            'right-1/2',
            'pl-4 pr-2',
            'xl:animate-bigSlide md:animate-slide animate-smallSlide',
          )}
        >
          Web
          <br />
          Mobile
          <br />
          Front-End
          <br />
          Back-End
          <br />
          Software
        </h1>
        <h1 className={join(
            'font-Roboto font-normal',
            'text-text xl:text-9xl/normal md:text-6xl/normal text-2xl/normal',
            'absolute',
            'top-0',
            'bg-secondary',
            'pl-2 pr-4',
            'left-1/2',
          )}>Developer</h1>
      </div>
    </div>
  )
}

export default Title
// 'xl:text-6xl lg:text-5xl md:text-4xl text-3xl'

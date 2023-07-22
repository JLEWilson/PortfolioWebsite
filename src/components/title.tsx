import React from 'react'
import { Typography } from '../Typography'
import { join } from '../utils'
function Title() {
  return (
    <div className='h-[33vh]'>
      <div
        className={join(
          'relative overflow-hidden',
          'solid',
          'xl:h-[192px] h-[90px]',
          'snap-center',
          'fixed top-1/2 left-1/2',
          '-translate-x-1/2',
        )}
      >
        <h1
          className={join(
            'font-Roboto font-normal',
            'text-text xl:text-9xl/normal text-6xl/normal',
            'absolute',
            'top-0',
            'left-0',
            'w-full',
            'xl:animate-bigSlide animate-smallSlide',
          )}
        >
          Full Stack Engineer
          <br />
          Front End Developer
          <br />
          Back End Developer
          <br />
          React Developer
          <br />
          Mobile Developer
          <br />
          Full Stack Engineer
        </h1>
      </div>
    </div>
  )
}

export default Title
// 'xl:text-6xl lg:text-5xl md:text-4xl text-3xl'

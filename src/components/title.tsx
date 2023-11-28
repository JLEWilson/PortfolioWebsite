import React, { useRef, useEffect } from 'react'
import { useScrollContext } from '../ScrollContext'
import join from '../utils'

const Title = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { registerScrollTarget } = useScrollContext()

  useEffect(() => {
    registerScrollTarget(ref.current)
  }, [registerScrollTarget])

  return (
    <div
      ref={ref}
      className='h-[33vh] z-1'
    >
      <div
        className={join(
          'relative overflow-hidden',
          'xl:h-[192px] md:h-[90px] h-[36px] ',
          '-translate-x-1/2 z-1',
          'md:top-1/2 top-3/4 left-1/2',
          'snap-center rounded',
        )}
      >
        <h1
          className={join(
            'absolute z-1',
            'top-0 right-1/2 pl-4 pr-2',
            'font-Roboto bg-primary',
            'text-text xl:text-9xl/normal md:text-6xl/normal text-2xl/normal',
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
        <h1
          className={join(
            'absolute z-1 left-1/2 top-0 pl-2 pr-4',
            'text-text bg-secondary font-Roboto',
            'xl:text-9xl/normal md:text-6xl/normal text-2xl/normal',
          )}
        >
          Developer
        </h1>
      </div>
    </div>
  )
}

export default Title

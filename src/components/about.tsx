import React from 'react'
import { Typography } from '../Typography'
import join from '../utils'

const About = () => {
  return (
    <section
      className={join(
        'md:mt-52 mt-40 font-Changa font-light md:mx-20 mx-5 snap-center',
      )}
    >
      <Typography variant='h1' className='text-text'>
        About Me
      </Typography>
      <hr className='my-2 mx-[30vw] h-2' />
      <Typography variant='h2' className='text-secondary'>
        Perpetually curious, I am originally a self-taught coder. My journey
        began learning C# in order to develop video games as a hobby, I went on
        to complete a coding bootcamp to learn best practices and gain some
        direction. Having interned at a tech start up I am now eager to find my
        first tech role. Let's create something great together!
      </Typography>
    </section>
  )
}

export default About

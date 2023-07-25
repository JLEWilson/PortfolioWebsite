import React from 'react'
import { Typography } from '../Typography'
import { center } from '../styles/tailwindStyleGroups'
import { join } from '../utils'

const About = () => {
  return (
    <div
      className={join(
        center,
        'md:mt-52 mt-40 snap-center flex flex-col font-Changa font-light md:mx-20 mx-5',
      )}
    >
      <Typography variant='h1' className='text-text mb-5'>
        About Me
      </Typography>
      <Typography variant='h2' className='text-secondary'>
        I'm a perpetually curious self-taught coder. My journey began learning C#
        in order to develop video games as a hobby, and I'm now eager to find my
        first tech role after completing a coding bootcamp and interning at a
        tech startup in Portland. Let's create something great together!
      </Typography>
    </div>
  )
}

export default About

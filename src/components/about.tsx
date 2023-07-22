import React from 'react'
import { Typography } from '../Typography'
import { center } from '../styles/tailwindStyleGroups'
import { join } from '../utils'

const About = () => {
  return (
    <div
      className={join(
        center,
        'mt-60 snap-center font-Changa bg-black font-light mx-20',
      )}
    >
      <Typography variant='h2' className='text-secondary'>
        Lorem ipsum dolor sit amet. 33 consequuntur praesentium est sunt possimus
        eum optio modi quo recusandae quia aut quisquam libero est eaque
        obcaecati! Sit quae natus et perspiciatis quod et quia quod et fugiat
        facere. Quo dolorem temporibus vel suscipit fuga nam dolore corrupti nam
        quam unde vel veritatis odit qui quaerat ullam eum minima suscipit.
      </Typography>
    </div>
  )
}

export default About

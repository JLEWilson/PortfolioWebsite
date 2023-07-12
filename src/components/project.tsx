import React from 'react'
import { Typography } from '../Typography'
import { join } from '../utils'

type projectPropTypes = {
  props?: string
}

const Project = (props: projectPropTypes) => {
  return (
    <Typography variant='body' className={join('text-text')}>
      {' '}
      Example Project
    </Typography>
  )
}

export default Project

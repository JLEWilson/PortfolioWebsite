import React, { useRef, useEffect } from 'react'
import join from '../utils'
import Project from './project'
import { repository } from '../consts/RepositoryList'
import Typography from '../Typography'
import { useScrollContext } from '../ScrollContext'

type projectPropTypes = {
  reposList: repository[]
}

const ProjectList = ({ reposList }: projectPropTypes) => {
  const ref = useRef<HTMLDivElement>(null)
  const { registerScrollTarget } = useScrollContext()

  useEffect(() => {
    registerScrollTarget(ref.current)
  }, [registerScrollTarget])

  return (
    <section
      ref={ref}
      className='mt-60 font-Changa font-light text-text  md:mx-20 mx-5'
    >
      <Typography variant='h1'>Projects</Typography>
      <hr className='my-2 mx-[30vw]' />
      <div className={join('w-9/12 space-y-60 pb-60  m-auto')}>
        {reposList.map(({ name, ...otherProps }) => (
          <Project
            repoData={{ name, ...otherProps }}
            key={name}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectList

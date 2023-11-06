import React from 'react'
import join from '../utils'
import Project from './project'
import { repository } from '../consts/RepositoryList'
import { Typography } from '../Typography'

type projectPropTypes = {
  reposList: repository[]
}

const ProjectList = (props: projectPropTypes) => {
  return (
    <section className='mt-60 font-Changa font-light text-text  md:mx-20 mx-5'>
      <Typography variant='h1'>Projects</Typography>
      <hr className='my-2 mx-[30vw]' />
      <div className={join('w-9/12 space-y-60 pb-60  m-auto')}>
        {props.reposList.map((repo, index) => (
          <Project repoData={repo} key={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectList

import React from 'react'
import { join } from '../utils'
import Project from './project'
import { repository } from '../consts/RepositoryList'

type projectPropTypes = {
  reposList: repository[]
}

const ProjectList = (props: projectPropTypes) => {
  return (
    <div className={join('w-9/12 mt-60 space-y-60 pb-60 m-auto text-text')}>
      {props.reposList.map((repo, index) => (
        <Project repoData={repo} key={index} />
      ))}
    </div>
  )
}

export default ProjectList

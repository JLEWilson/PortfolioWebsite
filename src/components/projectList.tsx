import React from 'react'

import { Typography } from '../Typography'
import { join } from '../utils'
import Project from './project'
import { repository } from '../features/RepositoryList'

type projectPropTypes = {
  reposList: repository[]
}

const ProjectList = (props: projectPropTypes) => {
  return (
    <div
      className={join(
        'w-9/12 m-auto border-dashed border-white border text-text',
      )}
    >
      {props.reposList.map((repo, index) => (
        <Project repoData={repo} key={index}></Project>
      ))}
    </div>
  )
}

export default ProjectList

import React from 'react'
import { Typography } from '../Typography'
import { join } from '../utils'
import { repository } from '../features/RepositoryList'

type projectPropTypes = {
  repoData: repository
}

const Project = ({ repoData }: projectPropTypes) => {
  return (
    <div className={join('bg-green-700 border-solid border-black border')}>
      <Typography variant='h2' className={join('m-2')}>
        {repoData.name}
      </Typography>
      {repoData.links.map((link, index) => (
        <a href={link.url} key={'link ' + index} className={join('mx-4')}>
          {link.name}
        </a>
      ))}
      <hr className='mb-2' />
      <Typography variant='h4' className={join('mb-4')}>
        {repoData.description}
      </Typography>
      <Typography variant='h5'>Languages</Typography>
      <div className={join('flex flex-wrap justify-center')}>
        {repoData.languages.map((language, index) => (
          <Typography variant='body' key={'language ' + index} className='mx-4'>
            {language}
          </Typography>
        ))}
      </div>
      <Typography variant='h5'>Technologies</Typography>
      <div className={join('flex flex-wrap justify-center ')}>
        {repoData.technologies.map((tech, index) => (
          <Typography
            variant='body'
            key={'technology ' + index}
            className='mx-4'
          >
            {tech}
          </Typography>
        ))}
      </div>
    </div>
  )
}

export default Project

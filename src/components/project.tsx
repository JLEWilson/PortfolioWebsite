import React from 'react'
import { Typography } from '../Typography'
import { join } from '../utils'
import { repository } from '../consts/RepositoryList'
import { PlayStoreIcon } from '../consts/icons'

type projectPropTypes = {
  repoData: repository
}

const Project = ({ repoData }: projectPropTypes) => {
  return (
    <div
      className={join(
        'group/project transition-colors hover:bg-primary rounded-3xl p-5 font-Roboto text-text snap-center ',
      )}
    >
      <Typography variant='h2' className={join('m-2')}>
        {repoData.name}
      </Typography>
      <div className='flex text-secondary'>
        {repoData.links.map((link, index) => (
          <a
            href={link.url}
            key={'link ' + index}
            className={join(
              'flex space-x-1.5',
              'fill-secondary bg-primary',
              'rounded-full py-2 px-4  mx-auto',
              'transition',
              'group-hover/project:fill-primary group-hover/project:bg-secondary group-hover/project:text-primary',
            )}
          >
            <span>{link.icon({ width: 24, height: 24 })}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <Typography variant='h4' className={join('mb-4')}>
        {repoData.description}
      </Typography>
      <div className={join('flex flex-wrap justify-center')}>
        {repoData.languages.map((language, index) => (
          <Typography
            variant='body'
            key={'language ' + index}
            className='bg-secondary text-primary rounded-full py-2 px-3'
          >
            {language}
          </Typography>
        ))}
        {repoData.technologies.map((tech, index) => (
          <Typography
            variant='body'
            key={'technology ' + index}
            className='bg-secondary text-primary rounded-full py-2 px-3'
          >
            {tech}
          </Typography>
        ))}
      </div>
    </div>
  )
}

export default Project

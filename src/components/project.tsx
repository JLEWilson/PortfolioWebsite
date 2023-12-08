import React from 'react'
import Typography from '../Typography'
import join from '../utils'
import { repository } from '../consts/RepositoryList'

type projectPropTypes = {
  repoData: repository
}

const delayTransitions = [
  'delay-[75ms]',
  'delay-[150ms]',
  'delay-[225ms]',
  'delay-[300ms]',
  'delay-[375ms]',
  'delay-[450ms]',
]

const Project = ({ repoData }: projectPropTypes) => {
  return (
    <div
      className={join(
        'group/project',
        'p-5 rounded-3xl',
        'font-Roboto text-text',
        'snap-center ',
        'transition-colors hover:bg-primary',
      )}
    >
      <Typography
        variant='h2'
        className={join('m-2')}
      >
        {repoData.name}
      </Typography>
      <div className='flex text-secondary'>
        {repoData.links.map((link) => (
          <a
            href={link.url}
            key={`${repoData.name}: ${link.name}`}
            className={join(
              'flex space-x-1.5',
              'rounded-full py-2 px-2 sm:px-4 mx-auto',
              'group-hover/project:text-background',
              'fill-secondary bg-primary',
              'group-hover/project:fill-background',
              'group-hover/project:bg-secondary',
              'transition duration-700',
            )}
          >
            <span>{link.icon({ width: 24, height: 24 })}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <Typography
        variant='h4'
        className={join('my-4')}
      >
        {repoData.description}
      </Typography>
      <div className={join('flex flex-wrap gap-1.5 justify-center')}>
        {repoData.languages.map((language) => (
          <Typography
            variant='small'
            key={`${repoData.name}: ${language}`}
            className={join(
              'rounded-full py-2 px-3',
              'transition duration-300',
              'bg-secondary text-background ',
              'group-hover/project:text-secondary',
              'group-hover/project:bg-background',
            )}
          >
            {language}
          </Typography>
        ))}
        {repoData.technologies.map((tech, index) => (
          <Typography
            variant='small'
            key={`${repoData.name}: ${tech}`}
            className={join(
              'rounded-full py-2 px-3',
              'transition duration-300',
              delayTransitions[index],
              'bg-secondary text-background ',
              'group-hover/project:text-secondary',
              'group-hover/project:bg-background',
            )}
          >
            {tech}
          </Typography>
        ))}
      </div>
    </div>
  )
}

export default Project

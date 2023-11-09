import React from 'react'
import { Typography } from '../Typography'
import join from '../utils'
import { repository } from '../consts/RepositoryList'
import { PlayStoreIcon } from '../consts/icons'

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

function Project({ repoData }: projectPropTypes) {
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
            key={`link ${index}`}
            className={join(
              'flex space-x-1.5',
              'fill-secondary bg-primary',
              'rounded-full py-2 px-2 sm:px-4  mx-auto',
              'transition',
              'duration-700',
              'group-hover/project:fill-background group-hover/project:bg-secondary group-hover/project:text-background',
            )}
          >
            <span>{link.icon({ width: 24, height: 24 })}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <Typography variant='h4' className={join('my-4')}>
        {repoData.description}
      </Typography>
      <div className={join('flex flex-wrap gap-1.5 justify-center')}>
        {repoData.languages.map((language, index) => (
          <Typography
            variant='small'
            key={`language ${index}`}
            className={join(
              'bg-secondary text-background ',
              'transition',
              'duration-300',
              'group-hover/project:text-secondary group-hover/project:bg-background',
              'rounded-full py-2 px-3',
            )}
          >
            {language}
          </Typography>
        ))}
        {repoData.technologies.map((tech, index) => (
          <Typography
            variant='small'
            key={`technology ${index}`}
            className={join(
              'bg-secondary text-background ',
              'transition',
              'duration-300',
              delayTransitions[index],
              'group-hover/project:text-secondary group-hover/project:bg-background',
              'rounded-full py-2 px-3',
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

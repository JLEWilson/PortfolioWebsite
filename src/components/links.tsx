import React from 'react'
import { GithubIcon, LinkedInIcon, ResumeIcon } from '../consts/icons'
import type { svgProps } from '../consts/icons'

type linkProps = {
  icon: (props: svgProps) => React.JSX.Element
  url: string
}

const links: linkProps[] = [
  {
    icon: GithubIcon,
    url: 'https://github.com/JLEWilson',
  },
  {
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/jlewilson/',
  },
  {
    icon: ResumeIcon,
    url: 'https://docs.google.com/document/d/1dLblGiNMnjIDh27e1ohwJ4iXQBwT3nLxhY6Ms11Q85w/edit?usp=sharing',
  },
]

function Links() {
  return (
    <ul className='flex space-x-8'>
      {links.map((link, index) => (
        <li key={index}>
          <a className='fill-text' href={link.url}>
            {link.icon({ height: 24, width: 24 })}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links

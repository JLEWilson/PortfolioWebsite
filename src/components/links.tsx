import React from 'react'
import { GithubIcon, LinkedInIcon, ResumeIcon } from '../consts/icons'
import type { svgProps } from '../consts/icons'

export enum flexDirection {
  column = 'flex-col',
  row = 'flex-row',
}
// rename these for clarity
type linksProps = {
  direction: flexDirection
}
type linkProps = {
  icon: (props: svgProps) => React.JSX.Element
  title: string
  url: string
}

const links: linkProps[] = [
  {
    icon: GithubIcon,
    title: 'Github',
    url: 'https://github.com/JLEWilson',
  },
  {
    icon: LinkedInIcon,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jlewilson/',
  },
  {
    icon: ResumeIcon,
    title: 'Resume',
    url: 'https://docs.google.com/document/d/1gU99oO5lQuyNzhPUkRKnmzBD8xICoVjHT61CNXidDBM/edit',
  },
]

const Links: React.FC<linksProps> = ({ direction}) => {
  const col = direction === flexDirection.column
  return (
    <ul
      className={`flex ${
        col ? 'flex-col space-y-4 pl-2' 
        : 'flex-row space-x-8'
      }`}
    >
      {links.map((link, index) => (
        <li key={index}>
          <a className='group/link fill-text p-2 ' href={link.url}>
            {link.icon({ height: 24, width: 24 })}
              <h4 className={`hidden  absolute text-text group-hover/link:block
              ${col ? "translate-x-8 -translate-y-full" : "-translate-x-1/4"}`}>
                {link.title}
              </h4>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links

import React from 'react'
import { EmailIcon, GithubIcon, LinkedInIcon, ResumeIcon } from '../consts/icons'
import type { svgProps } from '../consts/icons'

export enum flexDirection {
  column = 'flex-col',
  row = 'flex-row',
}
type linksProps = {
  direction: flexDirection
}
type linkItemProps = {
  icon: (props: svgProps) => React.JSX.Element
  title: string
  url: string
}

const links: linkItemProps[] = [
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
  {
    icon: EmailIcon,
    title: 'Email',
    // eslint-disable-next-line max-len
    url: 'ma&#105;lto&#58;JLEW%69&#108;s%6Fn&#46;&#37;64&#37;&#54;5v&#64;gma%&#54;9%6C&#46;c&#37;6F%6&#68;',
  },
]
const Links: React.FC<linksProps> = ({ direction }) => {
  const col = direction === flexDirection.column
  return (
    <ul
      className={`flex ${
        col ? 'flex-col space-y-4 pl-2 mt-auto' : 'flex-row space-x-8'
      }`}
    >
      {links.map((link) => (
        <li key={`li: ${link.title}`}>
          <a
            className='group/link fill-text p-2'
            href={link.url}
          >
            {link.icon({ height: 24, width: 24 })}
            <h4
              className={`hidden absolute text-text group-hover/link:block
              ${col ? 'translate-x-8 -translate-y-full' : '-translate-x-1/4'}`}
            >
              {link.title}
            </h4>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Links

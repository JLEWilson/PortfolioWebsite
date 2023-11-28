import React from 'react'
import { GithubIcon, PlayStoreIcon } from './icons'
import type { svgProps } from './icons'

type projectLink = {
  name: string
  url: string
  icon: (props: svgProps) => React.JSX.Element
}
export type repository = {
  name: string
  imgPath?: string
  languages: string[]
  technologies: string[]
  description: string
  links: projectLink[]
}

const REPOSITORY_LIST: repository[] = [
  {
    name: 'TaskStack',
    imgPath: '',
    languages: ['TypeScript'],
    technologies: ['ReactNative', 'Expo', 'Redux Toolkit', 'Expo'],
    description:
      'A simple To Do List style app designed to be more accessible for users ' +
      'with ADHD by having an uncluttered interface.',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/JLEWilson/TaskStak',
        icon: GithubIcon,
      },
      {
        name: 'PlayStore',
        url: 'https://play.google.com/store/apps/details?id=com.jlewilson.TaskStak&hl=en_US&gl=US',
        icon: PlayStoreIcon,
      },
    ],
  },
  {
    name: 'GoGoYonder',
    imgPath: '',
    languages: ['TypeScript'],
    technologies: ['React', 'SQLite', 'Tailwind', "Google Api's", 'Figma'],
    description: 'A road trip planning application',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/JLEWilson/GoGoYonder',
        icon: GithubIcon,
      },
    ],
  },
  {
    name: 'Playable Portfolio',
    imgPath: '',
    languages: ['Javascript'],
    technologies: [
      'React',
      'Redux',
      'Redux-Thunk',
      'UnityEngine',
      'Github REST API',
      'Aesprite',
    ],
    description:
      'My class capstone in which you are able to view' +
      ' some of my class projects in a 2d hub world.',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/JLEWilson/Playable_Portfolio',
        icon: GithubIcon,
      },
      {
        name: 'GH Pages',
        url: 'https://jlewilson.github.io/Playable_Portfolio/',
        icon: GithubIcon,
      },
    ],
  },
  {
    name: "Escape from Mr. Roboger's Neighborhood",
    imgPath: '',
    languages: ['Javascript'],
    technologies: ['JQuery', 'HTML Canvas', 'webpack', 'Html/CSS'],
    description:
      'You are a student studying programming for the first time. ' +
      'Your working on one of your big end of week projects when you' +
      ' begin to feel yourself drift off to sleep. your project, Mr.Roboger,' +
      ' takes over your dream and sends you into his neighborhood.' +
      'you will need to fight bugs and errors in your code to escape the ' +
      'neighborhood and finish your project on time...',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/JLEWilson/Escape_from_Mr.Robogers_Neighborhood',
        icon: GithubIcon,
      },
      {
        name: 'GH Pages',
        url: 'https://jlewilson.github.io/Escape_from_Mr.Robogers_Neighborhood/',
        icon: GithubIcon,
      },
    ],
  },
  {
    name: 'Pierres Sweet and Savory Treats',
    imgPath: '',
    languages: ['C#', 'SQL'],
    technologies: ['Bootstrap', 'HtmlHelper', 'EntityFrameworkCore'],
    description:
      'An mvc application that allows logged in users to facilitate ' +
      'treat/flavor relations. Non logged in users can only view details' +
      ' while logged in users can create, edit, and delete relationships.',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/JLEWilson/Pierre-sSweetAndSavoryTreats.Solution',
        icon: GithubIcon,
      },
    ],
  },
]
export default REPOSITORY_LIST

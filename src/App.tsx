import React from 'react'
import join from './utils'
import About from './components/about'
import ProjectList from './components/projectList'
import REPOSITORY_LIST from './consts/RepositoryList'
import Header from './components/header'
import Title from './components/title'
import NavMenu from './components/modalWrapper'
import ModalWrapper from './components/modalWrapper'

function App() {
  return (
    <div className={join('text-center bg-background min-h-screen m-0 p-0')}>
      <div className={join('md:flex sticky')}>
        <Header />
      </div>
      <ModalWrapper />
      <Title />
      <About />
      <ProjectList reposList={REPOSITORY_LIST} />
    </div>
  )
}

export default App

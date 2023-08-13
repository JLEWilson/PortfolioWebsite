import { join } from './utils'
import About from './components/about'
import ProjectList from './components/projectList'
import REPOSITORY_LIST from './consts/RepositoryList'
import Header from './components/header'
import Links from './components/links'
import Title from './components/title'
import NavMenu from './components/navMenu'
import useMediaQuery from './hooks/MediaQuery'

function App() {
  const small = useMediaQuery('max-width: 1199px')
  return (
    <div className={join('text-center bg-background min-h-screen m-0 p-0')}>
      <div className={join('md:flex sticky')}>
        <Header />
      </div>
      <NavMenu />
      <Title />
      <About />
      <ProjectList reposList={REPOSITORY_LIST} />
    </div>
  )
}

export default App

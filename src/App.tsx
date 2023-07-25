import { join } from './utils'
import { Typography } from './Typography'
import About from './components/about'
import ProjectList from './components/projectList'
import REPOSITORY_LIST from './consts/RepositoryList'
import Header from './components/header'
import Links from './components/links'
import Title from './components/title'

function App() {
  return (
    <div className={join('text-center bg-background min-h-screen m-0 p-0')}>
      <div className={join('md:flex sticky')}>
        <Header />
      </div>
      <Links />
      <Title />
      <About />
      <ProjectList reposList={REPOSITORY_LIST} />
    </div>
  )
}

export default App

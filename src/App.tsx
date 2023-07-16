import { join } from './utils'
import { Typography } from './Typography'
import About from './components/about'
import ProjectList from './components/projectList'
import REPOSITORY_LIST from './features/RepositoryList'

function App() {
  return (
    <div className={join('text-center bg-background min-h-screen m-0 p-0')}>
      <Typography variant='h1' className={join('text-text')}>
        Jacob Wilson
      </Typography>
      <About />
      <ProjectList reposList={REPOSITORY_LIST} />
    </div>
  )
}

export default App

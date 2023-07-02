import { join } from './utils'
import { Typography } from './Typography'
import { store } from './store'
import About from './components/about'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { githubApi } from './features/githubSlice'
function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={githubApi}>
        <div className={join('text-center bg-background h-full m-0')}>
          <Typography variant='h1' className={join('text-text')}>
            Jacob Wilson
          </Typography>
          <About />
        </div>
      </ApiProvider>
    </Provider>
  )
}

export default App

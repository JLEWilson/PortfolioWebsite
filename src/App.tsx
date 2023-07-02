import { join } from './utils'
import { Typography } from './Typography'
import { store } from './store'
import About from './components/about'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className={join('text-center bg-background h-full m-0')}>
        <Typography variant='h1' className={join('text-text')}>
          Jacob Wilson
        </Typography>
        <About />
      </div>
    </Provider>
  )
}

export default App

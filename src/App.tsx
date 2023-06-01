import './styles/App.css'
import { join } from './utils'
import { Typography } from './Typeography'
function App() {
  return (
    <div className={join('text-center bg-background h-full m-0')}>
      <Typography variant='h1' className=' text-text'>
        Jacob Wilson
      </Typography>
    </div>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import {Botm_Nav} from './components/index'

function App() {
  return (
    <div>
      <Botm_Nav/>
      <Outlet />
    </div>
  )
}

export default App

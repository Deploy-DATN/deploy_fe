import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss'

import './ustils/theme/theme.scss'

import {User} from '@/pages/user/index'
import { Admin } from './pages/admin';

function App() {
  return (
    <Router>
      <div className='App'>
        <User/>
        <Admin/>
      </div>
    </Router>
  )
}

export default App

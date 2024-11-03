import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss'

import './ustils/theme/theme.scss'

import {User} from '@/pages/user/index'
import { Admin } from './pages/admin';

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
          <Route path="/*" element={<User />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

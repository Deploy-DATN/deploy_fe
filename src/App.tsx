import "@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Admin from './pages/admin/index'
import User from './pages/user/index'
import Err from './pages/err/index'
import Login from './pages/login/index'
import Register from './pages/register/index';
import Header from './components/header/index'
import Footer from './components/footer';

import './App.scss'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
      errorElement: <Err />
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "header",
      element: <Header />,
    },
    {
      path: "footer",
      element: <Footer />,
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.scss'

import './ustils/theme/theme.scss'

import Admin from './pages/admin/index'
import User from './pages/user/index'
import Err from './pages/err/index'
import Login from './pages/login/index'
import Register from './pages/register/index';
import Header from './components/header/index'
import Footer from './components/footer';
import ForgotPWForm from "./pages/ForgotPW/ForgotPassword"
import VerifyForgotPWForm from "./pages/ForgotPW/VerifyForgotPW"
import NewPW from "./pages/ForgotPW/newPW"

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
    },
    {
      path: "ForgotPWForm",
      element: <ForgotPWForm />,
    },
    {
      path: "VerifyForgotPWForm",
      element: <VerifyForgotPWForm />,
    },
    {
      path: "NewPW",
      element: <NewPW />,
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

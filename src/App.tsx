import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Admin from './pages/admin/index'
import User from './pages/user/index'
import Err from './pages/err/index'
import Login from './pages/login/index'
import Register from './pages/register/index';
import OTP from './pages/register/otp'
import SetPassword from './pages/register/setPassword'

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
      path: "register/otp",
      element: <OTP />,
    },
    {
      path: "register/set-password",
      element: <SetPassword />,
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

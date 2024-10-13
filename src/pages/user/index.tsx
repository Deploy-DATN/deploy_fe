import { Route, Routes } from 'react-router-dom';

import { Home } from './home';
import Err from '@/pages/err'
import Login from '@/pages/login/index'
import Register from '@/pages/register/index'
import ForgotPassword from "@/pages/ForgotPW/ForgotPassword"
import Verify from "@/pages/ForgotPW/VerifyForgotPW"
import SetPassword from "@/pages/ForgotPW/newPW"

export const User = () => {
  return (
    <Routes>
      <Route path="/home">
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password">
        <Route index element={<ForgotPassword />} />
        <Route path="verify" element={<Verify />} />
        <Route path="set-password" element={<SetPassword />} />
        <Route path="*" element={<Err />} />
      </Route>
    </Routes>
  )
}
import { Route, Routes } from 'react-router-dom';

import { Home } from './home';
import Err from '@/pages/err'
import Login from '@/pages/login/index'
import Register from '@/pages/register/index'
import ForgotPassword from "@/pages/ForgotPW/ForgotPassword"
import Verify from "@/pages/ForgotPW/VerifyForgotPW"
import SetPassword from "@/pages/ForgotPW/newPW"
import Header from '@/components/header';
import Footer from '@/components/footer';

export const User = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/forgot-password">
        <Route index element={<ForgotPassword />} />
        <Route path="verify" element={<Verify />} />
        <Route path="set-password" element={<SetPassword />} />
      </Route>
      <Route path="*" element={<Err />} />
    </Routes>
  )
}
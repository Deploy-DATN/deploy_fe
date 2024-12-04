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
import { DetailMotelUser } from './detailMotel';
import Layout from './layout';
import Management from './management/layout';
import Profile from './management';
import Motel from './management/components/motel';
import ChangePassword from './management/components/changePassword';
import TicketUser from './management/components/ticket'
import { SearchMotel } from './search';
import History from './management/components/history';
import Bill from './management/components/bill';
import BillDetail from './management/components/billDetail';
import Noti from './management/components/noti';
import MyMotel from './management/components/myMotel';
import Gioithieu from './home/compenent/gioithieu';

export const User = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='user' element={<Management />}>
          <Route index element={<Profile />} />
          <Route path="motel" element={<Motel />} />
          <Route path="my-motel" element={<MyMotel />} />
          <Route path="change-password" element={<ChangePassword/>} />
          <Route path="ticket" element={<TicketUser/>} />
          <Route path="noti" element={<Noti/>} />
          <Route path="history" element={<History/>} />
          <Route path="history/:roomId" element={<Bill/>} />
          <Route path="history/:roomId/:billId" element={<BillDetail/>} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/search" element={<SearchMotel />} />
      <Route path="/gioithieu" element={<Gioithieu />} />
      <Route path="/forgot-password">
        <Route index element={<ForgotPassword />} />
        <Route path="verify" element={<Verify />} />
        <Route path="set-password" element={<SetPassword />} />
      </Route>
      <Route path="/detailmoteluser/:id" element={<DetailMotelUser />} />
      <Route path="*" element={<Err />} />
    </Routes>
  )
}
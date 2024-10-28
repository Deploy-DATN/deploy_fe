import { Route, Routes } from 'react-router-dom'

import { Layout } from './layout'
import Err from '@/pages/err'
import { Dashboard } from './dashboard'
import { Account } from './account'
import { Motel } from './motel'
import { Notification } from './notification'
import { Ticket } from './ticket'
import '../admin/assets/css/Adminstyle.scss';
import {Infomotel } from './motel/component/infomotel'
import IndexOwner from './motel/component/indexOwner'
import AddMotelOwner from './motel/component/addmotel'


export const Admin = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="account" element={<Account />} />
                <Route path="motel">
                    <Route index element={<Motel />} />
                    <Route path='infomotel/:id' element={<Infomotel />} />
                    <Route path='indexOwner' element={<IndexOwner />} />
                    <Route path='addModelOwner' element={<AddMotelOwner />} />
                </Route>
                <Route path="notification" element={<Notification />} />
                <Route path="ticket" element={<Ticket />} />
                <Route path="*" element={<Err />} />
            </Route>
        </Routes>
    )
}
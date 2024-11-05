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
import EditMotelOwner from './motel/component/editmotel'
import Room from './room'


export const Admin = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="account" element={<Account />} />
                <Route path="motel">
                    <Route index element={<Motel />} />
                    <Route path='infomotel/:id' element={<Infomotel />} />
                </Route>
                <Route path="indexOwner">
                    <Route index element={<IndexOwner />} />
                    <Route path='addModelOwner' element={<AddMotelOwner />} />
                    <Route path='EditModelOwner/:id' element={<EditMotelOwner />} />
                </Route>
                <Route path="notification" element={<Notification />} />
                <Route path="ticket" element={<Ticket />} />
                <Route path="room/:id" element={<Room />} />
                <Route path="*" element={<Err />} />

            </Route>
        </Routes>
    )
}
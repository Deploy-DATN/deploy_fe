import { Route, Routes } from 'react-router-dom'

import { Layout } from './layout'
import Err from '@/pages/err'
import { Dashboard } from './dashboard'
import { Account } from './account'
import { Motel } from './motel'
import { Notification } from './notification'
import { TicketPage } from './ticket'
import '../admin/assets/css/Adminstyle.scss';
import {Infomotel } from './motel/component/infomotel'
import IndexOwner from './motel/component/indexOwner'
import AddMotelOwner from './motel/component/addmotel'
import EditMotelOwner from './motel/component/editmotel'
import Infoticket1 from './ticket/component/inforticket1'


export const Admin = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="account" element={<Account />} />
                <Route path="motel">
                    <Route index element={<Motel />} />
                    <Route path='infomotel/:id' element={<Infomotel />} />
                </Route>
                <Route path="indexOwner">
                    <Route index element={<IndexOwner />} />
                    <Route path='addModelOwner' element={<AddMotelOwner />} />
                    <Route path='EditModelOwner' element={<EditMotelOwner />} />
                </Route>
                <Route path="notification" element={<Notification />} />
                <Route path="ticket">
                    <Route index element={<TicketPage />} />
                    <Route path=':id' element={<Infoticket1 />} />
                </Route>
            </Route>
            <Route path="*" element={<Err />} />
        </Routes>
    )
}
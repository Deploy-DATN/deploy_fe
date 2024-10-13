import { Route, Routes } from 'react-router-dom'

import { Layout } from './layout'
import Err from '@/pages/err'
import { Dashboard } from './dashboard'
import { Account } from './account'
import { Motel } from './motel'
import { Notification } from './notification'
import { Ticket } from './ticket'

export const Admin = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="account" element={<Account />} />
                <Route path="motel" element={<Motel />} />
                <Route path="notification" element={<Notification />} />
                <Route path="ticket" element={<Ticket />} />
                <Route path="*" element={<Err />} />
            </Route>
        </Routes>
    )
}
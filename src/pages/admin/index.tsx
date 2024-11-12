import { Route, Routes } from 'react-router-dom';

import { Layout } from './layout';
import Err from '@/pages/err';
import { Dashboard } from './dashboard';
import { Account } from './account';
import { Motel } from './motel';
import { Notification } from './notification';
import { TicketPage } from './ticket';
import '../admin/assets/css/Adminstyle.scss';
import { Infomotel } from './motel/component/infomotel';
import IndexOwner from './motel/component/indexOwner';
import AddMotelOwner from './motel/component/addmotel';
import EditMotelOwner from './motel/component/editmotel';
import Infoticket1 from './ticket/component/inforticket1';
import Room from './room';
import { OwnerIndexNoti } from './notification/component/OwnerNoti';
import { Bill } from './BillOwner';
import Unauthorized from '../login/components/unauthorized';
import ProtectedRoute from '@/services/api/ProtectedRoute';

export const Admin = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}>
				{/* Route không cần bảo vệ */}
				<Route
					path='unauthorized'
					element={<Unauthorized />}
				/>
				<Route
					index
					element={<Dashboard />}
				/>
				<Route
					path='account'
					element={<Account />}
				/>

				{/* Routes chỉ dành cho Admin */}
				<Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
					<Route path='motel'>
						<Route
							index
							element={<Motel />}
						/>
						<Route
							path='infomotel/:id'
							element={<Infomotel />}
						/>
					</Route>
				</Route>

				{/* Routes chỉ dành cho Admin và Owner */}
				<Route element={<ProtectedRoute allowedRoles={['Admin', 'Owner']} />}>
				<Route
					path='room/:id'
						element={<Room />}
					/>
				</Route>

				{/* Routes chỉ dành cho Owner */}
				<Route element={<ProtectedRoute allowedRoles={['Owner']} />}>
					<Route path='indexOwner'>
						<Route
							index
							element={<IndexOwner />}
						/>
						<Route
							path='addModelOwner'
							element={<AddMotelOwner />}
						/>
						<Route
							path='EditModelOwner/:id'
							element={<EditMotelOwner />}
						/>
					</Route>
					<Route
						path='OwnerIndexNoti'
						element={<OwnerIndexNoti />}
					/>
					<Route
						path='bill'
						element={<Bill />}
					/>
				</Route>

				{/* Routes chung cho tất cả roles admin */}
				<Route
					path='notification'
					element={<Notification />}
				/>
				<Route path='ticket'>
					<Route
						index
						element={<TicketPage />}
					/>
					<Route
						path=':id'
						element={<Infoticket1 />}
					/>
				</Route>
			</Route>
			<Route
				path='*'
				element={<Err />}
			/>
		</Routes>
	);
};

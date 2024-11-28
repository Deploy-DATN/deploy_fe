import '@/pages/admin/assets/css/styles.min.css';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { useRef, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { getSentNotiApi } from '@/services/api/notiApi';
import logo from '@/assets/ThoStay.svg';
import { getAccountApi } from '@/services/api/authApi';
import { Account } from '@/services/Dto/authDto';
import 'src/pages/admin/layout/layout.scss'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { userAppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchAccount } from "@/components/header/redux/action";

export const Layout = () => {

	const dispatch = userAppDispatch();
	const { data } = useSelector((state: RootState) => state.user);
	useEffect(() => {
		dispatch(fetchAccount());
	}, [dispatch]);

	const scrollableNodeRef = useRef<HTMLDivElement>(null);
	const [user, setUser] = useState<Account>();
	const [sentNotifications, setSentNotifications] = useState<any[]>([]);

	useEffect(() => {
		LoadUser();
		if (scrollableNodeRef.current) {
			new SimpleBar(scrollableNodeRef.current);
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const LoadUser = async () => {
		const response = await getAccountApi();
		setUser(response.data.data);
		try {
			const response = await getAccountApi();
			const userData = response.data.data;
			setUser(userData);
			// Gọi API getSentNotiApi với email của user
			if (userData?.email) {
				const sentNotiResponse = await getSentNotiApi({ email: userData.email });
				setSentNotifications(sentNotiResponse.data.notifications); // Lưu dữ liệu thông báo vào biến state
			}
		} catch (error) {
			console.error("Error loading user data:", error);
		}
	};

	const [isMiniSidebar, setIsMiniSidebar] = useState(false);
	const [isShowSidebar, setIsShowSidebar] = useState(false);
	const location = useLocation();

	const handleSidebarToggle = () => {
		setIsMiniSidebar(!isMiniSidebar);
	};

	const handleShowSidebarToggle = () => {
		setIsShowSidebar(!isShowSidebar);
	};

	const handleResize = () => {
		const width = window.innerWidth;
		if (width < 1199) {
			setIsMiniSidebar(true);
		} else {
			setIsMiniSidebar(false);
		}
	};

	const isExactActive = (path: string) => location.pathname === path;

	const isPartialActive = (path: string) => location.pathname.includes(path);

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	const formatContent = (content: string) => {
		const maxLength = 100;
		let formattedContent = '';
		let currentLine = '';
		// Tách nội dung thành các từ
		const words = content.split(' ');
		words.forEach(word => {
			if ((currentLine + word).length <= maxLength) {
				// Nếu thêm từ vào dòng hiện tại mà không vượt quá 100 ký tự, thêm từ đó vào
				currentLine += (currentLine ? ' ' : '') + word;
			} else {
				// Nếu thêm từ vào vượt quá 100 ký tự, kết thúc dòng hiện tại và bắt đầu dòng mới
				formattedContent += currentLine + '<br />';
				currentLine = word; // bắt đầu dòng mới với từ hiện tại
			}
		});
		// Thêm dòng cuối cùng (nếu có)
		if (currentLine) {
			formattedContent += currentLine;
		}
		return formattedContent;
	};

	const getNotificationTypeClass = (type: number) => {
		switch (type) {
			case 2:
				return 'badge bg-warning'; // Cảnh báo (vàng)
			case 3:
				return 'badge bg-danger'; // Khẩn cấp (đỏ)
			case 4:
				return 'badge bg-primary'; // Hệ thống (xanh dương)
			default:
				return 'badge bg-success'; // Thông thường (xanh lá cây)
		}
	};

	return (
		// < !--Body Wrapper-- >
		<div
			className={`page-wrapper ${isMiniSidebar ? 'mini-sidebar' : ''} ${isShowSidebar ? 'show-sidebar' : ''}`}
			id='main-wrapper'
			data-layout='vertical'
			data-navbarbg='skin6'
			data-sidebartype={isMiniSidebar ? 'mini-sidebar' : 'full'}
			data-sidebar-position='fixed'
			data-header-position='fixed'>
			{/* <!-- Sidebar Start --> */}
			<ToastContainer />
			<aside className='left-sidebar'>
				{/* <!-- Sidebar scroll--> */}
				<div
					className='scroll-sidebar'
					data-simplebar>
					<div className='d-flex mb-4 align-items-center justify-content-between'>
						<a
							href='index.html'
							className='text-nowrap logo-img ms-0 ms-md-1 d-flex'>
							<img
								src={logo}
								height='40'
								alt=''
							/>
							<h1>Thỏ Stay</h1>
						</a>
						<div
							className='close-btn d-xl-none d-block sidebartoggler cursor-pointer'
							id='sidebarCollapse'
							onClick={() => {
								handleSidebarToggle();
								handleShowSidebarToggle();
							}}>
							<i className='ti ti-x fs-8'></i>
						</div>
					</div>
					{/* <!-- Sidebar navigation--> */}
					<nav className='sidebar-nav'>
						<ul
							id='sidebarnav'
							className='mb-4 pb-2 in'>
							<li className='nav-small-cap'>
								<i className='ti ti-dots nav-small-cap-icon fs-5'></i>
								<span className='hide-menu'>Trang chủ</span>
							</li>
							<li className={clsx('sidebar-item', { selected: isExactActive('/admin') })}>
								<Link
									to='/admin'
									className={clsx('sidebar-link sidebar-link primary-hover-bg', { active: isExactActive('/admin') })}
									aria-expanded='false'>
									<span className='aside-icon p-2 bg-light-primary rounded-3'>
										<i className='ti ti-layout-dashboard fs-7 text-primary'></i>
									</span>
									<span className='hide-menu ms-2 ps-1'>Bảng điều khiển</span>
								</Link>
							</li>
							<li className='nav-small-cap'>
								<i className='ti ti-dots nav-small-cap-icon fs-5'></i>
								<span className='hide-menu'>Quản lý</span>
							</li>
							<li className={clsx('sidebar-item', { selected: isPartialActive('account') })}>
								<Link
									to='account'
									className={clsx('sidebar-link sidebar-link warning-hover-bg', { active: isPartialActive('account') })}
									aria-expanded='false'>
									<span className='aside-icon p-2 bg-light-warning rounded-3'>
										<i className='ti ti-article fs-7 text-warning'></i>
									</span>
									<span className='hide-menu ms-2 ps-1'>Tài khoản</span>
								</Link>
							</li>
							<li className={clsx('sidebar-item', { selected: isPartialActive('notification') })}>
								<Link
									to='notification'
									className={clsx('sidebar-link sidebar-link danger-hover-bg', { active: isPartialActive('notification') })}
									aria-expanded='false'>
									<span className='aside-icon p-2 bg-light-danger rounded-3'>
										<i className='ti ti-alert-circle fs-7 text-danger'></i>
									</span>
									<span className='hide-menu ms-2 ps-1'>Thông báo</span>
								</Link>
							</li>
							<li className={clsx('sidebar-item', { selected: isPartialActive('motel') })}>
								<Link
									to={user?.role === 'Owner' ? 'indexOwner' : 'motel'}
									className={clsx('sidebar-link sidebar-link success-hover-bg', { active: isPartialActive('motel') })}
									aria-expanded='false'>
									<span className='aside-icon p-2 bg-light-success rounded-3'>
										<i className='ti ti-cards fs-7 text-success'></i>
									</span>
									<span className='hide-menu ms-2 ps-1'>Trọ</span>
								</Link>
							</li>
							<li className={clsx('sidebar-item', { selected: isPartialActive('ticket') })}>
								<Link
									to='ticket'
									className={clsx('sidebar-link sidebar-link primary-hover-bg', { active: isPartialActive('ticket') })}
									aria-expanded='false'>
									<span className='aside-icon p-2 bg-light-primary rounded-3'>
										<i className='ti ti-file-description fs-7 text-primary'></i>
									</span>
									<span className='hide-menu ms-2 ps-1'>Ticket</span>
								</Link>
							</li>
							{user && user.role === "Owner" ? (
								<li className={clsx("sidebar-item", { "selected": isPartialActive('support') })}>
									<Link to='support'
										className={clsx("sidebar-link sidebar-link indigo-hover-bg", { "active": isPartialActive('support') })}
										aria-expanded="false"
									>
										<span className="aside-icon p-2 bg-light-indigo rounded-3">
											<i className="fa-regular fa-circle-question fs-7 text-indigo"></i>
										</span>
										<span className="hide-menu ms-2 ps-1">Trợ giúp</span>
									</Link>
								</li>
							) : ''}
						</ul>
					</nav>
					{/* <!-- End Sidebar navigation --> */}
				</div>
				{/* <!-- End Sidebar scroll--> */}
			</aside>
			{/* <!--  Sidebar End --> */}
			{/* <!--  Main wrapper --> */}
			<div className='body-wrapper'>
				{/* <!--  Header Start --> */}
				<header className="app-header">
					<nav className="navbar navbar-expand-lg navbar-light">
						<ul className="navbar-nav">
							<li className="nav-item d-block d-xl-none">
								<a
									className="nav-link sidebartoggler nav-icon-hover"
									id="headerCollapse"
									href="javascript:void(0)"
									onClick={() => {
										handleSidebarToggle();
										handleShowSidebarToggle();
									}}
								>
									<i className="ti ti-menu-2"></i>
								</a>
							</li>
						</ul>
						<div
							className="navbar-collapse justify-content-end px-0 card rounded-0 mb-0"
							id="navbarNav"
						>
							<ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
								<li className="nav-item dropdown">
									<a
										className="nav-link nav-icon-hover dropdown-toggle no-arrow"
										href="javascript:void(0)"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<i className="ti ti-bell-ringing"></i>
										{sentNotifications.length > 0 && (
											<div className="notification bg-primary rounded-circle"></div>
										)}
									</a>
									<div className="dropdown-menu dropdown-menu-end">
										{sentNotifications.length > 0 ? (
											sentNotifications.map((notification, index) => (
												<a className="dropdown-item" href="#" key={index}>
													<strong>{notification.title}</strong> <br /> <span dangerouslySetInnerHTML={{ __html: formatContent(notification.content) }} />
													<br /><br /><strong><span className={`badge rounded-pill px-3 py-2 fs-3 text-white  ${getNotificationTypeClass(notification.type)}`}>
														{notification.type === 1 ? 'Thông thường' :
															notification.type === 2 ? 'Cảnh báo' :
																notification.type === 3 ? 'Khẩn cấp' : 'Hệ thống'}
													</span></strong>
												</a>
											))
										) : (
											<span className="dropdown-item">Bạn chưa nhận được thông báo nào</span>
										)}
									</div>
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link nav-icon-hover d-flex"
										id="drop2"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<img
											src={data?.avatar}
											alt=""
											width="35"
											height="35"
											className="rounded-circle"
										/>
										<div className="ps-2">
											<h5 className="mb-0">{data?.fullName}</h5>
											<h6>{data?.email}</h6>
										</div>
									</a>

									<div
										className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up me-4"
										aria-labelledby="drop2"
									>
										<div className="message-body">
											<Link to='/admin/adminprofile'
												className="d-flex align-items-center gap-2 dropdown-item"
											>
												<i className="ti ti-user fs-6"></i>
												<p className="mb-0 fs-3">Tài khoản của tôi</p>
											</Link>

											<Link to='/admin/changepassword'
												className="d-flex align-items-center gap-2 dropdown-item"
											>
												<i className="ti ti-lock fs-6"></i>
												<p className="mb-0 fs-3">Đổi mật khẩu</p>
											</Link>
											<a
												href="#"
												className="d-flex align-items-center gap-2 dropdown-item"
											>
												<i className="ti ti-mail fs-6"></i>
												<p className="mb-0 fs-3">Trợ giúp</p>
											</a>
											<a
												onClick={handleLogout}
												className="btn btn-outline-primary mx-3 mt-2 d-block shadow-none"
											>
												Đăng xuất
											</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</nav>
				</header>
				{/* <!--  Header End --> */}
				{/* content */}
				<Outlet />
			</div>
		</div>
	);
};

import '@/pages/admin/assets/css/styles.min.css';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { useRef, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import logo from '@/assets/ThoStay.svg';
import { getAccountApi } from '@/services/api/authApi';
import { User } from '@/pages/user';
import { jwtDecode } from 'jwt-decode';

interface User {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	role: string;
	address: string;
}

export const Layout = () => {
	const scrollableNodeRef = useRef<HTMLDivElement>(null);
	const [user, setUser] = useState<User>();

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
		console.log(response.data.data);
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
									to='motel'
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
							className="navbar-collapse justify-content-end px-0 card rounded-0"
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
										<div className="notification bg-primary rounded-circle"></div>
									</a>
									<div className="dropdown-menu dropdown-menu-end">
										<a className="dropdown-item" href="#">
											Thông báo 1 vvvvvvvvvvvvvvvvvvvbbbbbbbbbbbbbbbbbb
										</a>
										<a className="dropdown-item" href="#">
											Thông báo 2
										</a>
										<a className="dropdown-item" href="#">
											Thông báo 3
										</a>
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
											src={logo}
											alt=""
											width="35"
											height="35"
											className="rounded-circle"
										/>
										<div className="ps-2">
											<h5 className="mb-0">{user?.name} 12312312</h5>
											<h6>{user?.email}dsfdsfdsfds</h6>
										</div>
									</a>

									<div
										className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
										aria-labelledby="drop2"
									>
										<div className="message-body">
											<a
												href="#"
												className="d-flex align-items-center gap-2 dropdown-item"
											>
												<i className="ti ti-user fs-6"></i>
												<p className="mb-0 fs-3">Tài khoản của tôi</p>
											</a>
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

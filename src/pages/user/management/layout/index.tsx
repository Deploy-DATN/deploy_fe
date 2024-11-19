import avatar from '@/assets/images/backgrounds/Silehome.png'
import '../styles/management.scss'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div className="container mt-5 management">
            <div className="row">
                <div className="col-3">
                    <ul className="shadow-sm m-0 bg-body rounded">
                        <li className='menu-item'>
                            <div className='px-2 py-3 d-flex align-items-center account'>
                                <img src={avatar} className='rounded-circle account__avatar' alt="avatar" />
                                <div className='text-dark ms-2 content'>
                                    <p className='m-0 content__name'>Dũng Hồ</p>
                                    <p className='m-0 content_phone-number'>0123456789</p>
                                </div>
                            </div>
                        </li>
                        <li className='menu-item'>
                            <Link to={"123"} className="text-dark px-2 py-3 d-block menu-item__link--active">Thông tin cá nhân</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to={"123"} className="text-dark px-2 py-3 d-block menu-item__link">Trọ</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to={"123"} className="text-dark px-2 py-3 d-block menu-item__link">Lịch sử thuê</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to={"123"} className="text-dark px-2 py-3 d-block menu-item__link">Đổi mật khẩu</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to={"123"} className="text-dark px-2 py-3 d-block menu-item__link">Trợ giúp</Link>
                        </li>
                        <li className='menu-item'>
                            <Link to={"123"} className="text-dark px-2 py-3 d-block menu-item__link">Đăng xuất</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-9">
                    <div className="shadow-sm m-0 bg-body rounded">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
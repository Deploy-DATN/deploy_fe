import { useEffect, useState } from "react";
import "./styles/header.scss";
import { Link } from "react-router-dom";
import { userAppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchAccount, fetchMyMotel, fetchMyNoti } from "./redux/action";
import RegisterOwner from "./components/registerOwner";

const Header = () => {
  const dispatch = userAppDispatch();
  const { user, myMotel, notification } = useSelector((state: RootState) => state.user);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchAccount());
    dispatch(fetchMyMotel());
    dispatch(fetchMyNoti());
  }, [dispatch]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const token = localStorage.getItem("token");
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };
  return (
    <div className="container-lg container-xl container-xxl header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a
            className="logo-text-home navbar-brand me-5 d-flex align-items-center"
            href="/"
          >
            <img
              src="/src/assets/images/Logo-New.png"
              alt=""
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <div className="text-logo">Thỏ Stay</div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 row w-100 mx-0 position-relative">
              <li className="nav-link col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 p-0">
                <div className="w-100 h-100 cangiua">
                  <ul className="navbar-nav mb-2 justify-content-center mb-lg-0 align-items-lg-center align-items-xl-center align-items-xxl-center border-link-header w-ul-header">
                    <li className="nav-item">
                      <a
                        className="nav-link color-text-header"
                        aria-current="page"
                        href="/"
                      >
                        Trang chủ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link color-text-header" href="#">
                        Nhà trọ
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link to="/gioithieu" className="nav-link color-text-header">
                        Giới thiệu
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link color-text-header">
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="col-12 col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 px-0">
                <ul className="navbar-nav px-0 mb-lg-0 d-flex align-items-lg-center align-items-xl-center align-items-xxl-center justify-content-lg-end justify-content-xl-end justify-content-xxl-end px-3-lg w-100">
                  <i className="fa-light fa-sun-bright font-size-header text-dark px-3 py-2"></i>
                  <div
                    className="dropdown dropdown-noti--header-user"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-light fa-bell-ring font-size-header text-dark px-3 py-2"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-noti-header dropdown-menu-lg-end">
                      <div className="dropdown-header">
                        <div className="header-noti-title">Thông báo</div>
                        <Link to='/user/noti'>Tất cả thông báo</Link>
                      </div>
                      <div className="dropdown-noti-item row g-2">
                        <div className="dropdown-noti-item row g-2">

                          {notification && notification.notifications.length ? (
                            notification?.notifications?.map((noti) => (
                              <div className="col-12 dropdown-noti-item-row px-3 mb-2 border rounded bg-light mt-2 py-2 " key={noti.id}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <div
                                    className={`dropdown-noti-item--type dropdown-noti-item-type-${noti.type}`}
                                  >
                                    {noti.type === 1
                                      ? "Khẩn cấp"
                                      : noti.type === 2
                                        ? "Hệ thống"
                                        : noti.type === 3
                                          ? "Cảnh báo"
                                          : "Thông thường"}
                                  </div>
                                  <div className="dropdown-noti-item--date">{(new Date(noti.createDate).toLocaleDateString('vi-VN'))}</div>
                                </div>
                                <div className="dropdown-noti-item--name">{noti.title}</div>
                                <div className="dropdown-noti-item--content">{noti.content}</div>
                                <div className="dropdown-noti-item--sender">{noti.sender}</div>
                              </div>
                            ))
                          ) : (
                            <div className="text-center">Không có thông báo nào</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {token ? (
                    <div className="d-flex">
                      <div className="dropdown-custom" onClick={toggleDropdown}>
                        <a href="#" className="text-dark lg-none px-3 py-2 font-size-header">
                          <img
                            src={user?.avatar}
                            alt="avatar"
                            width="30"
                            height="30"
                            className="rounded-circle"
                          />
                        </a>
                        {dropdownVisible && (
                          <div className="dropdown-menu-custom">
                            <Link to='/user' className="dropdown-item link-dropdown-header-user">Thông tin cá nhân</Link>
                            <Link to='/user/noti' className="dropdown-item link-dropdown-header-user">Thông báo</Link>
                            <Link to="/user/change-password" className="dropdown-item link-dropdown-header-user">Thay đổi mật khẩu</Link>
                            <hr className="dropdown-divider" />
                            <div
                              onClick={() => {
                                localStorage.removeItem('token');
                                window.location.href = '/';
                              }}
                              className="dropdown-item link-dropdown-header-user"
                            >
                              Đăng xuất
                            </div>
                          </div>
                        )}
                      </div>
                      {myMotel ? ''
                        : (
                          <>
                            <button
                              className="d-flex align-items-center border border-success rounded-1 px-1"
                              onClick={() => setModalShow(true)}
                            >
                              Bạn là chủ?
                            </button>
                            <RegisterOwner
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                          </>
                        )}
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="text-dark lg-none px-3 py-2 font-size-header"
                    >
                      <i className="fa-light fa-user"></i>
                    </Link>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

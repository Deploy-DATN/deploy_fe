import { useEffect, useState } from "react";
import "./styles/header.scss";
import { Link } from 'react-router-dom';
import { userAppDispatch, RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { fetchAccount } from "./redux/action";
import RegisterOwner from "./components/registerOwner";

const Header = () => {
  const dispatch = userAppDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(fetchAccount());
  }, [dispatch]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const token = localStorage.getItem('token');
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };
  return (
    <div className="container-lg container-xl container-xxl header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="logo-text-home navbar-brand me-5 d-flex align-items-center" href="/">
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 row w-100 mx-0 position-relative">
              <li className="nav-link col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 p-0">
                <div className="w-100 h-100 cangiua">
                  <ul className="navbar-nav mb-2 justify-content-center mb-lg-0 align-items-lg-center align-items-xl-center align-items-xxl-center border-link-header w-ul-header">
                    <li className="nav-item">
                      <a
                        className="nav-link color-text-header"
                        aria-current="page"
                        href="#"
                      >
                        Địa điểm
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link color-text-header" href="#">
                        Trọ mới
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link color-text-header" href="#">
                        Sắp trả
                      </a>
                    </li>
                  </ul>
                </div>

              </li>
              <li className="col-12 col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 px-0">
                <ul className="navbar-nav px-0 mb-lg-0 d-flex align-items-lg-center align-items-xl-center align-items-xxl-center justify-content-lg-end justify-content-xl-end justify-content-xxl-end px-3-lg w-100">
                  <i className="fa-light fa-sun-bright font-size-header text-dark px-3 py-2"></i>
                  <i className="fa-light fa-bell-ring font-size-header text-dark px-3 py-2"></i>
                  {token ? (
                    <div className="d-flex">
                      <div className="dropdown-custom" onClick={toggleDropdown}>
                        <a href="#" className="text-dark lg-none px-3 py-2 font-size-header">
                          <img
                            src={data?.avatar}
                            alt="avatar"
                            width="30"
                            height="30"
                            className="rounded-circle"
                          />
                        </a>
                        {dropdownVisible && (
                          <div className="dropdown-menu-custom">
                            <Link to='/user' className="dropdown-item">Thông tin cá nhân</Link>
                            <a href="#" className="dropdown-item">Thông báo</a>
                            <Link to="/user/change-password" className="dropdown-item">Thay đổi mật khẩu</Link>
                            <hr className="dropdown-divider" />
                            <div
                              onClick={() => {
                                localStorage.removeItem('token');
                                window.location.href = '/';
                              }}
                              className="dropdown-item"
                            >
                              Đăng xuất
                            </div>
                          </div>
                        )}
                      </div>
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
                    </div>
                  ) :
                    <Link to='/login' className="text-dark lg-none px-3 py-2 font-size-header"><i className="fa-light fa-user"></i></Link>
                  }
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
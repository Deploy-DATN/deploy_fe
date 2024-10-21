import React from "react";
import "./styles/header.scss";

const Header = () => {
  return (
    <div className="container-lg container-xl container-xxl mt-3 ">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="logo-text-home navbar-brand me-5 d-flex align-items-center" href="/">
            <img
              src="src/assets/images/Logo-New.png"
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
                  <ul className="navbar-nav h-100 mb-2 justify-content-center mb-lg-0 align-items-lg-center align-items-xl-center align-items-xxl-center border-link-header w-ul-header">
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
              <li className="nav-link col-12 col-md-12 col-sm-12 col-lg-3 col-xl-3 col-xxl-3 px-0">
                <ul className="navbar-nav px-0 mb-lg-0 d-flex align-items-lg-center align-items-xl-center align-items-xxl-center justify-content-lg-end justify-content-xl-end justify-content-xxl-end px-3-lg w-100">
                  <img
                    className="me-3"
                    src="src/components/header/img/Bongden.png"
                    width="28"
                    height="28"
                    alt="Hình ảnh user"
                  ></img>
                  <img
                    className="me-3"
                    src="src/components/header/img/notifications.png"
                    width="28"
                    height="28"
                    alt="Hình ảnh user"
                  ></img>
                  <button className="color-btn-header text-white lg-none px-3 py-2 font-size-header ms-3 rounded-pill">Đăng nhập</button>
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
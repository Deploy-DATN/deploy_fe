import clsx from "clsx";
import React from "react";
import "./styles/header.scss";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="#">
            <img
              src="src/assets/images/logo.png"
              alt=""
              width="56"
              height="56"
              className="d-inline-block align-top"
            />
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
              <li className="nav-link col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around">
                  <li className="nav-item">
                    <a
                      className="nav-link color-text-header"
                      aria-current="page"
                      href="#"
                    >
                      Trang Chủ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link color-text-header" href="#">
                      Về Chúng Tôi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link color-text-header" href="#">
                      Dịch Vụ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link color-text-header" href="#">
                      Liên Hệ
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item col-1 col-lg-1 col-xl-1_5 col-xxl-2"></li>
              <li className="nav-link col-12 col-md-12 col-sm-12 col-lg-4 col-xl-3_5 col-xxl-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-lg-between justify-content-xl-between justify-content-xxl-between flex-sm-row flex-md-row flex-ssm-row px-3-lg w-100">
                  <img
                    className="img-fluid"
                    src="src/components/header/img/img-icon-user.png"
                    width="60"
                    height="auto"
                    alt="Hình ảnh user"
                  ></img>
                  <button className="btn color-btn-header lg-none px-3 font-size-header ms-3">Bạn là chủ</button>
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
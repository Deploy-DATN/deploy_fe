import { useEffect, useState } from "react";
import "./styles/header.scss";
import { Link } from "react-router-dom";
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

  const token = localStorage.getItem("token");
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };
  const notifis = [
    {
      id: 1,
      name: "Thông báo 1",
      content:
        "Thông báo về việc bảo trì hệ thống cccccc vvvvvvvvvvvvv cccccccccc xxxxxxxxxxxx zzzzzzzzzz ddddddd gggggggg fffffffffff ddddd ccccccc bbbbbbbbbbb nnnnnnnn mmmmmmmmm kkkkkkk uuuuuuuu iiiiiii .",
      type: 1,
      date: "2024-11-30",
      sender: "Admin",
    },
    {
      id: 2,
      name: "Thông báo 2",
      content: "Hệ thống sẽ ngừng hoạt động lúc 10h tối.",
      type: 2,
      date: "2024-11-29",
      sender: "Quản lý kỹ thuật",
    },
    {
      id: 3,
      name: "Thông báo 3",
      content: "Cập nhật chính sách nội bộ mới.",
      type: 3,
      date: "2024-11-28",
      sender: "Phòng Nhân sự",
    },
    {
      id: 4,
      name: "Thông báo 4",
      content: "Lịch nghỉ Tết Dương lịch đã được cập nhật.",
      type: 4,
      date: "2024-11-27",
      sender: "Phòng Hành chính",
    },
    {
      id: 5,
      name: "Thông báo 5",
      content: "Thông báo khẩn: Sự cố mạng đang được xử lý.",
      type: 1,
      date: "2024-11-26",
      sender: "Admin",
    },
  ];
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
                        <a href="#" className="header-noti-tatca">
                          Tất cả thông báo
                        </a>
                      </div>
                      {/* <div className="dropdown-nav-noti mb-2">
                        <div className="tab">
                          <input
                            type="radio"
                            name="tabs"
                            id="all"
                            className="tab__radio"
                          ></input>
                          <label htmlFor="all" className="tab__label">
                            Tất cả
                          </label>
                        </div>
                        <div id="notif_type_1" className="tab">
                          <input
                            type="radio"
                            name="tabs"
                            id="khan-cap"
                            className="tab__radio"
                            value="1"
                          ></input>
                          <label htmlFor="khan-cap" className="tab__label">
                            Khẩn cấp{" "}
                          </label>
                        </div>
                        <div id="notif_type_2" className="tab">
                          <input
                            type="radio"
                            name="tabs"
                            id="he-thong"
                            className="tab__radio"
                            value="2"
                          ></input>
                          <label htmlFor="he-thong" className="tab__label">
                            Hệ thống{" "}
                          </label>
                        </div>
                        <div id="notif_type_3" className="tab">
                          <input
                            type="radio"
                            name="tabs"
                            id="thong-thuong"
                            className="tab__radio"
                            value="3"
                          ></input>
                          <label htmlFor="thong-thuong" className="tab__label">
                            Thông thường{" "}
                          </label>
                        </div>
                      </div> */}
                      <div className="dropdown-noti-item row g-2">
                        {notifis.map((noti) => (
                          <div className="col-12 dropdown-noti-item-row px-3">
                            <div className="d-flex justify-content-between align-items-center ">
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
                              <div className="dropdown-noti-item--date">
                                {noti.date}
                              </div>
                            </div>
                            <div className="dropdown-noti-item--name">
                              {noti.name}
                            </div>
                            <div className="dropdown-noti-item--content">
                              {noti.content}
                            </div>
                            <div className="dropdown-noti-item--sender">
                              {noti.sender}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

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

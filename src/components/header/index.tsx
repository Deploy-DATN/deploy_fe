import { useEffect, useState } from "react";
import "./styles/header.scss";
import { GetUserDetailAvaApi, UserDetailAva } from "@/services/api/HomeApi";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [userDetails, setUserDetails] = useState<UserDetailAva | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserDetails = async () => {
      if (token) {
        try {
          // Tạo một đối tượng mặc định cho UserDetailAva
          const userDetailData: UserDetailAva = {
            fullName: "",
            phone: "",
            avatar: "",
            email: ""
          };

          // Gọi API và truyền token vào
          const response = await GetUserDetailAvaApi(userDetailData, token);
          setUserDetails(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };
    fetchUserDetails();
  }, []);

  const handleProfileClick = () => {
    if (userDetails) {
      navigate('/user', {
        state: {
          email: userDetails.email,
          fullName: userDetails.fullName,
          phone: userDetails.phone,
          avatar: userDetails.avatar
        },
      });
    }
  };

  console.log(userDetails);
  const token = localStorage.getItem("token");
  const defaultAvatar = "https://firebasestorage.googleapis.com/v0/b/nha-tro-t7m.appspot.com/o/images%2Fc68b44ba-41f4-4985-a339-f9378b7fec37.png?alt=media";
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState); // Toggle state khi click vào avatar
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
                  {token && (
                    <div className="dropdown-custom" onClick={toggleDropdown}>
                      <a href="#" className="text-dark lg-none px-3 py-2 font-size-header">
                        <img
                          src={userDetails ? userDetails.avatar : defaultAvatar}
                          alt="User Avatar"
                          width="30"
                          height="30"
                          className="rounded-circle"
                        />
                      </a>
                      {dropdownVisible && (
                        <div className="dropdown-menu-custom">
                          <a href="#" className="dropdown-item" onClick={handleProfileClick}>Thông tin cá nhân</a>
                          <a href="#" className="dropdown-item">Thông báo</a>
                          <a href="#" className="dropdown-item">Thay đổi mật khẩu</a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item">Thoát</a>
                        </div>
                      )}
                    </div>
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
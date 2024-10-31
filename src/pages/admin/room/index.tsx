import {
  faCheckDouble,
  faEllipsis,
  faGears,
  faPaperPlane,
  faPenToSquare,
  faPlus,
  faSearch,
  faUserAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./style/room.scss";
import Addroom from "./component/addroom";
import Inforoom from "./component/inforoom";
import Editroom from "./component/editroom";
import AddUserRoom from "./component/addUserRoom";
import Baotriroom from "./component/baotriroom";

export const Room: React.FC = () => {
  const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
    addRoom: false,
    infoRoom: false,
    editRoom: false,
    addUserRoom: false,
    Baotriroom: false,
  });

  const toggleModal = (modalName: keyof typeof modalState) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="header-name-all">Quản lý phòng trọ</h2>
                </div>
                <div>
                  {" "}
                  <div className="">
                    <button
                      className="btn btn-create-notification btn-transform-y2"
                      onClick={() => toggleModal("addRoom")}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        size="lg"
                        color="#fffffff"
                        className="icon-table-motel me-3"
                      />
                      Thêm phòng trọ
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex mb-4 flex-wrap">
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    Tất cả
                  </a>
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    Đang trống
                  </a>
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    đang thuê
                  </a>
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    Bảo trì
                  </a>
                </div>
                <div>
                  <div className="input-group">
                    <div className="input-group-text">
                      <FontAwesomeIcon
                        icon={faSearch}
                        size="lg"
                        color="#0B1A46"
                        className="form-check-input mt-0 border border-0"
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with radio button"
                      placeholder="Tìm kiếm"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="table-responsive mt-3" data-simplebar>
                <table className="test-table table table-borderless align-middle text-nowrap">
                  <thead className="">
                    <tr className=" brg-table-tro">
                      <th scope="col">ID</th>
                      <th scope="col">Diện tích</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Địa chỉ</th>
                      <th scope="col">Tình trạng</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="table-motel">
                    <tr>
                      <td>ID12345</td>
                      <td>12m</td>
                      <td>1,000,000đ</td>
                      <td className="text-overflow-motel">
                        123 Hà Huy tập, Tân Lợi, BMT
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          size="sm"
                          color="#298b90"
                          className="icon-table-motel me-2"
                        />{" "}
                        0/0
                      </td>
                      <td>
                        <span className="span-baotri-room-motel badge rounded-pill px-3 py-2 fs-3">
                          Bảo trì
                        </span>
                      </td>
                      <td>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("infoRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("editRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                        >
                          <FontAwesomeIcon
                            icon={faCheckDouble}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ID12345</td>
                      <td>12m</td>
                      <td>1,000,000đ</td>
                      <td className="text-overflow-motel">123 abc</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          size="sm"
                          color="#298b90"
                          className="icon-table-motel me-2"
                        />{" "}
                        0/2
                      </td>
                      <td>
                        <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
                          Đang trống
                        </span>
                      </td>
                      <td>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("infoRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("editRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("baotriroom")}
                        >
                          <FontAwesomeIcon
                            icon={faGears}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("addUserRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faUserPlus}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ID12345</td>
                      <td>BMT</td>
                      <td>1,000,000đ</td>
                      <td className="text-overflow-motel">BMT</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          size="sm"
                          color="#298b90"
                          className="icon-table-motel me-2"
                        />{" "}
                        1/2
                      </td>
                      <td>
                        <span className="span-sudung-room-motel badge rounded-pill px-3 py-2 fs-3">
                          Đang thuê
                        </span>
                      </td>
                      <td>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("infoRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("editRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("baotriroom")}
                        >
                          <FontAwesomeIcon
                            icon={faGears}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("addUserRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faUserPlus}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ID12345</td>
                      <td>BMT</td>
                      <td>1,000,000đ</td>
                      <td className="text-overflow-motel">BMT</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          size="sm"
                          color="#298b90"
                          className="icon-table-motel me-2"
                        />{" "}
                        1/2
                      </td>
                      <td>
                        <span className="bg-light-danger tt-khoa badge rounded-pill px-3 py-2 fs-3">
                          Chưa duyệt
                        </span>
                      </td>
                      <td>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("infoRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("editRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ID12345</td>
                      <td>BMT</td>
                      <td>1,000,000đ</td>
                      <td className="text-overflow-motel">BMT</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          size="sm"
                          color="#298b90"
                          className="icon-table-motel me-2"
                        />{" "}
                        1/2
                      </td>
                      <td>
                        <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
                          Chờ duyệt
                        </span>
                      </td>
                      <td>
                        <a
                          href="#"
                          className=" px-2 py-1 mx-1 btn-transform-y2"
                          onClick={() => toggleModal("infoRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faEllipsis}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {modalState.addRoom && (
                <Addroom onClose={() => toggleModal("addRoom")} />
              )}
              {modalState.infoRoom && (
                <Inforoom onClose={() => toggleModal("infoRoom")} />
              )}
              {modalState.editRoom && (
                <Editroom onClose={() => toggleModal("editRoom")} />
              )}
              {modalState.addUserRoom && (
                <AddUserRoom onClose={() => toggleModal("addUserRoom")} />
              )}
              {modalState.baotriroom && (
                <Baotriroom onClose={() => toggleModal("baotriroom")} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;

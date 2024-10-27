import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/stylemotel.scss";
import {
  faHouseCircleCheck,
  faHouseCircleXmark,
  faHouseLock,
  faHouseMedicalCircleExclamation,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ModalThaotac from "./component/ModalThaotac";
import { useState } from "react";

export const Motel: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // Thêm state để xác định loại modal

  const handleOpenModal = (type: string) => {
    setModalType(type); // Xác định loại modal cần hiển thị
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType("");
  };
  return (
    <div className="container-fluid">
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
            <div className="d-flex mb-4 flex-wrap">
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-1 btn-transform-y2 d-flex align-items-center padding-y-9px"
              >
                Tất cả
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-1 btn-transform-y2 d-flex align-items-center padding-y-9px"
              >
                Duyệt
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-1 btn-transform-y2 d-flex align-items-center padding-y-9px"
              >
                Từ chối
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
              >
                Mở khóa
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
              >
                Khóa
              </a>
            </div>

            <div className="table-responsive mt-3" data-simplebar>
              <table className="test-table table table-borderless align-middle text-nowrap">
                <thead className="">
                  <tr className=" brg-table-tro">
                    <th scope="col">ID</th>
                    <th scope="col">Tên chủ trọ</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Số phòng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td>ID12345</td>
                    <td>Account1</td>
                    <td className="text-overflow-motel">
                      123 BMT - Tân an nnnnnn bbbbbbbbb mmmmmbbbbbbbbbbbbbbbbbbbbbbmmmm uuuuuuuuu{" "}
                    </td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
                        Đang thuê
                      </span>
                    </td>
                    <td>
                      <Link
                        to="infomotel"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon
                          icon={faHouseMedicalCircleExclamation}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </Link>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("khoa")}
                      >
                        <FontAwesomeIcon
                          icon={faHouseLock}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ID12345</td>
                    <td>Account1</td>
                    <td className="text-overflow-motel">123 BMT - Tân an</td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
                        Chờ duyệt
                      </span>
                    </td>
                    <td>
                      <a href="#" className=" px-2 py-1 mx-1 btn-transform-y2">
                        <FontAwesomeIcon
                          icon={faHouseMedicalCircleExclamation}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("duyet")} // Mở modal duyệt
                      >
                        <FontAwesomeIcon
                          icon={faHouseCircleCheck}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("tuchoi")}
                      >
                        <FontAwesomeIcon
                          icon={faHouseCircleXmark}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ID12345</td>
                    <td>Account1</td>
                    <td className="text-overflow">123 BMT - Tân an</td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3">
                        Khóa
                      </span>
                    </td>
                    <td>
                      <a href="#" className=" px-2 py-1 mx-1 btn-transform-y2">
                        <FontAwesomeIcon
                          icon={faHouseMedicalCircleExclamation}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("mokhoa")} // Mở modal mở khóa
                      >
                        <FontAwesomeIcon
                          icon={faUnlock}
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
          </div>
        </div>
      </div>
      {showModal && (
        <ModalThaotac onClose={handleCloseModal} modalType={modalType} />
      )}
    </div>
  );
};

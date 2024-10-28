import tk from "@/assets/images/backgrounds/img-login.png";
import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddAccount from "./Component/addAccount";
import { useState } from "react";
import EditAccount from "./Component/editAccount";

export const Account  : React.FC = () => {
  //add account
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
      setShowModal(true);
    };
    const handleCloseModal = () => {
      setShowModal(false);
    };
    //edit account
    const [showEditModal, setShowEditModal] = useState(false);
    const handleOpenEditModal = () => {
      setShowEditModal(true);
    };
    const handleCloseEditModal = () => {
      setShowEditModal(false);
    };

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex  flex-wrap">
                  <a
                    href="#"
                    className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
                  >
                    Tất cả
                  </a>
                  <a
                    href="#"
                    className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
                  >
                    Admin
                  </a>
                  <a
                    href="#"
                    className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
                  >
                    Chủ trọ
                  </a>
                  <a
                    href="#"
                    className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
                  >
                    Nhân viên
                  </a>
                </div>
                <div className="">
                  <button className="btn btn-create-notification btn-transform-y2" onClick={handleOpenModal}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="lg"
                      color="#fffffff"
                      className="icon-table-motel me-3"
                    />
                    Thêm tài khoản
                  </button>
                </div>
              </div>

              <div className="table-responsive mt-3" data-simplebar>
                <table className="test-table table table-borderless align-middle text-nowrap">
                  <thead className="">
                    <tr className=" brg-table-tro">
                      <th scope="col">ID</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Số điện thoại</th>
                      <th scope="col">Email</th>
                      <th scope="col">Địa chỉ</th>
                      <th scope="col">Quyền</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr>
                      <td>ID12345</td>
                      <td>
                        {" "}
                        <div className="me-4">
                          <img
                            src={tk}
                            width="50"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>1234567890</td>
                      <td>Ro@Gmail.com</td>
                      <td className="text-overflow-motel">
                        123 BMT - Tân an nnnnnn bbbbbbbbb
                        mmmmmbbbbbbbbbbbbbbbbbbbbbbmmmm uuuuuuuuu
                      </td>
                      <td>
                        <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
                          Admin
                        </span>
                      </td>
                      <td>
                        <a className=" px-2 py-1 mx-1 btn-transform-y2" onClick={handleOpenEditModal}>
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
                            icon={faTrashCan}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ID12345</td>
                      <td>
                        {" "}
                        <div className="me-4">
                          <img
                            src={tk}
                            width="50"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>1234567890</td>
                      <td>Ro@Gmail.com</td>
                      <td className="text-overflow-motel">
                        123 BMT - Tân an nnnnnn bbbbbbbbb
                        mmmmmbbbbbbbbbbbbbbbbbbbbbbmmmm uuuuuuuuu
                      </td>
                      <td>
                        <span className="tt-chitiet badge bg-light-indigo rounded-pill px-3 py-2 fs-3">
                          Chủ trọ
                        </span>
                      </td>
                      <td>
                        <a className=" px-2 py-1 mx-1 btn-transform-y2" onClick={handleOpenEditModal}>
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
                            icon={faTrashCan}
                            size="2xl"
                            color="#298b90"
                            className="icon-table-motel"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ID12345</td>
                      <td>
                        {" "}
                        <div className="me-4">
                          <img
                            src={tk}
                            width="50"
                            className="rounded-circle"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>1234567890</td>
                      <td>Ro@Gmail.com</td>
                      <td className="text-overflow-motel">
                        123 BMT - Tân an nnnnnn bbbbbbbbb
                        mmmmmbbbbbbbbbbbbbbbbbbbbbbmmmm uuuuuuuuu
                      </td>
                      <td>
                        <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
                          Nhân viên
                        </span>
                      </td>
                      <td>
                        <a className=" px-2 py-1 mx-1 btn-transform-y2">
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
                            icon={faTrashCan}
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
              <div className="w-100 d-flex justify-content-center mt-3">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link  btn-filter" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link  btn-filter" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link  btn-filter" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link  btn-filter" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link  btn-filter" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
			  </div>
            </div>
          </div>
          {showModal && <AddAccount onClose={handleCloseModal} />}
          {showEditModal && <EditAccount onClose={handleCloseEditModal} />}
        </div>
      </div>
    </>
  );
};

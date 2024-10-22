import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/stylemotel.scss";
import { faHouseCircleCheck, faHouseCircleXmark, faHouseLock, faHouseMedicalCircleExclamation, faLaptopHouse, faLock, faLockOpen, faTableCellsRowUnlock, faUnlock, faUnlockAlt, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
export const Motel = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
            <div className="d-flex mb-4 flex-wrap">
                <a
                  href="#"
                  className="btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
                >
                  Tất cả
                </a>
                <a
                  href="#"
                  className="btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
                >
                  Duyệt
                </a>
                <a
                  href="#"
                  className="btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
                >
                  Từ chối
                </a>
                <a
                  href="#"
                  className="btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
                >
                  Mở khóa
                </a>
                <a
                  href="#"
                  className="btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
                >
                  Khóa
                </a>
            </div>

            <div className="table-responsive mt-3" data-simplebar>
              <table className="test-table table table-borderless align-middle text-nowrap rounded-pill">
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
                    <td className="text-overflow">123 BMT - Tân an nnnnnn bbbbbbbbb mmmmmmmmm uuuuuuuuu </td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
                        Đang thuê
                      </span>
                    </td>
                    <td>
                    <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} size="2xl" color="#298b90" className="icon-table-motel" />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon icon={faHouseLock} size="2xl" color="#298b90" className="icon-table-motel" />
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
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} size="2xl" color="#298b90" className="icon-table-motel" />
                        </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon icon={faHouseCircleCheck} size="2xl" color="#298b90" className="icon-table-motel" />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon icon={faHouseCircleXmark} size="2xl" color="#298b90" className="icon-table-motel" />
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
                    <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon icon={faHouseMedicalCircleExclamation} size="2xl" color="#298b90" className="icon-table-motel" />
                        </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon icon={faUnlock} size="2xl" color="#298b90" className="icon-table-motel" />
                      </a>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

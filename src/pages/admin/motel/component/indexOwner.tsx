import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/stylemotel.scss";
import {
  faEllipsis,
  faHouseCircleCheck,
  faHouseCircleXmark,
  faHouseLock,
  faHouseMedicalCircleExclamation,
  faPaperPlane,
  faPenToSquare,
  faPlus,
  faSearch,
  faStop,
  faUnlock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MotelByIdDTO } from "@/services/Dto/MotelDto";
import { getMotelByOwner } from "@/services/api/MotelApi";
import MotelOwner from "./Owner/motelOwner";
import "../styles/stylemotel.scss";

export const indexOwner = () => {
  const [motel, setMotel] = useState<MotelByIdDTO[]>();
  let id = "1";

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    const motel = await getMotelByOwner(id);
    setMotel(await motel);
    console.log(motel);
  };

  const CheckStatus = (status: number) => {
    if (status === 1) {
      return (
        <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
          Chờ duyệt
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
          Đang hoạt động
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3">
          Ngừng hoạt động
        </span>
      );
    } else if (status === 4) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3">
          Từ chối
        </span>
      );
    }
  };

  return (
    <>
      <div className="container-fluid index-motel">
        <div className="row align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="header-name-all">Quản lý trọ</h2>
                </div>
                <div>
                  <div className="">
				  <Link
                  to="addModelOwner"
                  className="btn btn-create-notification btn-transform-y2"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="lg"
                    color="#fffffff"
                    className="icon-table-motel me-3"
                  />
                  Thêm dãy trọ
                </Link>
                  </div>
                </div>
              </div>
			  <div className="d-flex justify-content-between my-4">
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
                    Đang thuê
                  </a>
                  <a
                    href="#"
                    className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
                  >
                    Chờ duyệt
                  </a>
                  <a
                    href="#"
                    className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center"
                  >
                    Khóa
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
                      <th scope="col">Địa chỉ</th>
                      <th scope="col">Số phòng</th>
                      <th scope="col">Giá điện</th>
                      <th scope="col">Giá nước</th>
                      <th scope="col">Giá khác</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="table-motel">
                    {motel &&
                      motel.map((motel) => (
                        <tr>
                          <td>{motel.id}</td>
                          <td className="text-overflow-motel">
                            {" "}
                            {motel?.address}
                          </td>
                          <td>{motel?.rooms?.length} phòng</td>
                          <td>{motel?.price?.electric}</td>
                          <td>{motel?.price?.water}</td>
                          <td>{motel?.price?.other}</td>

                          <td>{CheckStatus(motel?.status)}</td>
                          <td>
                            <Link
                              to={`/admin/room/${motel.id}`}
                              className=" px-2 py-1 mx-1 btn-transform-y2"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsis}
                                size="2xl"
                                color="#298b90"
                                className="icon-table-motel"
                              />
                            </Link>
                            <a
                              href={`/admin/indexOwner/EditModelOwner/${motel.id}`}
                              className=" px-2 py-1 mx-1 btn-transform-y2"
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
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="w-100 d-flex justify-content-center mt-3">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className="page-link  btn-filter"
                        href="#"
                        aria-label="Previous"
                      >
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
                      <a
                        className="page-link  btn-filter"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default indexOwner;

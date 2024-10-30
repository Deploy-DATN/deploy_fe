import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/stylemotel.scss";
import { faPlus, faStop, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const indexOwner = () => {
  return (
    <>
      <div className="container-fluid index-motel">
        <div className="row align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
            <div className="d-flex  justify-content-end">
                <Link to="addModelOwner" className="btn btn-create-notification btn-transform-y2" >
                  <FontAwesomeIcon icon={faPlus} size="lg" color="#fffffff" className="icon-table-motel me-3" />Thêm dãy trọ
                </Link>
              </div>
              <div className="d-flex mb-4 flex-wrap justify-content-end mt-4">
                <div className="d-flex ih-indexowner-help align-items-center me-4">
                  <FontAwesomeIcon
                    icon={faStop}
                    color="#00B074"
                    size="lg"
                    className="icon-index-owner-motel-help-trong px-1"
                  />
                  <h4 className="h4-index-owner-motel-help mb-0 ms-3">
                    Đang trống
                  </h4>
                </div>
                <div className="d-flex ih-indexowner-help align-items-center me-4">
                  <FontAwesomeIcon
                    icon={faStop}
                    color="#FFB168"
                    size="lg"
                    className="icon-index-owner-motel-help-sudung px-1"
                  />
                  <h4 className="h4-index-owner-motel-help mb-0 ms-3">
                    Đang sử dụng
                  </h4>
                </div>
                <div className="d-flex ih-indexowner-help align-items-center">
                  <FontAwesomeIcon
                    icon={faStop}
                    color="#A6A6A6"
                    size="lg"
                    className="icon-index-owner-motel-help-baotri px-1"
                  />
                  <h4 className="h4-index-owner-motel-help mb-0 ms-3">
                    Đang bảo trì
                  </h4>
                </div>
              </div>
              <div className="table-motel-index row mt-3 px-0 mx-0">
                <div className="col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-center flex-column justify-content-between px-4 py-2">
                  <div className="text-table-index-motel-owner">
                    Địa chỉ: 1234 Mai Hắc Đế , Phường tân thành, TP Buôn Ma
                    Thuộc
                  </div>
                  <div className="w-100 mt-2">
                    <div className="row justify-content-between mx-0">
                      <Link to="EditModelOwner"
                        type="button"
                        className="btn-sua-index-motel-owner btn btn-sm px-3 py-2 mb-3 btn-transform-y2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-5"
                      >
                        Sửa
                      </Link>
                      <button
                        type="button"
                        className="btn-xoa-index-motel-owner btn btn-sm px-3 py-2 mb-3 btn-transform-y2  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-5"
                      >
                        Xóa
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn-yeucauduyet-index-motel-owner btn btn-sm px-3 py-2 mb-3 btn-transform-y2 w-100"
                      >
                        Yêu cầu duyệt
                      </button>
                    </div>
                    <div className="w-100"></div>
                  </div>
                </div>
                <div className="phong-table-motel-owner col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10 row">
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangsudung phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangbaotri phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-motel-index row mt-3 px-0 mx-0">
                <div className="col-5 col-sm-5 col-md-3 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-center flex-column justify-content-between px-4 py-2">
                  <div className="text-table-index-motel-owner">
                    Địa chỉ: 1234 Mai Hắc Đế , Phường tân thành, TP Buôn Ma
                    Thuộc
                  </div>
                  <div className="w-100 mt-2">
                    <div className="row justify-content-between mx-0">
                      <Link to="EditModelOwner"
                        type="button"
                        className="btn-sua-index-motel-owner btn btn-sm px-3 py-2 mb-3 btn-transform-y2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-5"
                      >
                        Sửa
                      </Link>
                      <button
                        type="button"
                        className="btn-xoa-index-motel-owner btn btn-sm px-3 py-2 mb-3 btn-transform-y2  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-5"
                      >
                        Xóa
                      </button>
                    </div>
                    <div >
                      <button
                        type="button"
                        className="btn-yeucauduyet-index-motel-owner btn btn-sm px-3 py-2 mb-3 btn-transform-y2 w-100"
                      >
                        Yêu cầu duyệt
                      </button>
                    </div>
                    <div className="w-100"></div>
                  </div>
                </div>
                <div className="phong-table-motel-owner col-7 col-sm-7 col-md-9 col-lg-10 col-xl-10 col-xxl-10 row">
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangsudung phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangbaotri phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="phong-table-motel-owner-2 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-2 px-2">
                    <div className="border-dangtrong phong-table-motel-owner-3 d-flex flex-column justify-content-between px-2 py-2">
                      <div className="w-100 text-phong-table-motel-owner">
                        Phòng 01
                      </div>
                      <div className="w-100 d-flex justify-content-between">
                        <div>12/12/1212-13/13/1313</div>
                        <div>
                          <FontAwesomeIcon
                            icon={faUser}
                            size="sm"
                            className="icon-index-owner-motel-help-sudung px-1"
                          />
                          2/3
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
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

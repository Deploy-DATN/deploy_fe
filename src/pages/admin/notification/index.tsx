import tk from "@/assets/images/backgrounds/img-login.png";

export const Notification = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
          <div className="d-flex mb-4 flex-wrap">
                <a
                  href="#"
                  className="btn text-white btn-sm btn-duyet px-3 py-2 mx-2 mb-3"
                >
                  Đã gửi
                </a>
                <a
                  href="#"
                  className="btn text-white btn-sm btn-tuchoi px-3 py-2 mx-2 mb-3"
                >
                  Chưa gửi
                </a>
            </div>

            <div className="table-responsive" data-simplebar>
              <table className="table table-borderless align-middle text-nowrap">
                <thead>
                  <tr className="brg-table-tro rounded-pill">
                    <th scope="col">ID</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Ngày tạo</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-1 fw-bolder">ID12345</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Tiêu đề</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Mô tả</p>
                    </td>
                    <td>dd/mm/yyyy</td>
                    <td>
                    <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
                        Chưa gửi
                      </span>
                    </td>
                    <td>
                    <a
                        href="#"
                        className="btn text-white btn-sm btn-mokhoa px-3 py-2 mx-2"
                      >
                        Sửa
                      </a>
                      <a
                        href="#"
                        className="btn text-white btn-sm btn-chitiet px-3 py-2 mx-2"
                      >
                        Gửi
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-1 fw-bolder">ID12345</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Tiêu đề</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Mô tả</p>
                    </td>
                    <td>dd/mm/yyyy</td>
                    <td>
                    <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
                        Đã gửi
                      </span>
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

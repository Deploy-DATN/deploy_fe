import "./styles/stylemotel.scss";
export const Motel = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
            <div className="d-flex mb-4 flex-wrap">
                <a
                  href="#"
                  className="btn text-white btn-sm btn-chitiet px-3 py-2 mx-2 mb-3"
                >
                  Chi tiết
                </a>
                <a
                  href="#"
                  className="btn text-white btn-sm btn-duyet px-3 py-2 mx-2 mb-3"
                >
                  Duyệt
                </a>
                <a
                  href="#"
                  className="btn text-white btn-sm btn-tuchoi px-3 py-2 mx-2 mb-3"
                >
                  Từ chuối
                </a>
                <a
                  href="#"
                  className="btn text-white btn-sm btn-mokhoa px-3 py-2 mx-2 mb-3"
                >
                  Mở khóa
                </a>
                <a
                  href="#"
                  className="btn text-white btn-sm btn-khoa px-3 py-2 mx-2 mb-3"
                >
                  Khóa
                </a>
            </div>

            <div className="table-responsive mt-3" data-simplebar>
              <table className="test-table table table-borderless align-middle text-nowrap">
                <thead>
                  <tr className="brg-table-tro rounded-pill">
                    <th scope="col">ID</th>
                    <th scope="col">Tên chủ trọ</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Số phòng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
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
                        className="btn text-white btn-sm btn-chitiet px-3 py-2 mx-2"
                      >
                        Chi tiết
                      </a>
                      <a
                        href="#"
                        className="btn text-white btn-sm btn-khoa px-3 py-2 mx-2"
                      >
                        Khóa
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ID12345</td>
                    <td>Account1</td>
                    <td className="text-overflow">123 BMT - Tân an</td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
                        Chờ duyệt
                      </span>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="btn text-white btn-sm btn-chitiet px-3 py-2 mx-2"
                      >
                        Chi tiết
                      </a>
                      <a
                        href="#"
                        className="btn text-white btn-sm btn-duyet px-3 py-2 mx-2"
                      >
                        Duyệt
                      </a>
                      <a
                        href="#"
                        className="btn text-white btn-sm btn-tuchoi px-3 py-2 mx-2"
                      >
                        Từ chuối
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
                        className="btn text-white btn-sm btn-chitiet px-3 py-2 mx-2"
                      >
                        Chi tiết
                      </a>
                      <a
                        href="#"
                        className="btn text-white btn-sm btn-mokhoa px-3 py-2 mx-2"
                      >
                        Mở khóa
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

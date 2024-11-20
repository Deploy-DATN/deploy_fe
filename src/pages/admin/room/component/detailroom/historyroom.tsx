import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Historyroom = () => {
  return (
    <div>
      <div className="d-flex justify-content-start mt-3">
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
              <th scope="col">hình ảnh</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">số nước</th>
              <th scope="col">Số điện</th>
              <th scope="col">Ngày thuê</th>
              <th scope="col">Ngày ra</th>
            </tr>
          </thead>
          <tbody className="table-room-info-history">
            <tr>
              <td>
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHlgkvSBjLFpLP282EpgmO5qRqRcsCiM_rQ&s"
                  width="50"
                  height="50"
                  className="rounded-circle"
                  alt=""
                />
              </td>
              <td>Nguyễn Thị Bảo Yến</td>
              <td>0987623456</td>
              <td>124</td>
              <td>1245</td>
              <td>11/11/1111</td>
              <td>22/22/2222</td>
            </tr>
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
              <a className="page-link  btn-filter" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Historyroom;

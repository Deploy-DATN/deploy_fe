import { GetHistoryByRoomIdApi } from "@/services/api/MotelApi";
import { GetHistoryByRoomIdDTO } from "@/services/Dto/MotelDto";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Historyroom = ({ roomId }: { roomId: number }) => {
  const [history, setHistory] = useState<GetHistoryByRoomIdDTO[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetHistoryByRoomIdApi(roomId);
      if (response.code === 200) {
        setHistory(response.data);
        console.log(response.data);
      }
    };
    fetchData();
  }, []);

  const CheckStatus = (status: number) => {
    if (status === 1) {
      return (
        <span className="tt-dangthue bg-light-success rounded-pill p-2 fs-2">
          Đang thuê
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="tt-choduyet badge bg-light-warning rounded-pill p-2 fs-2">
          Ngừng thuê
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill p-2 fs-2">
          Bảo trì
        </span>
      );
    }
  };

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
              <th scope="col">Email</th>
              <th scope="col">Ngày thuê</th>
              <th scope="col">Ngày ra</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="table-room-info-history">
            {history.map((item) => (
              <tr>
                <td>
                  <img
                    src={item?.user?.avatar ?? ""}
                    width="50"
                    height="50"
                    className="rounded-circle"
                    alt=""
                  />
                </td>
                <td>{item?.user?.fullName}</td>
                <td>{item?.user?.phone}</td>
                <td>{item?.user?.email}</td>
                <td>
                  {item?.createDate
                    ? new Date(item?.createDate).toLocaleDateString("vi-VN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                    : "N/A"}
                </td>
                <td>{item?.endDate}</td>
                <td>{CheckStatus(item?.status)}</td>
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

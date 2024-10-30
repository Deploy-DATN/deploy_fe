import { faEllipsis, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "src/pages/admin/ticket/styleticket.scss"
import Infoticket from "./component/Infoticket";
import styles from './styles/styleticket.module.scss'
import clsx from "clsx";

import { getTickets, Data } from "@/services/api/ticketApi";
import { text } from "@fortawesome/fontawesome-svg-core";

export const Ticket: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTikets] = useState<Data[]>();
  const [selectedTicket, setSelectedTicket] = useState<Data | null>(null);

  const handleOpenModal = (data: Data) => {
    setSelectedTicket(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTicket(null);
  };

  const fetchTickets = async () => {
    try {
      let res = await getTickets();
      setTikets(res.data.data);
    } catch (error) {
      console.error('Lỗi lấy dữ liệu api:', error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className={clsx(styles.ticket, "container-fluid")}>
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="header-name-all">Quản lý ticket</h2>
              </div>
              <div>
                {" "}
                <div className="">
                  {/* button thêm */}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between my-4">
            <div className={clsx(styles.blockFilter, "d-flex mb-4 flex-wrap")}>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
              >
                Tất cả
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
              >
                Hoành thành
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
              >
                Tiếp nhận
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2"
              >
                Sử lý
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
            <div className="table-responsive" data-simplebar>
              <table className="table-ticket table table-borderless align-middle text-nowrap">
                <thead>
                  <tr className="brg-table-tro rounded-pill">
                    <th scope="col">STT</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Tiến trình</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {tickets && tickets.length > 0 &&
                    tickets.map((item, index) => (
                      <tr>
                        <td>
                          <p className="fs-3 fw-normal mb-0">{index}</p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0">
                            {/* type: 0:mặc định, 1:lỗi hệ thống, 2:yêu cầu, 3:tố cáo, 4:trợ giúp
                          status: 0:mặc định, 1:tiếp nhận, 2:đang sử lý, 3:đã hoàn thành */}
                            {
                              item.type === 1 ? "Lỗi hệ thống" : item.type === 2 ? "Yêu cầu" : item.type === 3 ? "Tố cáo" : item.type === 4 ? "Trợ giúp" : "Chưa có"
                            }
                          </p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0 text-overflow-ticket-tieude">
                            {
                              item.title
                            }
                          </p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0 text-overflow-ticket">
                            {
                              item.content
                            }
                          </p>
                        </td>
                        <td>
                          <p className="fs-3 fw-normal mb-0">
                            {
                              item.status === 1 ? "Tiếp nhận" : item.status === 2 ? "Đang sử lý" : item.status === 3 ? "Hoàn thành" : "Chưa có"
                            }
                          </p>
                        </td>
                        <td>
                          <a onClick={() => handleOpenModal(item)}>
                            <FontAwesomeIcon icon={faEllipsis} size="2xl" color="#298b90" className="icon-table-motel" />
                          </a>
                        </td>
                      </tr>
                    ))
                  }
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
        {showModal && selectedTicket && (
          <Infoticket data={selectedTicket} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

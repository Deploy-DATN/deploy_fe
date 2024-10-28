import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "src/pages/admin/ticket/styleticket.scss"
import Infoticket from "./component/Infoticket";
import styles from './styles/styleticket.module.scss'
import clsx from "clsx";

export const Ticket: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className={clsx(styles.ticket, "container-fluid")}>
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
            <div className={clsx(styles.blockFilter, "d-flex mb-4 flex-wrap")}>
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
            <div className="table-responsive" data-simplebar>
              <table className="table-ticket table table-borderless align-middle text-nowrap">
                <thead>
                  <tr className="brg-table-tro rounded-pill">
                    <th scope="col">ID</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Tiến trình</th>
                    <th scope="col">
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        size="2xl"
                        color="#298b90"
                        className="icon-table-motel"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="fs-3 fw-normal mb-0">1</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Loại tiến trình</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0 text-overflow-ticket-tieude">
                        Tiêu đề
                      </p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0 text-overflow-ticket">Nội dung nnnnnnnnnnnnnnnn mmmmmmmmmmm ffffffff vv</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Tiếp nhận</p>
                    </td>
                    <td>
                      <a onClick={handleOpenModal}>
                        <FontAwesomeIcon icon={faEllipsis} size="2xl" color="#298b90" className="icon-table-motel" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fs-3 fw-normal mb-0">1</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Loại tiến trình</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0 text-overflow-ticket-tieude">
                        Tiêu đề fyewgfiuygwefgiuweifgweiufgiwegfiwegify
                      </p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0 text-overflow-ticket">Nội dung nnnnnnnnnnnnnnnn mmmmmmmmmmm ffffffff vv</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Hoàn thành</p>
                    </td>
                    <td>
                      <a onClick={handleOpenModal}>
                        <FontAwesomeIcon icon={faEllipsis} size="2xl" color="#298b90" className="icon-table-motel" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fs-3 fw-normal mb-0">1</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Loại tiến trình</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0 text-overflow-ticket-tieude">
                        Tiêu đề
                      </p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0 text-overflow-ticket">Nội dung nnnnnnnnnnnnnnnn mmmmmmmmmmm ffffffff vv</p>
                    </td>
                    <td>
                      <p className="fs-3 fw-normal mb-0">Sử lý</p>
                    </td>
                    <td>
                      <a onClick={handleOpenModal}>
                        <FontAwesomeIcon icon={faEllipsis} size="2xl" color="#298b90" className="icon-table-motel" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {showModal && <Infoticket onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

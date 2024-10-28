
import CreateNotification from "./component/CreateNotification";
import EditNotification from "./component/EditNotification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from 'react';

import { getListNotiApi, Noti } from '@/services/api/authApi';
import Swal from 'sweetalert2';

export const Notification: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<Noti | null>(null);
  const [notifications, setNotifications] = useState<Noti[]>([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);

    setCurrentNotification(null);
  };

  const handleOpenEditModal = (noti: Noti) => {
    setCurrentNotification(noti);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentNotification(null);
  };


  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getListNotiApi();
        if (response.data.code === 200) {
          setNotifications(response.data.data);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi!',
            text: 'Không thể lấy danh sách thông báo',
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Lỗi!',
          text: 'Đã có lỗi xảy ra khi gọi API',
        });
        console.error('Lỗi API:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="container-fluid noti-container">
      <div className="row align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
          <div className="d-flex justify-content-between mb-4">
          <div className="d-flex flex-wrap">

                <a href="#" className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center">
                  Đã gửi
                </a>
                <a href="#" className="btn btn-filter btn-sm px-3 py-1 mx-2 mb-1 btn-transform-y2 d-flex align-items-center">

                  Chưa gửi
                </a>
              </div>
              <div className="">
                <button className="btn btn-create-notification btn-transform-y2" onClick={handleOpenModal}>
                  <FontAwesomeIcon icon={faPlus} size="lg" color="#fffffff" className="icon-table-motel me-3" />Thêm thông báo
                </button>

                {showModal && <CreateNotification onClose={handleCloseModal} />}
              </div>
            </div>

            <div className="table-responsive" data-simplebar>
              <table className="table table-borderless align-middle text-nowrap">
                <thead>
                  <tr className="brg-table-tro rounded-pill">
                    <th scope="col">ID</th>
                    <th scope="col">Tiêu đề</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.map((noti) => (
                    <tr key={noti.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <h6 className="mb-1 fw-bolder">{noti.id}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fs-3 fw-normal mb-0">{noti.title}</p>
                      </td>
                      <td>
                        <p className="fs-3 fw-normal mb-0">{noti.content}</p>
                      </td>
                      <td>
                        <p className="fs-3 fw-normal mb-0">{noti.type}</p>
                      </td>
                      <td>
                        {noti.status === 0 ? (
                          <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
                            Chưa gửi
                          </span>
                        ) : (
                          <span className="tt-choduyet badge bg-light-success rounded-pill px-3 py-2 fs-3 text-black">
                            Đã gửi
                          </span>
                        )}
                      </td>
                      <td>
                        <button
                          className="btn text-white btn-sm btn-mokhoa px-3 py-2 mx-2"
                          onClick={() => handleOpenEditModal(noti)}
                        >
                          Sửa
                        </button>
                        <a
                          href="#"
                          className="btn text-white btn-sm btn-chitiet px-3 py-2 mx-2"
                        >
                          Gửi
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
            {/* EditNotification Popup */}
            {showEditModal && currentNotification && (
              <EditNotification
                notificationId={currentNotification.id}
                initialData={{
                  type: currentNotification.type,
                  title: currentNotification.title,
                  content: currentNotification.content,
                }}
                onClose={handleCloseEditModal}
              />
            )}

          </div>
        </div>
      </div>
    </div>
  );
};


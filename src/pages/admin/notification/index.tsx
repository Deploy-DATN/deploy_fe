
import { useEffect, useState } from 'react';
import { getListNotiApi, Noti } from '@/services/api/authApi';


import Swal from 'sweetalert2';

export const Notification = () => {
  const [notifications, setNotifications] = useState<Noti[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getListNotiApi();
        if (response.data.code == 200) {
          setNotifications(response.data.data)
        }
        else {
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
            <div className="d-flex mb-4 flex-wrap">
              <div className="me-auto">
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
              <div>
                <button className="btn btn-primary add-noti">Thêm thông báo</button>
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
                {notifications.map((noti) => (
                  <tbody key={noti.id}>
                    <tr>
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
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

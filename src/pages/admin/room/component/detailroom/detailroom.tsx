import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddUserRoom from "./addUserRoom";
import Deleteuseroom from "./deleteuseroom";
import { RoomDTO } from "@/services/Dto/MotelDto";

const Detailroom: React.FC<{ room: RoomDTO | null }> = ({ room }) => {
  const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
    addUserRoom: false,
    deleteuseroom: false,
  });
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  const toggleModal = (
    modalName: keyof typeof modalState,
    roomId: number | null = null
  ) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
    setSelectedRoomId(roomId);
  };

  const motels = [
    {
      status: 2,
      name: "Tên dãy trọ 1",
      address: "123 Hà Huy Tập, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      price: "10,000,000 đ/tháng",
      images: [
        "https://i-connect.com.vn/data/news/7046/anh-14-mau-phong-tro-thiet-ke-hien-dai.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjQ72yYhxptSLkHEEk6c1IfMZHorRmNlVsrw&s",
        "https://xaydungthuanphuoc.com/wp-content/uploads/2022/09/mau-phong-tro-co-gac-lung-dep2028-4.jpg",
        "https://plus.unsplash.com/premium_photo-1661407582641-9ce38a3c8402?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://cdn.pixabay.com/photo/2024/06/02/16/56/minimalism-8804667_1280.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzj64rr7VM1h6_Aln1LMnUvFLq9ZQ_1dpIlg&s",
        "https://img.pikbest.com/wp/202345/pretty-very-room_9587397.jpg!w700wp",
        "https://cdn.pixabay.com/video/2024/03/21/205001-926015670_tiny.jpg",
      ],
    },
  ];

  console.log('room', room?.roomType);



  

  const CheckStatus = (status: number) => {
    if (status === 1) {
      return (
        <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
          Đang trống
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="tt-dangthue bg-light-success rounded-pill px-3 py-2 fs-3">
          Đang thuê
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="span-baotri-room-motel rounded-pill px-3 py-2 fs-3">
          bảo trì
        </span>
      );
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-9 mt-3">
          <div className="bgr-detail-room-info p-4">
            <div className="row">
              <div className=" col-12 col-lg-5 row  align-content-start flex-wrap">
                {motels[0].images.map((image, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-4 mb-2 px-1">
                    <img
                      src={image}
                      alt={`Hình ${index + 1}`}
                      className="img-fluid img-info-room-detail"
                    />
                  </div>
                ))}
              </div>
              <div className=" col-12 col-lg-7">
                <div className=" bgr-detail-motel-text-user">
                  <h2 className="name-detail-motel-user">Số phòng 1</h2>
                  {/* Code phần dưới img ở đây là dc */}
                  <div className="d-flex mt-3 align-items-center">
                    <h5 className="me-3 mb-0 price-detail-motel-user">
                    {room?.roomType?.price?.toLocaleString('vi-VN')} / tháng
                    </h5>
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="sm"
                      color="#0B1A46"
                      className="me-3"
                    />{" "}
                    <h5 className=" mb-0 area-detail-motel-user">
                      {room?.roomType?.area}M<sup>2</sup>
                    </h5>
                  </div>
                  <h5 className=" mb-0 table-deltail-motel-user">
                    <table className="table-none-all">
                      <tbody>
                        <tr>
                          <td className="pe-2">Số điện: </td>
                          <td>{room?.consumption?.electricity || 0}</td>
                        </tr>
                        <tr className="">
                          <td className="pe-2">Số nước: </td>
                          <td>{room?.consumption?.water || 0}</td>
                        </tr>
                      </tbody>
                    </table>
                  </h5>
                  <h5 className="mt-3 mb-0 text-deltail-motel-user">
                    <i className="fa-light fa-clock me-1"></i>Cập nhật 1 tuần
                    trước
                  </h5>
                  <div className="mt-3">{CheckStatus(motels[0].status)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-3">
          {/* Người thuê */}
          {
            room?.users.map((user) => (
              <div className="bgr-detail-room-info p-4 mt-3 position-relative" key={user.id}>
              <div className="close-user-detai-room">
                <button
                  className="close-btn-user btn-transform-y2"
                  onClick={() => toggleModal("deleteuseroom", 1)}
                >
                  <i className="fa-regular fa-xmark fa-xl"></i>
                </button>
              </div>
              <div className="row">
                <div className="col-3 width-height">
                    <img
                      src={user?.avatar || ''}
                    alt="user-avatar"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-9 text-nowrap overflow-hidden">
                  <h5>{user?.fullName}</h5>
                  <h6 className="color-xam">{user?.email}</h6>
                  <h6 className="color-xam">{user?.phone}</h6>
                </div>
                </div>
              </div>
            ))
            }
         
          <button
            className={`btn btn-create-notification btn-sm px-3 py-2 mb-3 btn-transform-y2 mt-3`}
            onClick={() => toggleModal("addUserRoom", 1)}
          >
            Thêm người thuê
          </button>
        </div>
      </div>
      {modalState.addUserRoom && selectedRoomId && (
        <AddUserRoom
          roomId={selectedRoomId}
          onClose={() => toggleModal("addUserRoom")}
        />
      )}
      {modalState.deleteuseroom && selectedRoomId && (
        <Deleteuseroom
          roomId={selectedRoomId}
          onClose={() => toggleModal("deleteuseroom")}
        />
      )}
    </>
  );
};

export default Detailroom;

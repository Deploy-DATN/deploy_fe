import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { GetRoomTypeDTO } from "@/services/Dto/MotelDto";
import { Link } from "react-router-dom";
import RowRoom from "./rowRoom";

const Roomtype = (props: {
  roomType: GetRoomTypeDTO;
  motelStatus: number;
  toggleModal: (modalName: string, roomId: number) => void;
}) => {
  const { roomType, motelStatus, toggleModal } = props;

  const rooms = [
    {
      id: 1,
      name: "Tên phòng trọ 123",
      area: "22",
      price: "10000000",
      rating: "4.7",
      status: 2,
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

  const CheckStatus = (status: number) => {
    if (status === 1) {
      return (
        <span className="tt-choduyet badge bg-light-warning rounded-pill p-2 fs-2">
          Chờ duyệt
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="tt-dangthue bg-light-success rounded-pill p-2 fs-2">
          Đang hoạt động
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill p-2 fs-2">
          Ngừng hoạt động
        </span>
      );
    } else if (status === 4) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill p-2 fs-2">
          Từ chối
        </span>
      );
    } else if (status === 5) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill p-2 fs-2">
          Đã xóa
        </span>
      );
    }
  };
  //siler ảnh
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6; // Số ảnh nhỏ hiển thị tối đa mỗi lần

  const displayedImages = Array.from({ length: itemsPerPage }).map((_, i) => {
    const index = (currentIndex + i) % roomType.images.length;
    return roomType.images[index];
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % roomType.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 6 + roomType.images.length) % roomType.images.length
    );
  };

  return (
    <>
      <div className="room-type-owner mt-3">
        <div className="row justify-content-between px-3">
          <div className="col-12 col-lg-4 col-xxl-5 row justify-content-between pb-3">
            <div className="col-12 col-lg-12 col-xxl-6 mt-3">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators-container">
                  {/* Hiển thị ảnh tuần hoàn */}
                  <button onClick={handlePrev} className="btn-prev"></button>
                  {displayedImages?.map((image, index) => {
                    const actualIndex =
                      (currentIndex + index) % roomType.images.length; // Tính chỉ số thực
                    return (
                      <img
                        key={index}
                        src={image?.link}
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={actualIndex} // Sử dụng chỉ số thực
                        alt={`Slide ${actualIndex + 1}`}
                        className="indicator mx-1"
                      />
                    );
                  })}
                  <button onClick={handleNext} className="btn-next"></button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12 col-xxl-6 row align-items-center justify-content-between flex-wrap">
              <div className="list-motel-body col-12">
                <div className="motel-item-name">
                  <a href="#" className="motel-item-link">
                    <h3 className="mb-0">
                      {roomType.name}
                    </h3>
                  </a>
                </div>
                <div className="motel-item-price">
                  <small className="me-2">Giá</small>
                  <span>{(roomType.price / 1000000).toFixed(1)} triệu/tháng</span>
                </div>
                <div className="motel-item-price">
                  <small className="me-2">Diện tích</small>
                  <span>
                    {roomType?.area} M<sup>2</sup>
                  </span>
                </div>
                <div className="motel-item-price">
                  <small className="me-2">Đánh giá</small>
                  <span>{roomType?.rating}</span>
                </div>
                <div className="motel-item-address">
                  <i className="fa-thin fa-location-dot fa-lg me-2"></i>
                    <p>{roomType?.motel?.address}</p>
                  </div>
              </div>
              <div className="d-flex justify-content-lg-around flex-wrap col-12 mt-3">
                <button
                  className="btn btn-create-notification btn-transform-y2 p-2 me-3 me-lg-0"
                  onClick={() => toggleModal("AddRoomInType", roomType.id)}
                >
                  Thêm phòng
                </button>
                <button
                  onClick={() => toggleModal("editRoomType", roomType.id)}
                  className="btn btn-create-notification btn-transform-y2 me-2 p-2"
                >
                  Sửa
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-xxl-7 row list-room-motel pb-3">
            {/* lặp vòng phòng*/}
            {roomType?.rooms?.map((room) => (
              <RowRoom id={room.id} roomNumber={room.roomNumber} totalUser={room.totalUser} status={room.status} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomtype;

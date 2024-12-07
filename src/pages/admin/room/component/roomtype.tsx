import React, { useState, useEffect } from "react";
import { GetRoomTypeDTO } from "@/services/Dto/MotelDto";
import RowRoom from "./rowRoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faDroplet } from "@fortawesome/free-solid-svg-icons";
import { GetRoomTypeByAddElicWaterApi } from "@/services/api/MotelApi";

const Roomtype = (props: {
  roomType: GetRoomTypeDTO;
  motelStatus: number;
  toggleModal: (modalName: string, param: number | any[]) => void;
}) => {
  const { roomType, motelStatus, toggleModal } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const result = await GetRoomTypeByAddElicWaterApi(roomType.id);
      setIsDisabled(result.data.length > 0);
    };
    checkStatus();
  }, [roomType.id]);

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

  const CheckStatusElicWater = async (roomTypeId: number) => {
    const res = await GetRoomTypeByAddElicWaterApi(roomTypeId);
    if (res.data.length > 0) {
      return true;
    }
    return false;
  };


  return (
    <>
      <div className="room-type-owner mt-3">
        <div className="row justify-content-between p-3">
          <div className="col-12 col-lg-4 col-xxl-5 row justify-content-between pb-3">
            <div className="col-12 col-lg-12 col-xxl-6 mt-3 list-img-room-motel row g-2 mb-3">
              {roomType?.images?.map((image, index) => (
                <div className="col-3 col-md-2 col-lg-4 g-2">
                  <img
                    key={image.id}
                    src={image.link}
                    alt={`Room Image ${index + 1}`}
                    className="rounded-img-info-model img-fluid"
                  />
                </div>
              ))}
            </div>
            <div className="col-12 col-lg-12 col-xxl-6 row align-items-center justify-content-between flex-wrap">
              <div className="list-motel-body col-12">
                <div className="motel-item-name">
                  <a href="#" className="motel-item-link">
                    <h3 className="mb-0">{roomType.name}</h3>
                  </a>
                </div>
                <div className="motel-item-price">
                  <small className="me-2">Giá</small>
                  <span>
                    {(roomType.price / 1000000).toFixed(1)} triệu/tháng
                  </span>
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
              </div>
              <div className="g-2">
                <div className="">
                  <button
                    className='btn btn-create-notification btn-transform-y2'
                    onClick={() => toggleModal('addElicWater', roomType.id)}
                    disabled={!isDisabled}
                  >
                    Xuất hoá đơn
                  </button>
                </div>
                <div className="d-flex justify-content-lg-between col-12 mt-3 px-0">
                  <button
                    className="btn btn-create-notification btn-transform-y2 p-2 me-2 me-lg-0 "
                    onClick={() => toggleModal("AddRoomInType", roomType.id)}
                  >
                    Thêm phòng
                  </button>
                  <button
                    onClick={() => toggleModal("editRoomType", roomType.id)}
                    className="btn btn-create-notification btn-transform-y2 p-2 col-lg-4"
                  >
                    Sửa
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-xxl-7 row list-room-motel pb-3">
            {/* lặp vòng phòng*/}
            {roomType?.rooms?.map((room) => (
              <RowRoom
                id={room.id}
                roomNumber={room.roomNumber}
                totalUser={room.totalUser}
                status={room.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomtype;

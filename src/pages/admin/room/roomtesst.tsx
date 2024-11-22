import { useParams } from "react-router-dom";
import "./style/room.scss";

import React, { useState } from "react";
import AddElicWater from "./component/addElicWater";
import Addroom from "./component/addroom";
import Inforoom from "./component/inforoom";
import Editroom from "./component/detailroom/editroom";
import AddUserRoom from "./component/detailroom/addUserRoom";
import Baotriroom from "./component/detailroom/baotriroom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faDroplet,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { MotelByIdDTO } from "@/services/Dto/MotelDto";
import Roomtype from "./component/roomtype";
import Addroomintype from "./component/addroomintype";
import EditRoomType from "./component/editRoomType";

export const Roomtesst = () => {
  const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
    addRoom: false,
    AddElicWater: false,
    AddRoomInType: false,
    editRoomType: false,
  });

  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const { id } = useParams();

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

  // code logic ở đây nha
  const [motel, setMotel] = useState<MotelByIdDTO>();

  const LoadData = async () => {
    try {
      const response = await getMotelById(id);
      setMotel(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch mt-3">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                  <h2 className="header-name-all">Dãy trọ: {motel?.name}</h2>
                  <p className="detail-room-text">Địa chỉ: {motel?.address}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="d-flex justify-content-start justify-content-lg-end justify-content-xl-end justify-content-xxl-end flex-wrap gap-3 mt-3">
                    <div className="">
                      <button
                        className="btn btn-create-notification btn-transform-y2"
                        onClick={() => toggleModal("addRoom")}
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="lg"
                          color="#fffffff"
                          className="icon-table-motel me-3"
                        />
                        Thêm loại phòng
                      </button>
                    </div>
                    <div className="">
                      <button
                        className="btn btn-create-notification btn-transform-y2"
                        onClick={() => toggleModal("addElicWater")}
                      >
                        <FontAwesomeIcon
                          icon={faBolt}
                          size="lg"
                          color="#fffffff"
                          className="icon-table-motel me-2"
                        />
                        <FontAwesomeIcon
                          icon={faDroplet}
                          size="lg"
                          color="#fffffff"
                          className="icon-table-motel me-2"
                        />
                        Thêm điện nước
                      </button>
                    </div>
                  </div>

                  <div className="d-flex justify-content-start mt-3 justify-content-lg-end justify-content-xl-end justify-content-xxl-end">
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
                </div>
              </div>
              <Roomtype
                // key={rooms.id}
                // room={room}
                // motelStatus={motel?.status}
                toggleModal={toggleModal}
              />

              {modalState.addRoom && (
                <Addroom motelId={id} onClose={() => toggleModal("addRoom")} />
              )}
              {modalState.addElicWater && (
                <AddElicWater onClose={() => toggleModal("addElicWater")} />
              )}
              {modalState.editRoomType && selectedRoomId && (
                <EditRoomType
                  roomId={selectedRoomId}
                  onClose={() => toggleModal("editRoomType")}
                  motelId={id}
                />
              )}
              {modalState.AddRoomInType && selectedRoomId && (
                <Addroomintype
                  roomId={selectedRoomId}
                  onClose={() => toggleModal("AddRoomInType")}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roomtesst;

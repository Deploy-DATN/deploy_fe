import {
  faCheckDouble,
  faEllipsis,
  faGears,
  faPaperPlane,
  faPenToSquare,
  faPlus,
  faSearch,
  faUserAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./style/room.scss";
import Addroom from "./component/addroom";
import Inforoom from "./component/inforoom";
import Editroom from "./component/editroom";
import AddUserRoom from "./component/addUserRoom";
import Baotriroom from "./component/baotriroom";
import { GetRoomByMotelId } from "@/services/api/MotelApi";
import { useParams } from "react-router-dom";
import { RoomDTO } from "@/services/Dto/MotelDto";
import RowTableRoom from "./component/rowTableRoom";

export const Room: React.FC = () => {
  const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
    addRoom: false,
    infoRoom: false,
    editRoom: false,
    addUserRoom: false,
    Baotriroom: false,
  });

  const { id } = useParams();

  const [dataRoom, setDataRoom] = useState<RoomDTO[]>([]);

  useEffect(() => {
    LoadData();
  }, [modalState]);

  const LoadData = async () => {
    try {
      const response = await GetRoomByMotelId(id);
      setDataRoom(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const toggleModal = (modalName: keyof typeof modalState) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="header-name-all">Quản lý phòng trọ</h2>
                </div>
                <div>
                  {" "}
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
                      Thêm phòng trọ
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="d-flex mb-4 flex-wrap">
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    Tất cả
                  </a>
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    Đang trống
                  </a>
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    đang thuê
                  </a>
                  <a
                    href="#"
                    className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
                  >
                    Bảo trì
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

              <div className="table-responsive mt-3" data-simplebar>
                <table className="test-table table table-borderless align-middle text-nowrap">
                  <thead className="">
                    <tr className=" brg-table-tro">
                      <th scope="col">ID</th>
                      <th scope="col">Diện tích</th>
                      <th scope="col">Giá</th>
                      <th scope="col">SỐ người thuê</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="table-motel">
                    {dataRoom.map((room) => (
                      <RowTableRoom room={room} />
                    ))}
                   
                  </tbody>
                </table>
              </div>
              {modalState.addRoom && (
                <Addroom motelId={id} onClose={() => toggleModal("addRoom")} />
              )}
              {modalState.infoRoom && (
                <Inforoom onClose={() => toggleModal("infoRoom")} />
              )}
              {modalState.editRoom && (
                <Editroom onClose={() => toggleModal("editRoom")} />
              )}
              {modalState.addUserRoom && (
                <AddUserRoom onClose={() => toggleModal("addUserRoom")} />
              )}
              {modalState.baotriroom && (
                <Baotriroom onClose={() => toggleModal("baotriroom")} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;

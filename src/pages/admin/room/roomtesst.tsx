import { useLocation, useParams } from "react-router-dom";
import "./style/room.scss";
import { useEffect, useState } from "react";
import AddElicWater from "./component/addElicWater";
import Addroom from "./component/addroom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { GetRoomTypeDTO } from "@/services/Dto/MotelDto";
import Roomtype from "./component/roomtype";
import Addroomintype from "./component/addroomintype";
import EditRoomType from "./component/editRoomType";
import {
  GetRoomTypeByMotelId,
} from "@/services/api/MotelApi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


export const Roomtesst = () => {


  const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
    addRoom: false,
    AddElicWater: false,
    AddRoomInType: false,
    editRoomType: false,
  });
  const { user } = useSelector((state: RootState) => state.user);

  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
  const toggleModal = (
    modalName: keyof typeof modalState,
    param: number | any[] = []
  ) => {
    setModalState((prev) => ({ ...prev, [modalName]: !prev[modalName] }));

    if (Array.isArray(param)) {
      // Xử lý khi param là mảng rooms
    } else {
      // Xử lý khi param là roomId
      setSelectedRoomId(param);
    }
  };

  // code logic ở đây nha
  const [roomType, setRoomType] = useState<GetRoomTypeDTO[]>();
  const motelStatus = 0; // Thay thế state bằng giá trị mặc định

  //lấy motelId từ params
  const { motelId } = useParams();

  //lấy name và address từ location
  const location = useLocation();
  const { name, address } = location.state || {};



  useEffect(() => {
    LoadData();
  }, [motelId]);



  const LoadData = async () => {
    try {
      const response = await GetRoomTypeByMotelId(motelId);
      if (response) setRoomType(response.data);
      console.log(roomType);
    } catch (error) {
      console.log(error);
    }
  };
  //thao tác motel (admin)


  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-stretch mt-3">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                  <h2 className="header-name-all">Dãy trọ: {name}</h2>
                  <p className="detail-room-text">Địa chỉ: {address}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="d-flex justify-content-start justify-content-lg-end justify-content-xl-end justify-content-xxl-end flex-wrap gap-3 mt-3">
                    <div className="">
                      {/* <button
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
                      </button> */}
                      {user?.role === "Owner" ? (
                        <button
                          className="btn btn-create-notification btn-transform-y2"
                          onClick={() => toggleModal("addRoom")}
                        >
                          <FontAwesomeIcon
                            icon={faPlus}
                            size="lg"
                            color="#ffffff"
                            className="icon-table-motel me-3"
                          />
                          Thêm loại phòng
                        </button>
                      ) : (
                        (user?.role === "Admin" || user?.role === "Staff") &&
                        <></>
                        )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-start mt-3 justify-content-lg-end justify-content-xl-end justify-content-xxl-end">
                    <div>
                      <div className="form-group has-search position-relative">
                        <form className="d-flex align-items-center border border-secondary-subtle ps-3 rounded">
                          <span className="fa fa-search form-control-feedback"></span>
                          <input
                            type="search"
                            className="form-control border-0"
                            placeholder="Tìm kiếm loại phòng"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {roomType &&
                roomType.map((roomType) => (
                  <Roomtype
                    roomType={roomType}
                    motelStatus={motelStatus}
                    toggleModal={toggleModal}
                  />
                ))}

              {modalState.addRoom && (
                <Addroom
                  motelId={motelId}
                  onClose={() => toggleModal("addRoom")}
                />
              )}
              {modalState.addElicWater && selectedRoomId && (
                <AddElicWater
                  roomTypeId={selectedRoomId}
                  onClose={() => toggleModal("addElicWater")}
                />
              )}
              {modalState.editRoomType && selectedRoomId && (
                <EditRoomType
                  roomTypeId={selectedRoomId.toString()}
                  onClose={() => toggleModal("editRoomType")}
                />
              )}
              {modalState.AddRoomInType && selectedRoomId && (
                <Addroomintype
                  roomTypeId={selectedRoomId}
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

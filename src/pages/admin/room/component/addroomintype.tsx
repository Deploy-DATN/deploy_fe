import { AddRoomApi } from "@/services/api/MotelApi";
import React, { useState } from "react";
import Swal from "sweetalert2";

interface Addroomintype {
  onClose: () => void;
  roomTypeId: number;
}

interface AddRoomDTO {
  roomTypeId: number;
  quantityRoom: number;
}

const Addroomintype: React.FC<Addroomintype> = ({ onClose, roomTypeId }) => {
  const [data, setData] = useState<AddRoomDTO>({
    roomTypeId: roomTypeId,
    quantityRoom: 1,
  });

  const [error, setError] = useState("");

  const validateQuantity = (value: number) => {
    if (!value) return "Vui lòng nhập số lượng phòng";
    if (value < 1 || value > 20) return "Số lượng phòng phải từ 1-20";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    setData((prev) => ({ ...prev, [name]: numValue }));
    setError(validateQuantity(numValue));
  };

  const handleSubmit = async () => {
    const errorMsg = validateQuantity(data.quantityRoom);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    var response = await AddRoomApi(data);
    if (response) {
      Swal.fire({
        icon: "success",
        title: "Thành công!",
        text: "Thêm phòng thành công",
      });
	  onClose();
      window.location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: "Thất bại!",
        text: "Thêm phòng thất bại",
      });
    }
  };
  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin">Thêm phòng</h2>
          </div>
          <form className="form-admin-modal position-relative">
            <div className="row flex-wrap">
              <div className="col-12 form-group mt-3 px-2">
                <label htmlFor="title" className="label-motel-info">
                  Số lượng phòng
                </label>
                <input
                  type="number"
                  id="title"
                  className="form-control mt-2 input-motel-info"
                  placeholder="Số phòng"
                  name="quantityRoom"
                  value={data.quantityRoom}
                  onChange={handleChange}
                />
                <div className="err-text">{error}</div>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button
                type="button"
                className="btn-trove-all btn-style btn-transform-y2"
                onClick={onClose}
              >
                Trở về
              </button>
              <button
                type="button"
                className="btn-luu-all btn-style btn-transform-y2"
                onClick={handleSubmit}
              >
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addroomintype;

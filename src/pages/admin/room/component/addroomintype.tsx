import React from "react";

interface Addroomintype {
    onClose: () => void;
    roomId: number;
  }

const Addroomintype: React.FC<Addroomintype> = ({ onClose, roomId }) => {
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
                  Số phòng
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2 input-motel-info"
                  placeholder="Số phòng"
                />
                <div className="invalid-feedback">err</div>
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

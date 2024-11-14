import React, { useState } from "react";

const AddElicWater: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isConfirm, setIsConfirm] = useState(false);

  const handSaveclick = () => {
    setIsConfirm(true);
  };
  const handleCloseClick = () => {
    setIsConfirm(false);
  };

  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative w50resposi">
          <div className="">
            <h2 className="h2-modal-admin">Thêm số điện, nước</h2>
          </div>
          <form className="form-admin-modal position-relative">
            <div className="d-flex flex-wrap justify-content-center">
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>{" "}
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>{" "}
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>{" "}
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>{" "}
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
              <a
                href="#"
                className="btn btn-filter btn-sm px-3 py-2 mx-3 mb-3 btn-transform-y2"
              >
                Phòng 1
              </a>
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="description" className="">
                  Số điện
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Số điện"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="description" className="">
                  Số nước
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Số nước"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="description" className="">
                  Chi phí khác
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Chi phi khác"
                />
              </div>
            </div>
            <div></div>
            {isConfirm && (
              <div className="form-group mt-3">
                <div className="text-info-bill">
                  <p>
                    Phòng số: <span> 12</span>
                  </p>
                  <p>
                    Người thuê: <span> Tô Thanh</span>
                  </p>
                </div>
                <div className="border-bottom-info-bill mt-3"></div>
                <div className="text-info-bill mt-2">
                  <p className="d-flex justify-content-between">
                    Tiền điện: <span> 123</span>{" "}
                  </p>
                  <p className="d-flex justify-content-between">
                    Tiền nước: <span> 123</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    Tiền thuê trọ: <span> 123</span>
                  </p>
                </div>
                <div className="border-bottom-info-bill mt-3"></div>
                <div className="text-info-bill mt-2">
                  <p className="d-flex justify-content-between">
                    Chi phi khác: <span> 123</span>
                  </p>
                </div>
                <div className="border-bottom-info-bill mt-3"></div>
                <div className="text-info-bill mt-2">
                  <p className="d-flex justify-content-between">
                    Thành tiền: <span> 123</span>{" "}
                  </p>
                </div>
              </div>
            )}

            {!isConfirm ? (
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
                  onClick={handSaveclick}
                >
                  Lưu
                </button>
              </div>
            ) : (
                <div className="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  className="btn-trove-all btn-style btn-transform-y2"
                  onClick={!isConfirm ? onClose : handleCloseClick}                >
                  Trở về
                </button>
                <button
                  type="button"
                  className="btn-luu-all btn-style btn-transform-y2"
                  
                >
                  Xác nhận
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddElicWater;

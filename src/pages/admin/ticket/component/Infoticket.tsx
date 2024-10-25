import React from "react";
import img from "src/pages/admin/assets/images/products/s5.jpg"

const Infoticket: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
        <div className="">
            <h2 className="h2-modal-admin">Chi tiết</h2>
            {/* <button
              className="btn-close-modal position-absolute"
              onClick={onClose}
            >
              ×
            </button> */}
          </div>
          <form className="form-admin-modal">
            <div className="form-group mt-3">
              <label htmlFor="title" className="">
                Nội dung
              </label>
              <input
                type="text"
                id="title"
                className="form-control mt-2"
                placeholder="Nội dung"
              />
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Người yêu cầu
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Người yêu cầu"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Người tiếp nhận
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Người tiếp nhận"
                />
              </div>
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Ngày tạo
                </label>
                <input
                  type="date"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Ngày tạo"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Tiến trình
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Tiến trình"
                />
              </div>
            </div>
            <div className="col-12 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Hình ảnh
                  </label>
                  <div className="row flex-wrap">
                      <div
                        className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3 position-relative"
                      >
                        <img
                          src={img}
                          className="rounded-img-info-model img-fluid"
                          alt="Không có ảnh"
                        />
                      </div>
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
                Xác nhận
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Infoticket;

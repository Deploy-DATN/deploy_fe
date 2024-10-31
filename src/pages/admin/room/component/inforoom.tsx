import React from 'react'

const Inforoom: React.FC<{ onClose: () => void }> = ({ onClose }) => {

  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
        <div className=''>
          <h2 className='h2-modal-admin'>Chi tiết</h2>
        </div>
          <form className="form-admin-modal position-relative">
          <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Người thuê
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Bạn cùng phòng
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Trần Văn B"
                />
              </div>
            </div>
          <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Số phòng
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="123"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Giá
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="123,123,123"
                />
              </div>
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Số điện
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="123"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Số nước
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="12"
                />
              </div>
            </div>
            <div className="row form-group mt-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Khu vực
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="123123"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="">
                  Trạng thái
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2 span-baotri-room-motel"
                  placeholder="Bảo trì"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                type="button"
                className="btn-trove-all btn-style btn-transform-y2 w-75"
                onClick={onClose}
              >
                Trở về
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Inforoom
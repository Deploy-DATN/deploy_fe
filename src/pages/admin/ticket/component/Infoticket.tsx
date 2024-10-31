import React from "react";

import { Data } from "@/services/Dto/ticketDto";

interface Props {
  data: Data;
  onClose: () => void;
}

const Infoticket: React.FC<Props> = ({ data, onClose }) => {
  console.log(data);
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
                value={data.content}
                disabled
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
                  value={data.userName}
                  disabled
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
                  value={data.receiver ? data.receiver :"Chưa có"}
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
                  value={new Date().toISOString().split('T')[0]}
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
                  value={data.status === 1 ? "Tiếp nhận" : data.status === 2 ? "Đang sử lý" : data.status === 3 ? "Hoàn thành" : "Chưa có"}
                />
              </div>
            </div>
            <div className="col-12 form-group mt-3 px-2">
              <div className="row">
                <div className="col-8">
                  <img src="https://placehold.co/250x150" className="w-100 h-100" alt="" />
                </div>
                <div className="col-4">
                  <div className="row">
                    <img src="https://placehold.co/250x150" className="w-100 h-100" alt="" />
                  </div>
                  <div className="row mt-3">
                    <img src="https://placehold.co/250x150" className="w-100 h-100" alt="" />
                  </div>
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

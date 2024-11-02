import logo from "@/assets/ThoStay.svg";

export const InfoBill: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin">Hóa đơn</h2>
          </div>
          <form className="form-admin-modal position-relative">
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="text-nowrap logo-img ms-0 ms-md-1 d-flex">
                <img src={logo} height="40" alt="" />
                <h1>Thỏ Stay</h1>
              </div>
            </div>
            <div className="form-group mt-3">
              <div className="text-info-bill">
                <p>
                  Địa chỉ: <span> 123 Phan chu trinh ,....</span>{" "}
                </p>
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
                Xuất hóa đơn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoBill;

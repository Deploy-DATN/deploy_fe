
const DeleteAccount: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin pt-3 pb-3">Xóa tài khoản</h2>
          </div>
          <form className="form-admin-modal position-relative mt-3">
          <div className=" text-center">
              <h2 className="h2-modal-duyet">
                Bạn muốn xóa tài khoản này?
              </h2>
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
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;

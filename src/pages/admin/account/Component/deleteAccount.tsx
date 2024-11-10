import React from "react";
import { deleteUser } from "@/services/api/userApi";
interface DeleteAccountProps {
  userId: number;
  onClose: () => void;
  onSubmit: () => void;
}


const DeleteAccount: React.FC<DeleteAccountProps> = ({ userId, onClose, onSubmit }) => {
  const onDelete = async () => {
    try {
      const response = await deleteUser(userId);
      console.log(response);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      // Notify the parent component or refresh data, if needed
      window.alert("Tài khoản đã được xóa thành công.");
      onClose();
      onSubmit();
    } catch (error) {
      alert("Đã xảy ra lỗi khi xóa tài khoản.");
      console.error(error);
    }
  };
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
                onClick={onDelete}
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

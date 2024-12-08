import { DeleteUserRoomApi } from '@/services/api/MotelApi';
import React from 'react'
import Swal from 'sweetalert2';

interface DeleteuseroomProps {
  onClose: () => void;
  roomId: number;
  userId: number;
}

const Deleteuseroom: React.FC<DeleteuseroomProps> = ({ onClose, roomId, userId }) => {

  const handleDeleteUserRoom = async () => {
    const response = await DeleteUserRoomApi(roomId, userId);
    if (response.code === 200) {

      onClose();
      location.reload();
      Swal.fire({
				icon: "success",
				title: "Thành công",
				text: "Xóa người thuê thành công!",
			  });
    }
  };

    return (
<>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative p-4">
        <div >
              <h2 className="h2-modal-duyet text-center">
                Bạn có chắc chắn muốn xóa người (tên) thuê này khỏi phòng?
              </h2>
            </div>
            <form className="form-duyet-modal">
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
                  onClick={() => handleDeleteUserRoom()}
                >
                  Xóa
                </button>
              </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default Deleteuseroom
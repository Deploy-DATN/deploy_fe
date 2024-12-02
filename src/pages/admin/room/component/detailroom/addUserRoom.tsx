import React, { useState } from "react";

interface AddUserRoomProps {
  onClose: () => void;
  roomId: number;
}

const AddUserRoom: React.FC<AddUserRoomProps> = ({ onClose, roomId }) => {
  const [values, setValues] = useState({
    phone: "",
    roomId: roomId,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValues({ ...values, [e.target.name]: inputValue });
    console.log(inputValue);
  };
  const handleSubmit = async () => {};

  return (
    <>
      <div className="modal-overlay-admin add-user-room">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin">Thêm người thuê</h2>
          </div>
          <form className="form-admin-modal">
            <div className="row form-group mt-3">
              <div className="col-12 position-relative">
                <label htmlFor="description" className="">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Họ và tên"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {values.phone.length > 0 && (
                  <div className="dropdown-list-add-user-room">
                    <div className="list-add-user-room">
                      <div className="item-add-user-room d-flex justify-content-between align-items-center">
                        <div
                          className="nav-link nav-icon-hover d-flex"
                          id="drop2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
                            alt=""
                            width="35"
                            height="35"
                            className="rounded-circle"
                          />
                          <div className="ps-2">
                            <h5 className="mb-0">Tên người dùng</h5>
                            <h6 className="mb-0">Email người dùng</h6>
                          </div>
                        </div>
                        <div>
                          <button>
                            <i className="fa-regular fa-user-plus fa-lg"></i>
                          </button>
                        </div>
                      </div>
					  <div className="item-add-user-room d-flex justify-content-between align-items-center">
                        <div
                          className="nav-link nav-icon-hover d-flex"
                          id="drop2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
                            alt=""
                            width="35"
                            height="35"
                            className="rounded-circle"
                          />
                          <div className="ps-2">
                            <h5 className="mb-0">Tên người dùng</h5>
                            <h6 className="mb-0">Email người dùng</h6>
                          </div>
                        </div>
                        <div>
                          <button>
                            <i className="fa-regular fa-user-plus fa-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                type="button"
                className="btn-trove-all btn-style btn-transform-y2"
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

export default AddUserRoom;

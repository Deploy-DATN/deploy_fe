import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const EditAccount: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };
  const options = [
    { value: "admin", label: "Admin" },
    { value: "chutro", label: "Chủ trọ" },
    { value: "nhanvien", label: "Nhân viên" },
  ];

  const customStyles: StylesConfig<{ value: string; label: string }> = {
    control: (provided) => ({
      ...provided,
      border: '1px solid #e7ecf0',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#e7ecf0', 
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#298B90' : undefined,
      color: state.isFocused ? 'white' : 'black',
    }),
  };
  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin pt-3 pb-5">Thêm tài khoản</h2>
            {/* <button
              className="btn-close-modal position-absolute"
              onClick={onClose}
            >
              ×
            </button> */}
          </div>
          <form className="form-admin-modal position-relative">
          <div className="icon-Camera-AddAccount rounded-circle position-absolute">
            {selectedImage ? (
                <img
                    src={selectedImage}
                    alt="Selected"
                    className="icon-table-motel"
                    style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                />
            ) : (
                <FontAwesomeIcon icon={faCamera} color="#fffffff" size="3x" className="icon-table-motel" />
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }} // Ẩn input file
                id="file-input"
            />
            <label htmlFor="file-input" style={{ cursor: 'pointer', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
        </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="description" className="">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="description" className="">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="description" className="">
                  Email
                </label>
                <input
                  type="email"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Email"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="description" className="">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="description" className="">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Địa chỉ"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="description" className="">
                  Quyền
                </label>
                <Select
                  id="role"
                  className="mt-2"
                  options={options}
                  styles={customStyles}
                  defaultValue={options[2]}
                  placeholder="Chọn vai trò"
                />
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
                Lưu
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAccount;

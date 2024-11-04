import React, { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { addUser } from "@/services/api/userApi";
interface AddAccountProps {
  onClose: () => void;
  onSubmit: () => void;
}

const AddAccount: React.FC<AddAccountProps> = ({ onClose, onSubmit }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const options = [
    { value: "admin", label: "Admin" },
    { value: "chutro", label: "Chủ trọ" },
    { value: "nhanvien", label: "Nhân viên" },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    address: "",
    role: options[2], // Set default role as "Nhân viên"
    avatar: "",
  });

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      //create base64 string from image
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, avatar: base64String });
        setSelectedImage(base64String);
      };
      reader.readAsDataURL(file);
      
    }
    
  };



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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (selectedOption: { value: string; label: string }) => {
    setFormData({ ...formData, role: selectedOption });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Prepare the data for the API call
    const data: any = {
      fullName: formData.fullName,
      phone: formData.phoneNumber, // Match the property name
      email: formData.email,
      password: formData.password, // This is probably not in the User interface; consider where you use it.
      avatar: selectedImage || '', // Use empty string if no image is selected
      role: formData.role.value,
    };

    try {
      // Make the API call
      const response = await addUser(data);
      console.log('User added successfully:', response.data);
     
      if(response.data.code === 200){
        onClose();
        window.alert("Cập nhật tài khoản thành công");
        onSubmit();
      }
      if(response.data.code === 404){
        window.alert("Cập nhật tài khoản thất bại: " + response.data.message);
        console.log(response.data.message);
      }
      // Optionally, handle success (like resetting the form, showing a success message, etc.)
      
    } catch (error) {
      console.error('Error adding user:', error);
      window.alert("Cập nhật tài khoản thất bại" + error); 
      // Optionally, handle the error (showing an error message, etc.)
    }
  };

  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin pt-3 pb-5">Thêm tài khoản</h2>
          </div>
          <form className="form-admin-modal position-relative" onSubmit={handleSubmit} >
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
                style={{ display: 'none' }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ cursor: 'pointer', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="fullName">Họ và tên</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control mt-2"
                  placeholder="Họ và tên"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="phoneNumber">Số điện thoại</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control mt-2"
                  placeholder="Số điện thoại"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control mt-2"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  className="form-control mt-2"
                  placeholder="Mật khẩu"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  className="form-control mt-2"
                  placeholder="Địa chỉ"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="role">Quyền</label>
                <Select
                  id="role"
                  className="mt-2"
                  options={options}
                  styles={customStyles}
                  value={formData.role}
                  onChange={(e: any) => handleRoleChange(e)}
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
                type="submit" // Change to submit type
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

export default AddAccount;

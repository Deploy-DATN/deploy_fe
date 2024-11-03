import React, { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { getUserById } from "@/services/api/userApi";
import { updateUser } from "@/services/api/userApi";
import { set } from "react-hook-form";
interface EditAccountProps {
  userId: number;
  onClose: () => void;
}

interface User {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  avatar: string | null;
  timeCreated: string;
  status: boolean;
  role: string;
}


const EditAccount: React.FC<EditAccountProps> = ({ userId, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    phone: "",
    email: "",
    role: "", // Set default role as "Nhân viên"
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  //get data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserById(userId);
        console.log(res);
        if (res.data.code === 200) {
          setUserData(res.data.data);
          for (let key in res.data.data) {
            console.log(key);
            setFormData((prev) => ({
              ...prev,
              [key]: res.data.data[key],
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("dữ liệu đây nè:", formData);

    // Prepare the data for the API call
    const data: any = {
      fullName: formData.fullName,
      phone: formData.phone, // Match the property name
      email: formData.email,
      avatar: selectedImage || '', // Use empty string if no image is selected
      role: formData.role,
    };

    try {
      // Make the API call
      //set data 

     
      const response = await updateUser(userId, data);
     
      console.log('User added successfully:', response.data);
      if(response.data.code === 200){
        onClose();
        window.alert("Cập nhật tài khoản thành công");
      }
      if(response.data.code === 404){
        window.alert("Cập nhật tài khoản thất bại: " + response.data.message);
        console.log(response.data.message);
      }
      // Optionally, handle success (like resetting the form, showing a success message, etc.)
    } catch (error) {
      //shoe error
      window.alert("Cập nhật tài khoản thất bại" + error);  
    }
  };


  const handleRoleChange = (selectedOption: { value: string; label: string }) => {
    setFormData({ ...formData, role: selectedOption.value });
  };

  const options = [
    { value: "Admin", label: "Admin" },
    { value: "chutro", label: "Chủ trọ" },
    { value: "nhanvien", label: "Nhân viên" },
  ];

  const handleTextChange = (key : any, value: any) => {
    console.log(key, value);
    setFormData({ ...formData, [key]: value });
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
          <form className="form-admin-modal position-relative" onSubmit={handleSubmit}>
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
                  defaultValue={userData?.fullName}
                  onChange={(e) => handleTextChange("fullName", e.target.value)}
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
                  defaultValue={userData?.phone}
                  onChange={(e) => handleTextChange("phone", e.target.value)}
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
                  defaultValue={userData?.email}
                  onChange={(e) => handleTextChange("email", e.target.value)}
                />
              </div>
              {/* <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="description" className="">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Mật khẩu"

                />
              </div> */}
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
                  onChange={(e) => handleTextChange("address", e.target.value)}
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
                  value={options.find((option) => option.value === userData?.role)}
                  placeholder="Chọn vai trò"
                  onChange={(e: any) => handleRoleChange(e)}

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
                type="submit"
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

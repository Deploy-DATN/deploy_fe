import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/stylemotel.scss";
import {
  faCamera,
  faFile,
  faFileAlt,
  faFileExcel,
  faFilePdf,
  faFileWord,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccountApi } from "@/services/api/authApi";
import { AddMotelAndRoom } from "@/services/api/MotelApi";
import { AddMotelAndRoomDTO } from "@/services/Dto/MotelDto";

export const AddMotelOwner = () => {
  //rút gọn giao diện
  const [isMotelInfoVisible, setIsMotelInfoVisible] = useState(true);

  const showMotelInfo = () => setIsMotelInfoVisible(true);
  const showPriceInfo = () => setIsMotelInfoVisible(false);
  //trở lại trang trước đó
  const navigate = useNavigate();

  const [values, setValues] = useState<AddMotelAndRoomDTO>({
    name: "",
    address: "",
    area: "",
    priceRoom: "",
    priceElectric: "",
    priceWater: "",
    priceOther: "",
    totalRoom: "",
    userId: "",
  });

  const [formData, setFormData] = useState(new FormData());
  //dịch vụ ở đây nha
  const [services, setServices] = useState([
    { id: 1, name: "", price: "", description: "" },
  ]);
  const addService = () => {
    const newService = {
      id: services.length + 1,
      name: "",
      price: "",
      description: "",
    };
    setServices((prev) => [...prev, newService]);
  };
  const removeService = (id: number) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };
  // Thêm state errors ở đầu component
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getUser = async () => {
      var user = await getAccountApi();
      setValues({ ...values, userId: user.data.data.id });
    };
    getUser();
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      Array.from(event.target.files).forEach((file) => {
        // Thêm file vào formData với key là 'imageFile'
        formData.append("imageFile", file);
        const imageUrl = URL.createObjectURL(file);
        setImages((prevImages) => [...prevImages, imageUrl]);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const [files, setFiles] = useState<
    { name: string; url: string; type: string }[]
  >([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      Array.from(event.target.files).forEach((file) => {
        // Thêm file vào formData với key là 'fileTerm'
        formData.append("fileTerm", file);
        const fileUrl = URL.createObjectURL(file);
        setFiles((prevFiles) => [
          ...prevFiles,
          { name: file.name, url: fileUrl, type: file.type },
        ]);
      });
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Thêm hàm validate
  const validateField = (name: string, value: string) => {
    if (!value || value.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        [name]: "Trường này không được để trống",
      }));
      return false;
    }

    if (name === "priceElectric" || name === "priceWater") {
      if (isNaN(Number(value))) {
        setErrors((prev) => ({ ...prev, [name]: "Vui lòng nhập số" }));
        return false;
      }
      if (Number(value) < 1000) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Giá trị phải lớn hơn hoặc bằng 1.000",
        }));
        return false;
      }
    }

    if (name === "area" || name === "totalRoom") {
      if (isNaN(Number(value))) {
        setErrors((prev) => ({ ...prev, [name]: "Vui lòng nhập số" }));
        return false;
      }
      if (Number(value) <= 0) {
        setErrors((prev) => ({ ...prev, [name]: "Giá trị phải lớn hơn 0" }));
        return false;
      }
    }
    if (name === "priceRoom") {
      if (isNaN(Number(value))) {
        setErrors((prev) => ({ ...prev, [name]: "Vui lòng nhập giá phòng" }));
        return false;
      }
      if (Number(value) <= 100000) {
        setErrors((prev) => ({
          ...prev,
          [name]: "Giá trị phải lớn hơn 100.000",
        }));
        return false;
      }
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
    return true;
  };

  // Cập nhật onChange handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value = e.target.value;
    setValues({ ...values, [field]: value });
    validateField(field, value);
  };

  const handleSubmit = async () => {
    try {
      // Reset errors
      setErrors({});

      // Validate tất cả các trường
      const fields = {
        name: values.name || "",
        address: values.address || "",
        area: values.area || "",
        priceRoom: values.priceRoom || "",
        priceElectric: values.priceElectric || "",
        priceWater: values.priceWater || "",
        totalRoom: values.totalRoom || "",
      };
      let isValid = true;
      Object.entries(fields).forEach(([key, value]) => {
        if (!validateField(key, value)) {
          isValid = false;
        }
      });

      // Kiểm tra hình ảnh
      if (images.length === 0) {
        setErrors((prev) => ({
          ...prev,
          images: "Vui lòng tải lên ít nhất 1 hình ảnh",
        }));
        isValid = false;
      }
      if (files.length === 0) {
        setErrors((prev) => ({
          ...prev,
          files: "Vui lòng tải lên ít nhất 1 file",
        }));
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      formData.append("name", values.name || "");
      formData.append("address", values.address || "");
      formData.append("area", values.area.toString());
      formData.append("priceRoom", values.priceRoom.toString());
      formData.append("priceElectric", values.priceElectric.toString());
      formData.append("priceWater", values.priceWater.toString());
      formData.append("priceOther", values.priceOther.toString());
      formData.append("totalRoom", values.totalRoom.toString());
      formData.append("userId", values.userId);

      const response = await AddMotelAndRoom(formData);

      if (response.code === 200) {
        await alert("Thêm phòng trọ thành công");
        navigate("/admin/motel");
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Có lỗi xảy ra");
    }
  };

  return (
    <div className="container-fluid-add-motel">
      <div className="row align-items-stretch px-0">
        <div className="w-100 text-center bg-color-theme-thostay">
          <h2 className="">Thêm dãy trọ</h2>
        </div>
        <div className="card w-100">
          <div className="card-body p-4 info-motel">
            <form className="form-motel-info">
              <div className="mt-2">
                <h4 className="h4-add-motel">Dãy trọ</h4>
              </div>
              <div className="row flex-wrap">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Tên dãy trọ
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Tên dãy trọ"
                    value={values.name}
                    onChange={(e) => handleChange(e, "name")}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mt-2 input-motel-info"
                    placeholder="Địa chỉ"
                    value={values.address}
                    onChange={(e) => handleChange(e, "address")}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
				<div className="mt-3">
                <h4 className="h4-add-motel">Dịch vụ dãy trọ</h4>
              </div>
				<div className="d-flex flex-wrap">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="row flex-wrap col-12 mt-2 px-2"
                  >
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2">
                      <label className="label-motel-info">Tên dịch vụ</label>
                      <input
                        type="text"
                        className="form-control mt-2 input-motel-info"
                        placeholder="Tên dịch vụ"
                        value={service.name}
                        onChange={(e) =>
                          setServices((prev) =>
                            prev.map((s) =>
                              s.id === service.id
                                ? { ...s, name: e.target.value }
                                : s
                            )
                          )
                        }
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-2">
                      <label className="label-motel-info">Giá dịch vụ</label>
                      <input
                        type="text"
                        className="form-control mt-2 input-motel-info"
                        placeholder="Giá dịch vụ"
                        value={service.price}
                        onChange={(e) =>
                          setServices((prev) =>
                            prev.map((s) =>
                              s.id === service.id
                                ? { ...s, price: e.target.value }
                                : s
                            )
                          )
                        }
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-2">
                      <label className="label-motel-info">Mô tả dịch vụ</label>
                      <input
                        type="text"
                        className="form-control mt-2 input-motel-info"
                        placeholder="Mô tả dịch vụ"
                        value={service.description}
                        onChange={(e) =>
                          setServices((prev) =>
                            prev.map((s) =>
                              s.id === service.id
                                ? { ...s, description: e.target.value }
                                : s
                            )
                          )
                        }
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-2 d-flex justify-content-lg-around align-items-lg-end">
                        <button
                          type="button"
                          className="btn btn-transform-y2 btn-xoa-add-motel mt-3"
                          onClick={() => removeService(service.id)}
                        >
                          Xóa
                        </button>
                    </div>
                  </div>
                ))}
                <button
                  className="btn btn-transform-y2 btn-luu-all mt-3"
                  onClick={addService}
                  type="button"
                >
                  Thêm dịch vụ
                </button>
				</div>
                <div className="col-12 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Mô tả
                  </label>
                  <textarea
                    className="form-control mt-2 input-motel-info"
                    placeholder="Mô tả dãy trọ"
                  />
                    <div className="invalid-feedback">
                      errer
                    </div>
                </div>
                <div className="mt-4">
                  <h4 className="h4-add-motel">Phòng trọ</h4>
                </div>
                <div className="row flex-wrap">
				<div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Tên phòng
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Tên phòng"
                    />
                      <div className="invalid-feedback">errer</div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Diện tích phòng (m2)
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Diện tích"
                      value={values.area}
                      onChange={(e) => handleChange(e, "area")}
                    />
                    {errors.area && (
                      <div className="invalid-feedback">{errors.area}</div>
                    )}
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Giá phòng
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Giá phòng"
                      value={values.priceRoom}
                      onChange={(e) => handleChange(e, "priceRoom")}
                    />
                    {errors.priceRoom && (
                      <div className="invalid-feedback">{errors.priceRoom}</div>
                    )}
                  </div>
				  <div className="col-12 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Mô tả phòng
                  </label>
                  <textarea
                    className="form-control mt-2 input-motel-info"
                    placeholder="Mô tả phòng trọ"
                  />
                    <div className="invalid-feedback">
                      errer
                    </div>
                </div>
				  <div className="row">
                  <div className="col-12 form-group mt-3">
                    <label htmlFor="title" className="label-motel-info">
                      Hình ảnh
                    </label>
                    <div className="row flex-wrap mt-2">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className="col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2  px-1 position-relative"
                        >
                          <img
                            src={image}
                            className="rounded-img-info-model img-fluid"
                            alt="Không có ảnh"
                          />
                          <button
                            type="button"
                            className="btn-close-img-add-motel position-absolute text-end"
                            onClick={() => removeImage(index)}
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                        </div>
                      ))}
                      <div className="px-2 col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                        <div className="file-input-wrapper ">
                          <label
                            htmlFor="file-upload"
                            className="file-upload-label w-100"
                          >
                            <FontAwesomeIcon
                              icon={faCamera}
                              className="camera-icon"
                            />
                            <input
                              type="file"
                              id="file-upload"
                              multiple
                              className="file-upload-input"
                              onChange={handleImageUpload}
                              accept="image/*"
                            />
                          </label>
                        </div>
                      </div>
                      {errors.images && (
                        <div className="invalid-feedback">{errors.images}</div>
                      )}
                    </div>
                  </div>
                </div>
                </div>
                <div className="mx-auto col-12 col-md-12 col-lg-8 col-xl-6 col-xxl-6 mt-4">
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="button"
                      className="btn-style btn-trove-all btn-transform-y2"
                      onClick={() => navigate(-1)}
                    >
                      Trở về
                    </button>
                    <button
                      type="button"
                      className="btn-style btn-luu-all btn-transform-y2"
                      onClick={handleSubmit}
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddMotelOwner;

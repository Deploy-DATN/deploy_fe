
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {  useState } from "react";

const Addroom: React.FC<{ motelId: string | undefined, onClose: () => void }> = ({ motelId, onClose }) => {

  // Thêm state errors ở đầu component
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Thêm hàm validate
	const validateField = (name: string, value: string) => {
		if (!value || value.trim() === '') {
			setErrors((prev) => ({ ...prev, [name]: 'Trường này không được để trống' }));
			return false;
		}

		if (name === 'price') {
			if (isNaN(Number(value))) {
				setErrors((prev) => ({ ...prev, [name]: 'Vui lòng nhập giá' }));
				return false;
			}
			if (Number(value) < 100000) {
				setErrors((prev) => ({ ...prev, [name]: 'Giá trị phải lớn hơn hoặc bằng 100.000' }));
				return false;
			}
		}

		if (name === 'area') {
			if (isNaN(Number(value))) {
				setErrors((prev) => ({ ...prev, [name]: 'Vui lòng nhập diện tích' }));
				return false;
			}
			if (Number(value) <= 0) {
				setErrors((prev) => ({ ...prev, [name]: 'Giá trị phải lớn hơn 0' }));
				return false;
			}
		}
		if (name === 'quantityRoom') {
			if (isNaN(Number(value))) {
				setErrors((prev) => ({ ...prev, [name]: 'Vui lòng nhập số lượng phòng' }));
				return false;
			}
			if (Number(value) < 1 || Number(value) > 10) {
				setErrors((prev) => ({ ...prev, [name]: 'Giá trị phải từ 1 đến 10' }));
				return false;
			}
		}

		setErrors((prev) => ({ ...prev, [name]: '' }));
		return true;
	};

  // Cập nhật onChange handler
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
		const value = e.target.value;
		setRoom({ ...room, [field]: value });
		validateField(field, value);
	};


  const handleSubmit = async () => {
    try {

      // Reset errors
			setErrors({});

			// Validate tất cả các trường
			const fields = {
				quantityRoom: room.quantityRoom || '',
				area: room.area || '',
				price: room.price || '',
			};


			let isValid = true;
			Object.entries(fields).forEach(([key, value]) => {
				if (!validateField(key, value)) {
					isValid = false;
				}
			});

			if (!isValid) return;

      const response = await AddRoom(room);
      if (response.code === 200) {
        await alert('Thêm phòng thành công');
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [images, setImages] = useState<string[]>([]);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin">Thêm phòng</h2>
          </div>
          <form className="form-admin-modal position-relative">
          <div className="row flex-wrap">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
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
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Số phòng
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Số phòng"
                    />
                    {errors.priceRoom && (
                      <div className="invalid-feedback">{errors.priceRoom}</div>
                    )}
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Diện tích phòng (m2)
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Diện tích"
                    />
                    {errors.area && (
                      <div className="invalid-feedback">{errors.area}</div>
                    )}
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3 px-2">
                    <label htmlFor="title" className="label-motel-info">
                      Giá phòng
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control mt-2 input-motel-info"
                      placeholder="Giá phòng"
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
                    <div className="invalid-feedback">errer</div>
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
                            className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3 px-1 position-relative"
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
                        <div className="px-2 col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
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
                          <div className="invalid-feedback">
                            {errors.images}
                          </div>
                        )}
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
                onClick={handleSubmit}
              >
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addroom;

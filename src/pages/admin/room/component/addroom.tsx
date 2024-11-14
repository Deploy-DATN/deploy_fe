import { AddRoom } from "@/services/api/MotelApi";
import { AddRoomDTO } from "@/services/Dto/MotelDto";
import React, { useState } from "react";

const Addroom: React.FC<{ motelId: string | undefined, onClose: () => void }> = ({ motelId, onClose }) => {

  const [room, setRoom] = useState<AddRoomDTO>({
    motelId: motelId || '',
    quantityRoom: '',
    area: '',
    price: ''
  });

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

  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
          <div className="">
            <h2 className="h2-modal-admin">Thêm phòng</h2>
          </div>
          <form className="form-admin-modal position-relative">
            <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="description" className="">
                  Số lượng phòng
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Số lượng phòng"
                  value={room.quantityRoom}
                  onChange={(e) => handleChange(e, 'quantityRoom')}
                />
                {errors.quantityRoom && <p className="text-danger">{errors.quantityRoom}</p>}
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="description" className="">
                  Diện tích
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Diện tích"
                  value={room.area}
                  onChange={(e) => handleChange(e, 'area')}
                />
                {errors.area && <p className="text-danger">{errors.area}</p>}
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="description" className="">
                Giá
              </label>
              <input
                type="text"
                id="title"
                className="form-control mt-2"
                placeholder="Giá"
                value={room.price}
                onChange={(e) => handleChange(e, 'price')}
              />
              {errors.price && <p className="text-danger">{errors.price}</p>}
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

import { EditRoomApi, GetEditRoomById } from '@/services/api/MotelApi';
import { EditRoomByIdDTO, MotelRoomDTO } from '@/services/Dto/MotelDto';
import React, { useEffect, useState } from 'react'

interface EditRoomProps {
  onClose: () => void;
  motelId: string | undefined;
  roomId: number;
}

const Editroom: React.FC<EditRoomProps> = ({ onClose, motelId, roomId }) => {

  const [room, setRoom] = useState<MotelRoomDTO>();
  const [formData, setFormData] = useState({
    roomNumber: '',
    area: '',
    price: '',
    consumptionElectric: '',
    consumptionWater: ''
  });

  useEffect(() => {
    LoadData();
  }, []);

  const LoadData = async () => {
    var response = await GetEditRoomById(roomId);
    setFormData({
      roomNumber: response.data.roomNumber.toString() || '',
      area: response.data.area.toString() || '',
      price: response.data.price.toString() || '',
      consumptionElectric: response.data.consumptions[0]?.electricity.toString() || '',
      consumptionWater: response.data.consumptions[0]?.water.toString() || ''
    });
  };

  const handleSubmit = async () => {
    try {

      const data: EditRoomByIdDTO = {
        roomNumber: parseInt(formData.roomNumber),
        area: parseInt(formData.area),
        price: parseInt(formData.price),
        consumptionElectric: parseInt(formData.consumptionElectric),
        consumptionWater: parseInt(formData.consumptionWater)
      }
      const response = await EditRoomApi(data, roomId);
      
      if (response.code === 200) {
        alert('Cập nhật phòng thành công');
        onClose();
      }
    } catch (error) {
      alert('Có lỗi xảy ra khi cập nhật phòng');
    }
  };

  return (
    <>
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
        <div className=''>
          <h2 className='h2-modal-admin'>Sửa phòng trọ</h2>
        </div>
        <form className="form-admin-modal position-relative">
        <div className="row form-group mt-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="description" className="">
                  Số phòng
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Số phòng"
                  value={formData.roomNumber}
                  onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                />
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
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <label htmlFor="description" className="">
                  Số điện
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Số điện"
                  value={formData.consumptionElectric}
                  onChange={(e) => setFormData({ ...formData, consumptionElectric: e.target.value })}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="description" className="">
                  Số nước
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Số nước"
                  value={formData.consumptionWater}
                  onChange={(e) => setFormData({ ...formData, consumptionWater: e.target.value })}
                />
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
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
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
                onClick={() => handleSubmit()}
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

export default Editroom
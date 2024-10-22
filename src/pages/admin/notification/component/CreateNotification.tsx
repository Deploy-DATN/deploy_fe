import React from 'react'
import 'src/pages/admin/notification/notification.scss'

const CreateNotification: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
      <div className="modal-overlay-notifi-create">
        <div className="modal-content-notifi-create position-relative">
            <div className=''>
            <h2 className='h2-modal-notifi-create'>Thêm thông báo</h2>
            <button className="close-btn position-absolute" onClick={onClose}>×</button>
            </div>
          <form className='form-create-notifi'>
          <div className="form-group mt-3">
            <label htmlFor="title" className=''>Tiêu đề</label>
            <input type="text" id="title" className="form-control mt-2" placeholder="Cấp phép nhà trọ" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description" className=''>Mô tả</label>
            <textarea
              id="description"
              className="form-control mt-2"
              placeholder="Nhà trọ của bạn đã được duyệt, xem thêm thông tin chi tiết."
              rows={3}
            />
          </div>
            <div className='d-flex justify-content-between mt-4'>
            <button type="button" className='btn-create-notifi btn-create-notifi-trove btn-transform-y2' onClick={onClose}>Trờ về</button>
            <button type="button" className='btn-create-notifi btn-create-notifi-luu btn-transform-y2' >Lưu</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default CreateNotification 
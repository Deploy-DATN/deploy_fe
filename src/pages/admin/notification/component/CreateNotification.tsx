import React from 'react'
import 'src/pages/admin/notification/notification.scss'

const CreateNotification: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
      <div className="modal-overlay-admin">
        <div className="modal-content-admin position-relative">
            <div className=''>
            <h2 className='h2-modal-admin'>Thêm thông báo</h2>
            <button className="btn-close-modal position-absolute" onClick={onClose}>×</button>
            </div>
          <form className='form-admin-modal'>
          <div className="form-group mt-3">
            <label htmlFor="title" className=''>Tiêu đề</label>
            <input type="text" id="title" className="form-control mt-2" placeholder="Tiêu đề" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description" className=''>Nội dung</label>
            <textarea
              id="description"
              className="form-control mt-2"
              placeholder="Nội dung"
              rows={3}
            />
          </div>
            <div className='d-flex justify-content-between mt-4'>
            <button type="button" className='btn-admin-trove btn-admin btn-transform-y2' onClick={onClose}>Trở về</button>
            <button type="button" className='btn-admin-luu btn-admin btn-transform-y2' >Lưu</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default CreateNotification 
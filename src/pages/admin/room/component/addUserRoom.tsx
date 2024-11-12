import { AddUserRoomApi } from '@/services/api/MotelApi';
import React, { useState } from 'react';

interface AddUserRoomProps {
	onClose: () => void;
	roomId: number;
}

const AddUserRoom: React.FC<AddUserRoomProps> = ({ onClose, roomId }) => {
	const [values, setValues] = useState({
		phone: '',
		roomId: roomId,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		var response = await AddUserRoomApi(values);
		if (response.code === 200) {
			await alert('Thêm người thuê thành công');
			onClose();
		}
	};

	return (
		<>
			<div className='modal-overlay-admin'>
				<div className='modal-content-admin position-relative'>
					<div className=''>
						<h2 className='h2-modal-admin'>Thêm người thuê</h2>
					</div>
					<form className='form-admin-modal position-relative'>
						<div className='row form-group mt-3'>
							<div className='col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7'>
								<label
									htmlFor='description'
									className=''>
									Số điện thoại
								</label>
								<input
									type='text'
									id='title'
									className='form-control mt-2'
									placeholder='Họ và tên'
									name='phone'
									value={values.phone}
									onChange={handleChange}
								/>
							</div>
							{/* <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <label htmlFor="description" className="">
                  Bạn cùng phòng
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control mt-2"
                  placeholder="Họ và tên"
                />
              </div> */}
						</div>
						<div className='d-flex justify-content-between mt-4'>
							<button
								type='button'
								className='btn-trove-all btn-style btn-transform-y2'
								onClick={onClose}>
								Trở về
							</button>
							<button
								type='button'
								className='btn-luu-all btn-style btn-transform-y2'
								onClick={() => handleSubmit()}>
								Thêm
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddUserRoom;

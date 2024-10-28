import { getMotelByIdApi } from '@/services/api/MotelApi';
import { API } from '@/services/apiConfig';
import { MotelByIdDTO } from '@/services/Dto/MotelDto';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productImage from 'src/pages/admin/assets/images/products/s1.jpg';

export const Infomotel = () => {
	const { id } = useParams();
	const [dataMotel, setDataMotel] = useState<MotelByIdDTO>();

	useEffect(() => {
		LoadData();
	}, []);

	const LoadData = async () => {
		const response = await getMotelByIdApi(id);
		setDataMotel(response);
		console.log(response);
	};

	const CheckStatus = (status: number) => {
		if (status === 1) {
			return <span className='tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3'>Chờ duyệt</span>;
		} else if (status === 2) {
			return <span className='tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3'>Đăng hoạt động</span>;
		} else if (status === 3) {
			return <span className='tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3'>Ngừng hoạt động</span>;
		} else if (status === 4) {
			return <span className='tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3'>Từ chối</span>;
		}
	};

	return (
		<div className='container-fluid'>
			<div className='row align-items-stretch'>
				<div className='card w-100'>
					<div className='card-body p-4 info-motel'>
						<div className='w-100 text-center'>
							<h2 className='h2-info-motel'>Chi Tiết Dãy Trọ {dataMotel?.id}</h2>
						</div>
						<form className='form-motel-info'>
							<div className='d-flex flex-wrap'>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Họ và tên chủ trọ
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.owner.fullName}
									/>
								</div>{' '}
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Địa chỉ
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.address}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Trạng thái
									</label>
									<p className='mt-2'>{CheckStatus(dataMotel?.status || 0)}</p>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Giá diện
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.price.electric}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Giá điện mới
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.lastPrice.electric}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Ngày tạo
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										// ... existing code ...
										value={new Date(dataMotel?.createDate || '').toLocaleDateString('vi-VN', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric',
											hour: '2-digit',
											minute: '2-digit',
										})}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Giá nước
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.price.water}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Giá nước mới
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.lastPrice.water}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Ngày duyệt
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										placeholder=''
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Khác
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.price.other}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Giá khác mới
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										value={dataMotel?.lastPrice.other}
									/>
								</div>
								<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Ngày hết hạn
									</label>
									<input
										type='text'
										id='title'
										className='form-control mt-2 input-motel-info'
										placeholder=''
									/>
								</div>
								<div className='col-12 form-group mt-3 px-2'>
									<label
										htmlFor='title'
										className='label-motel-info'>
										Hình ảnh
									</label>
									<div className='row flex-wrap'>
										{dataMotel?.images.map((image) => (
											<div
												key={image.id}
												className=' col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3'>
												<img
													src={image.link}
													className='rounded-img-info-model img-fluid'
													alt='Không có ảnh'
												/>
											</div>
										))}
										{/* <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div>
                    <div className=" col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mt-2 px-3">
                    <img
                      src={productImage}
                      className="rounded-img-info-model img-fluid"
                      alt="Không có ảnh"
                    />
                    </div> */}
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

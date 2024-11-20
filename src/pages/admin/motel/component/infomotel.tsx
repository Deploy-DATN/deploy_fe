import { getMotelById } from '@/services/api/MotelApi';
import { MotelByIdDTO } from '@/services/Dto/MotelDto';
import { faBolt, faCalendarCheck, faCalendarPlus, faCalendarXmark, faCamera, faCaretRight, faDroplet, faFile, faFileAlt, faFileExcel, faFilePdf, faFileWord, faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productImage from 'src/pages/admin/assets/images/products/s1.jpg';

export const Infomotel = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		LoadData();
	}, []);

	const LoadData = async () => {
		const response = await getMotelById(id);
		setMotel(response);
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
		<>
			<div className='container-fluid'>
				<div className='row align-items-stretch px-0  mt-3'>
					<div className='w-100 text-center bg-color-theme-thostay'>
						<h2 className=''>Chi tiết dãy trọ {motel?.name}</h2>
					</div>
					<div className='card w-100'>
						<div className='card-body p-4 info-motel'>
							<form className='form-motel-info form-edit-motel'>
								<div className='mt-2'>
									<h4 className='h4-add-motel'>Dãy trọ</h4>
								</div>
								<div className='row flex-wrap'>
									<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Tên dãy trọ
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Tên dãy trọ'
											value={motel?.name}
										/>
									</div>

									<div className='col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Địa chỉ
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Địa chỉ'
											value={motel?.address}
										/>
									</div>

									<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Giá điện
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Giá điện'
											value={motel?.price?.electric}
										/>
									</div>
									<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Giá nước
										</label>
										<input
											type='string'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Giá nước'
											value={motel?.price?.water}
										/>
									</div>
									<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl4 col-xxl-4 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Giá khác
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Giá dịch vụ khác'
											value={motel?.price?.other}
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
											placeholder='Giá điện'
											value={motel?.lastPrice?.electric}
										/>
									</div>
									<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Giá nước mới
										</label>
										<input
											type='string'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Giá nước'
											value={motel?.lastPrice?.water}
										/>
									</div>
									<div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl4 col-xxl-4 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Số tiền dịch vụ khác...
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Giá dịch vụ khác'
											value={motel?.lastPrice?.other}
										/>
									</div>
									<div className='row'>
										<div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3'>
											<label
												htmlFor='title'
												className='label-motel-info'>
												Hình ảnh
											</label>
											<div className='row flex-wrap mt-2'>
												{motel?.images.map((image, index) => (
													<div
														key={index}
														className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3  px-1 position-relative'>
														<img
															src={image.link}
															className='rounded-img-info-model img-fluid'
															alt='Không có ảnh'
														/>
														{/* <button
                                type='button'
                                className='btn-close-img-add-motel position-absolute text-end'
                                onClick={() => removeImage(index, Number(image.id))}>
                                <FontAwesomeIcon icon={faXmark} />
                              </button> */}
													</div>
												))}
											</div>
										</div>
										<div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 form-group mt-3'>
											<label
												htmlFor='title'
												className='label-motel-info'>
												Giấy phép kinh doanh (file .pdf)
											</label>
											<div className='row flex-wrap mt-2'>
												{motel?.terms?.map((file, index) => (
													<div
														key={index}
														className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3  px-1 position-relative'>
														{file.type.includes('image') ? (
															<img
																src={file.link}
																className='rounded-img-info-model img-fluid'
																alt='Không có file'
															/>
														) : (
															<div className='file-display position-absolute h-100 w-100'>
																<a
																	href={file.link}
																	target='_blank'
																	rel='noopener noreferrer'
																	className='text-decoration-none'>
																	<FontAwesomeIcon
																		icon={faFilePdf}
																		className='file-icon'
																		size='2x'
																	/>
																	<p className='file-name mb-0'>{file.name}</p>
																</a>
															</div>
														)}
													</div>
												))}
											</div>
										</div>
									</div>
									<div className='mx-auto col-12 col-md-12 col-lg-8 col-xl-6 col-xxl-6 mt-4'>
										<div className='d-flex justify-content-between mt-4'>
											<button
												type='button'
												className='btn-style btn-trove-all btn-transform-y2'
												onClick={() => navigate(-1)}>
												Trở về
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/stylemotel.scss';
import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccountApi } from '@/services/api/authApi';
import { AddMotel } from '@/services/api/MotelApi';
import { useUser } from '@/services/api/UserContext';
import { AddMotelDTO } from '@/services/Dto/MotelDto';

export const AddMotelOwner = () => {
	const { user } = useUser();
	//rút gọn giao diện
	const [isMotelInfoVisible, setIsMotelInfoVisible] = useState(true);

	const showMotelInfo = () => setIsMotelInfoVisible(true);
	const showPriceInfo = () => setIsMotelInfoVisible(false);
	//trở lại trang trước đó
	const navigate = useNavigate();

	const [values, setValues] = useState<AddMotelDTO>({
		nameMotel: '',
		address: '',
		nameRoom: '',
		area: 1,
		priceRoom: 100000,
		totalRoom: 1,
		description: '',
		userId: user?.id,
	});


	const [formData, setFormData] = useState(new FormData());
	//dịch vụ ở đây nha
	const [services, setServices] = useState([
		{ id: 1, name: 'Điện', price: '3000', description: 'Điện của phòng' },
		{ id: 2, name: 'Nước', price: '3000', description: 'Nước của phòng' },
	]);
	const addService = () => {
		const newService = {
			id: services.length + 1,
			name: '',
			price: '',
			description: '',
		};
		setServices((prev) => [...prev, newService]);
	};
	const removeService = (id: number) => {
		setServices((prev) => prev.filter((service) => service.id !== id));
	};
	// Thêm state errors ở đầu component
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const [images, setImages] = useState<string[]>([]);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			Array.from(event.target.files).forEach((file) => {
				// Thêm file vào formData với key là 'imageFile'
				formData.append('imageFile', file);
				const imageUrl = URL.createObjectURL(file);
				setImages((prevImages) => [...prevImages, imageUrl]);
			});
		}
	};

	const removeImage = (index: number) => {
		setImages((prevImages) => prevImages.filter((_, i) => i !== index));
	};

	// Thêm hàm validate
	const validateField = (name: string, value: string) => {
		if (!value || (value.trim() === '' && name !== 'description')) {
			setErrors((prev) => ({
				...prev,
				[name]: 'Trường này không được để trống',
			}));
			return false;
		}

		if (name === 'priceRoom') {
			if (isNaN(Number(value))) {
				setErrors((prev) => ({ ...prev, [name]: 'Vui lòng nhập giá phòng' }));
				return false;
			}
			if (Number(value) < 100000) {
				setErrors((prev) => ({
					...prev,
					[name]: 'Giá trị phải lớn hơn hoặc bằng 100.000',
				}));
				return false;
			}
		}

		if (name === 'area' || name === 'totalRoom') {
			if (isNaN(Number(value))) {
				setErrors((prev) => ({ ...prev, [name]: 'Vui lòng nhập số' }));
				return false;
			}
			if (Number(value) <= 0) {
				setErrors((prev) => ({ ...prev, [name]: 'Giá trị phải lớn hơn 0' }));
				return false;
			}
		}

		setErrors((prev) => ({ ...prev, [name]: '' }));
		return true;
	};

	// Cập nhật onChange handler
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
		const value = e.target.value;
		setValues({ ...values, [field]: value });
		validateField(field, value);
		console.log(values);
	};

	const handleSubmit = async () => {
		try {
			setErrors({});
			let hasError = false;

			// Kiểm tra các trường cơ bản
			const fieldsToValidate = {
				nameMotel: values.nameMotel,
				address: values.address,
				nameRoom: values.nameRoom,
				area: values.area,
				priceRoom: values.priceRoom,
				totalRoom: values.totalRoom,
			};

			// Kiểm tra từng trường
			Object.entries(fieldsToValidate).forEach(([key, value]) => {
				if (!validateField(key, String(value || ''))) {
					hasError = true;
				}
			});

			// Kiểm tra dịch vụ
			services.forEach((service, index) => {
				if (!service.name.trim()) {
					setErrors((prev) => ({
						...prev,
						[`service_name_${index}`]: 'Tên dịch vụ không được để trống',
					}));
					hasError = true;
				}
				if (!service.price.trim()) {
					setErrors((prev) => ({
						...prev,
						[`service_price_${index}`]: 'Giá dịch vụ không được để trống',
					}));
					hasError = true;
				}
				if (isNaN(Number(service.price)) || Number(service.price) <= 0) {
					setErrors((prev) => ({
						...prev,
						[`service_price_${index}`]: 'Giá dịch vụ phải là số dương',
					}));
					hasError = true;
				}
			});

			// Kiểm tra hình ảnh
			if (images.length === 0) {
				setErrors((prev) => ({
					...prev,
					images: 'Vui lòng tải lên ít nhất 1 hình ảnh',
				}));
				hasError = true;
			}

			if (hasError) {
				return;
			}

			const submitFormData = new FormData();

			// Map đúng tên field với DTO
			const basicFields = {
				name: values.nameMotel,
				address: values.address,
				description: values.description || '',
				nameRoomType: values.nameRoom,
				descriptionRoomType: values.description || '', // Thêm trường này theo DTO
				area: values.area,
				price: values.priceRoom,
				quantityRoom: values.totalRoom, // Đổi tên field theo DTO
				ownerId: values.userId,
			};

			// Append các trường cơ bản
			Object.entries(basicFields).forEach(([key, value]) => {
				submitFormData.append(key, String(value || ''));
			});


      services.forEach((service, index) => {
        submitFormData.append(`Services[${index}].name`, service.name);
        submitFormData.append(`Services[${index}].description`, service.description);
        submitFormData.append(`Services[${index}].price`, service.price.toString());
      });

			// Append hình ảnh với tên field là Images theo DTO
			formData.getAll('imageFile').forEach((file) => {
				submitFormData.append('Images', file);
			});

			// Log để kiểm tra
			for (let pair of submitFormData.entries()) {
				console.log(pair[0], pair[1]);
			}

			const response = await AddMotel(submitFormData);
			if (response.code === 200) {
				alert('Thêm phòng trọ thành công');
				navigate(-1);
			}
		} catch (error: any) {
			alert(error.response?.data?.message || 'Có lỗi xảy ra');
		}
	};

	return (
		<div className='container-fluid-add-motel'>
			<div className='row align-items-stretch px-0'>
				<div className='w-100 text-center bg-color-theme-thostay'>
					<h2 className=''>Thêm dãy trọ</h2>
				</div>
				<div className='card w-100'>
					<div className='card-body p-4 info-motel'>
						<form className='form-motel-info'>
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
										value={values.nameMotel}
										onChange={(e) => handleChange(e, 'nameMotel')}
									/>
									{errors.nameMotel && <div className='err-text'>{errors.nameMotel}</div>}
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
										value={values.address}
										onChange={(e) => handleChange(e, 'address')}
									/>
									{errors.address && <div className='err-text'>{errors.address}</div>}
								</div>
								<div className='mt-3'>
									<h4 className='h4-add-motel'>Dịch vụ dãy trọ</h4>
								</div>
								<div className='d-flex flex-wrap'>
									{services.map((service, index) => (
										<div
											key={service.id}
											className='row flex-wrap col-12 mt-2 px-2'>
											<div className='col-12 col-sm-12 col-md-6 col-lg-3 mt-2'>
												<label className='label-motel-info'>Tên dịch vụ</label>
												<input
													type='text'
													className='form-control mt-2 input-motel-info'
													placeholder='Tên dịch vụ'
													value={service.name}
													onChange={(e) => setServices((prev) => prev.map((s) => (s.id === service.id ? { ...s, name: e.target.value } : s)))}
												/>
												{errors[`service_name_${index}`] && <div className='err-text'>{errors[`service_name_${index}`]}</div>}
											</div>
											<div className='col-12 col-sm-12 col-md-6 col-lg-3 mt-2'>
												<label className='label-motel-info'>Giá dịch vụ</label>
												<input
													type='text'
													className='form-control mt-2 input-motel-info'
													placeholder='Giá dịch vụ'
													value={service.price}
													onChange={(e) => setServices((prev) => prev.map((s) => (s.id === service.id ? { ...s, price: e.target.value } : s)))}
												/>
												{errors[`service_price_${index}`] && <div className='err-text'>{errors[`service_price_${index}`]}</div>}
											</div>
											<div className='col-12 col-sm-12 col-md-6 col-lg-4 mt-2'>
												<label className='label-motel-info'>Mô tả dịch vụ</label>
												<input
													type='text'
													className='form-control mt-2 input-motel-info'
													placeholder='Mô tả dịch vụ'
													value={service.description}
													onChange={(e) => setServices((prev) => prev.map((s) => (s.id === service.id ? { ...s, description: e.target.value } : s)))}
												/>
											</div>
											{errors[`service_description_${index}`] && <div className='err-text'>{errors[`service_description_${index}`]}</div>}
											<div className='col-12 col-sm-12 col-lg-2 d-flex justify-content-lg-around align-items-lg-end'>
												<button
													type='button'
													className='btn btn-transform-y2 btn-xoa-add-motel mt-3'
													onClick={() => removeService(service.id)}>
													Xóa
												</button>
											</div>
										</div>
									))}
									<button
										className='btn btn-transform-y2 btn-luu-all mt-3'
										onClick={addService}
										type='button'>
										Thêm dịch vụ
									</button>
								</div>
								{/* <div className="col-12 form-group mt-3 px-2">
                  <label htmlFor="title" className="label-motel-info">
                    Mô tả
                  </label>
                  <textarea
                    className="form-control mt-2 input-motel-info"
                    placeholder="Mô tả dãy trọ"
                  />
                  <div className="err-text">errer</div>
                </div> */}
								<div className='mt-4'>
									<h4 className='h4-add-motel'>Phòng trọ</h4>
								</div>
								<div className='row flex-wrap'>
									<div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Tên phòng
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Tên phòng'
											value={values.nameRoom}
											onChange={(e) => handleChange(e, 'nameRoom')}
										/>
										{errors.nameRoom && <div className='err-text'>{errors.nameRoom}</div>}
									</div>
									<div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Diện tích phòng (m2)
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Diện tích'
											value={values.area}
											onChange={(e) => handleChange(e, 'area')}
											onKeyPress={(e) => {
												if (!/[0-9]/.test(e.key)) {
													e.preventDefault();
												}
											}}
										/>
										{errors.area && <div className='err-text'>{errors.area}</div>}
									</div>
									<div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Giá phòng
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Giá phòng'
											value={values.priceRoom}
											onChange={(e) => handleChange(e, 'priceRoom')}
											onKeyPress={(e) => {
												if (!/[0-9]/.test(e.key)) {
													e.preventDefault();
												}
											}}
										/>
										{errors.priceRoom && <div className='err-text'>{errors.priceRoom}</div>}
									</div>
									<div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Số phòng
										</label>
										<input
											type='text'
											id='title'
											className='form-control mt-2 input-motel-info'
											placeholder='Số phòng'
											value={values.totalRoom}
											onChange={(e) => handleChange(e, 'totalRoom')}
											onKeyPress={(e) => {
												if (!/[0-9]/.test(e.key)) {
													e.preventDefault();
												}
											}}
										/>
										{errors.totalRoom && <div className='err-text'>{errors.priceRoom}</div>}
									</div>
									<div className='col-12 form-group mt-3 px-2'>
										<label
											htmlFor='title'
											className='label-motel-info'>
											Mô tả phòng
										</label>
										<textarea
											className='form-control mt-2 input-motel-info'
											placeholder='Mô tả phòng trọ'
											value={values.description}
											onChange={(e) => handleChange(e, 'description')}
										/>
									</div>
									<div className='row'>
										<div className='col-12 form-group mt-3'>
											<label
												htmlFor='title'
												className='label-motel-info'>
												Hình ảnh
											</label>
											<div className='row flex-wrap mt-2'>
												{images.map((image, index) => (
													<div
														key={index}
														className='col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2  px-1 position-relative'>
														<img
															src={image}
															className='rounded-img-info-model img-fluid'
															alt='Không có ảnh'
														/>
														<button
															type='button'
															className='btn-close-img-add-motel position-absolute text-end'
															onClick={() => removeImage(index)}>
															<FontAwesomeIcon icon={faXmark} />
														</button>
													</div>
												))}
												<div className='px-2 col-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 col-xxl-2'>
													<div className='file-input-wrapper '>
														<label
															htmlFor='file-upload'
															className='file-upload-label w-100'>
															<FontAwesomeIcon
																icon={faCamera}
																className='camera-icon'
															/>
															<input
																type='file'
																id='file-upload'
																multiple
																className='file-upload-input'
																onChange={handleImageUpload}
																accept='image/*'
															/>
														</label>
													</div>
												</div>
												{errors.images && <div className='err-text'>{errors.images}</div>}
											</div>
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
										<button
											type='button'
											className='btn-style btn-luu-all btn-transform-y2'
											onClick={handleSubmit}>
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

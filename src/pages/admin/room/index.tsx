import { faBolt, faDroplet, faPlus, faSearch, faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './style/room.scss';
import Addroom from './component/addroom';
import { getMotelById} from '@/services/api/MotelApi';
import { useParams } from 'react-router-dom';
import { RoomDTO } from '@/services/Dto/MotelDto';
import RowTableRoom from './component/rowTableRoom';
import AddElicWater from './component/addElicWater';
import { MotelByIdDTO } from '@/services/Dto/MotelDto';

export const Room = () => {
	const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
		addRoom: false,
		AddElicWater: false,
	});

	const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);
	const { id } = useParams();
	const [dataRoom, setDataRoom] = useState<RoomDTO[]>([]);
	const [motel, setMotel] = useState<MotelByIdDTO>();

	useEffect(() => {
		LoadData();
	}, [modalState]);

	const LoadData = async () => {
		try {
			const response = await getMotelById(id);
			setMotel(response);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleModal = (modalName: keyof typeof modalState, roomId: number | null = null) => {
		setModalState((prevState) => ({
			...prevState,
			[modalName]: !prevState[modalName],
		}));
		setSelectedRoomId(roomId);
	};

	const CheckStatus = (status: number) => {
		if (status === 1) {
			return <span className='tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3'>Chờ duyệt</span>;
		} else if (status === 2) {
			return <span className='tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3'>Đang hoạt động</span>;
		} else if (status === 3) {
			return <span className='tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3'>Ngừng hoạt động</span>;
		} else if (status === 4) {
			return <span className='tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3'>Từ chối</span>;
		} else if (status === 5) {
			return <span className='tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3'>Đã xóa</span>;
		}
	};

	

	return (
		<>
			<div className='container-fluid'>
				<div className='row align-items-stretch mt-3'>
					<div className='card w-100'>
						<div className='card-body p-4'>
							<div className='row'>
								<div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-3'>
									<h2 className='header-name-all'>Dãy trọ: {motel?.name}</h2>
									<p className='detail-room-text'>Địa chỉ: {motel?.address}</p>
								</div>
								<div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
									<div className='d-flex justify-content-start justify-content-lg-end justify-content-xl-end justify-content-xxl-end mt-3'>
										<button
											className='btn btn-create-notification btn-transform-y2'
											onClick={() => toggleModal('addRoom')}>
											<FontAwesomeIcon
												icon={faPlus}
												size='lg'
												color='#fffffff'
												className='icon-table-motel me-3'
											/>
											Thêm phòng trọ
										</button>
									</div>
									<div className='d-flex justify-content-start justify-content-lg-end justify-content-xl-end justify-content-xxl-end mt-3'>
										<button
											className='btn btn-create-notification btn-transform-y2'
											onClick={() => toggleModal('addElicWater')}>
											<FontAwesomeIcon
												icon={faBolt}
												size='lg'
												color='#fffffff'
												className='icon-table-motel me-2'
											/>
											<FontAwesomeIcon
												icon={faDroplet}
												size='lg'
												color='#fffffff'
												className='icon-table-motel me-2'
											/>
											Thêm điện nước
										</button>
									</div>
									<div className='d-flex justify-content-start mt-3 justify-content-lg-end justify-content-xl-end justify-content-xxl-end'>
										<div>
											<div className='input-group'>
												<div className='input-group-text'>
													<FontAwesomeIcon
														icon={faSearch}
														size='lg'
														color='#0B1A46'
														className='form-check-input mt-0 border border-0'
													/>
												</div>
												<input
													type='text'
													className='form-control'
													aria-label='Text input with radio button'
													placeholder='Tìm kiếm'></input>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className='table-responsive mt-3'
								data-simplebar>
								<table className='test-table table table-borderless align-middle text-nowrap'>
									<thead className=''>
										<tr className=' brg-table-tro'>
											<th scope='col'>Số phòng</th>
											<th scope='col'>Diện tích</th>
											<th scope='col'>Giá phòng</th>
											<th scope='col'>số diện</th>
											<th scope='col'>số nước</th>
											<th scope='col'>Số người thuê</th>
											<th scope='col'>Trạng thái</th>
											<th scope='col'>Thao tác</th>
										</tr>
									</thead>
									<tbody className='table-motel'>
										{motel?.rooms?.map((room) => (
											<RowTableRoom
												key={room.id}
												room={room}
												motelStatus={motel?.status}
												toggleModal={toggleModal}
											/>
										))}
									</tbody>
								</table>
							</div>
							{modalState.addRoom && (
								<Addroom
									motelId={id}
									onClose={() => toggleModal('addRoom')}
								/>
							)}
							{modalState.addElicWater && <AddElicWater onClose={() => toggleModal('addElicWater')} />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Room;

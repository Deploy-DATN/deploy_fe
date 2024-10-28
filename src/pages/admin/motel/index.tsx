import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/stylemotel.scss';
import { faHouseCircleCheck, faHouseCircleXmark, faHouseLock, faHouseMedicalCircleExclamation, faSquareCheck, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ModalThaotac from './component/ModalThaotac';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '@/services/apiConfig';
import { MotelDTO } from '@/services/Dto/MotelDto';
import { string } from 'yup';
import { ApproveMotel, getMotelByAdmin, LockMotel, RejectMotel } from '@/services/api/MotelApi';

export interface FilterProps {
	status: string;
	pageNumber: number;
	pageSize: number;
}

export const Motel: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState(''); // Thêm state để xác định loại modal
	const [dataMotel, setDataMotel] = useState<MotelDTO[]>([]);
	const [status, setStatus] = useState<string | null>(null);
	const [query, setQuery] = useState<FilterProps>({
		status: '',
		pageNumber: 1,
		pageSize: 10,
	});
	
	const [activeFilter, setActiveFilter] = useState<number | null>(null);

	useEffect(() => {
		LoadData(query);
	}, [query]);

	const LoadData = async (query: FilterProps) => {
		const response = await getMotelByAdmin(query);
		setDataMotel(await response);
		console.log(response);
	};

	const handleOpenModal = (type: string) => {
		setModalType(type); // Xác định loại modal cần hiển thị
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setModalType('');
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

	const CheckStatus_ThaoTac = (status: number, id: number) => {
		if (status === 1) {
			return <>
			<FontAwesomeIcon icon={faSquareCheck} 
				color='#298b90'
				className='icon-table-motel'
				onClick={() => HandleApprove(id)}
			/>
			<FontAwesomeIcon icon={faHouseCircleXmark} 
				color='#298b90'
				className='icon-table-motel ms-3'
				onClick={() => HandleReject(id)}
			/> 
			</>  ;
		} else if (status === 2) {
			return <>
				<FontAwesomeIcon icon={faHouseLock} 
				color='#298b90'
				className='icon-table-motel ms-3'
				onClick={() => HandleLock(id)}
			/> 
			</> ;
		}
	};

	const HandleReject = async (id: number) => {
		try {
			const response = await RejectMotel(id);
			if (response == 'Từ chối phòng trọ thành công') {
			  // Load lại dữ liệu với query hiện tại
			  await LoadData(query);
			  alert('Từ chối nhà trọ thành công');
			}
		} catch (error) {
			console.error("Lỗi khi từ chối nhà trọ:", error);
		}
	}

	const HandleLock = async (id: number) => {
		try {
			const response = await LockMotel(id);
			if (response == 'Vô hiệu hóa phòng trọ thành công') {
			  // Load lại dữ liệu với query hiện tại
			  await LoadData(query);
			  alert('Vô hiệu hóa nhà trọ thành công');
			}
		} catch (error) {
			console.error("Lỗi khi khóa nhà trọ:", error);
		}
	}


	const HandleApprove = async (id: number) => {
		try {
			const response = await ApproveMotel(id);
			if (response == 'Phê duyệt phòng trọ thành công') {
			  // Load lại dữ liệu với query hiện tại
			  await LoadData(query);
			  alert('Duyệt nhà trọ thành công');
			}
		  } catch (error) {
			console.error("Lỗi khi duyệt nhà trọ:", error);
		  }
	}

	const HandleFilter = async (status: number | null) => {
		setActiveFilter(status);
    const newQuery = { ...query, status: status == null ? '' : status.toString() };
    setQuery(newQuery);
    await LoadData(newQuery);
	};

	return (
		<div className='container-fluid'>
			<div className='row align-items-stretch'>
				<div className='card w-100'>
					<div className='card-body p-4'>
						<div className='d-flex mb-4 flex-wrap'>
							<a
								href='#'
								className={`btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === null ? 'active-filter-motel' : ''}`}
								onClick={() => HandleFilter(null)}>
								Tất cả
							</a>
							<a
								href='#'
								className={`btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 1 ? 'active-filter-motel' : ''}`}
								onClick={() => HandleFilter(1)}>
								Chờ duyệt
							</a>
							<a
								href='#'
								className={`btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 2 ? 'active-filter-motel' : ''}`}
								onClick={() => HandleFilter(2)}>
								Đang hoạt động
							</a>
							<a
								href='#'
								className={`btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 3 ? 'active-filter-motel' : ''}`}
								onClick={() => HandleFilter(3)}>
								Ngừng hoạt động
							</a>
							<a
								href='#'
								className={`btn btn-filter-motel btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 4 ? 'active-filter-motel' : ''}`}
								onClick={() => HandleFilter(4)}>
								Từ chối
							</a>
						</div>

						<div
							className='table-responsive mt-3'
							data-simplebar>
							<table className='test-table table table-borderless align-middle text-nowrap'>
								<thead className=''>
									<tr className=' brg-table-tro'>
										<th scope='col'>ID</th>
										<th scope='col'>Tên chủ trọ</th>
										<th scope='col'>Địa chỉ</th>
										<th scope='col'>Số phòng</th>
										<th scope='col'>Giá điện</th>
										<th scope='col'>Giá nước</th>
										<th scope='col'>Giá khác</th>
										<th scope='col'>Trạng thái</th>
										<th scope='col'>Thao tác</th>
									</tr>
								</thead>
								<tbody className='table-motel'>
									{dataMotel.map((motel) => (
										<tr key={motel.id}>
											<td>{motel.id}</td>
											<td>{motel.owner.fullName}</td>
											<td className='text-overflow-motel'>{motel.address}</td>
											<td>{motel.totalRoom}</td>
											<td>{motel.price?.electric}</td>
											<td>{motel.price?.water}</td>
											<td>{motel.price?.other}</td>
											<td>{CheckStatus(motel.status)}</td>
											<td>
												<Link
													to={`infomotel/${motel.id}`}
													className=' px-2 py-1 mx-1 btn-transform-y2'>
													<FontAwesomeIcon
														icon={faHouseMedicalCircleExclamation}
														size='2xl'
														color='#298b90'
														className='icon-table-motel'
													/>
												</Link>
												<Link
													to='#'
													className=' px-2 py-1 mx-1 btn-transform-y2' >
													{/* onClick={() => handleOpenModal('khoa')}> */}
													{CheckStatus_ThaoTac(motel.status, motel.id)}
												</Link>
											</td>
										</tr>
									))}
									{/* <tr>
                    <td>ID12345</td>
                    <td>Account1</td>
                    <td className="text-overflow-motel">
                      123 BMT - Tân an nnnnnn bbbbbbbbb mmmmmbbbbbbbbbbbbbbbbbbbbbbmmmm uuuuuuuuu{" "}
                    </td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3">
                        Đang thuê
                      </span>
                    </td>
                    <td>
                      <Link
                        to="infomotel"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                      >
                        <FontAwesomeIcon
                          icon={faHouseMedicalCircleExclamation}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </Link>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("khoa")}
                      >
                        <FontAwesomeIcon
                          icon={faHouseLock}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ID12345</td>
                    <td>Account1</td>
                    <td className="text-overflow-motel">123 BMT - Tân an</td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-choduyet badge bg-light-warning rounded-pill px-3 py-2 fs-3">
                        Chờ duyệt
                      </span>
                    </td>
                    <td>
                      <a href="#" className=" px-2 py-1 mx-1 btn-transform-y2">
                        <FontAwesomeIcon
                          icon={faHouseMedicalCircleExclamation}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("duyet")} // Mở modal duyệt
                      >
                        <FontAwesomeIcon
                          icon={faHouseCircleCheck}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("tuchoi")}
                      >
                        <FontAwesomeIcon
                          icon={faHouseCircleXmark}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>ID12345</td>
                    <td>Account1</td>
                    <td className="text-overflow">123 BMT - Tân an</td>
                    <td>100 phòng</td>
                    <td>
                      <span className="tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3">
                        Khóa
                      </span>
                    </td>
                    <td>
                      <a href="#" className=" px-2 py-1 mx-1 btn-transform-y2">
                        <FontAwesomeIcon
                          icon={faHouseMedicalCircleExclamation}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                      <a
                        href="#"
                        className=" px-2 py-1 mx-1 btn-transform-y2"
                        onClick={() => handleOpenModal("mokhoa")} // Mở modal mở khóa
                      >
                        <FontAwesomeIcon
                          icon={faUnlock}
                          size="2xl"
                          color="#298b90"
                          className="icon-table-motel"
                        />
                      </a>
                    </td>
                  </tr> */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			{showModal && (
				<ModalThaotac
					onClose={handleCloseModal}
					modalType={modalType}
				/>
			)}
		</div>
	);
};

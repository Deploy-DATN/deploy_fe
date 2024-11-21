import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/stylemotel.scss';
import { faEllipsis, faLock, faRectangleXmark, faSearch, faSquareCheck, faUnlock, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ModalThaotac from './component/ModalThaotac';
import { useEffect, useState } from 'react';
import { MotelDTO } from '@/services/Dto/MotelDto';
import { ApproveMotelApi, getMotelByAdminApi, LockMotelApi, RejectMotelApi, UnLockMotelApi } from '@/services/api/MotelApi';

export interface FilterProps {
	status: number | null;
	pageNumber: number;
	pageSize: number;
	search: string | null;
}

export interface PageDTO {
	totalPages: number;
	pageNumber: number;
	pageSize: number;
}

export const Motel: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState(''); // Thêm state để xác định loại modal
	const [dataMotel, setDataMotel] = useState<MotelDTO[]>([]);
	const [query, setQuery] = useState<FilterProps>({
		status: null,
		pageNumber: 1,
		pageSize: 5,
		search: null,
	});
	const [page, setPage] = useState<PageDTO>({
		totalPages: 0,
		pageNumber: 0,
		pageSize: 0,
	});

	const [activeFilter, setActiveFilter] = useState<number | null>(null);

	useEffect(() => {
		LoadData(query);
	}, [query]);

	const LoadData = async (query: FilterProps) => {
		const response = await getMotelByAdminApi(query);
		setDataMotel(await response.items);
		setPage({
			totalPages: await response.totalPages,
			pageNumber: await response.pageNumber,
			pageSize: await response.pageSize,
		});
		console.log(response);
	};

	const HandlePage = async (pageNumber: number) => {
		const newQuery = {
			...query,
			pageNumber: pageNumber,
		};
		setQuery(newQuery);
		await LoadData(newQuery);
	};

	// const handleOpenModal = (type: string) => {
	//   setModalType(type); // Xác định loại modal cần hiển thị
	//   setShowModal(true);
	// };

	const handleCloseModal = () => {
		setShowModal(false);
		setModalType('');
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
			return <span className='tt-khoa badge bg-light-danger rounded-pill px-3 py-2 fs-3'>Đã xoá</span>;
		}
	};

	const HandleSearch = async (search: string) => {
		const newQuery = {
			...query,
			search: search,
		};
		setQuery(newQuery);
		//delay 1s
		setTimeout(async () => {
			await LoadData(newQuery);
		}, 1000);
	};

	const HandleApprove = async (id: number) => {
		const response = await ApproveMotelApi(id);
		if (response.code === 200) {
			alert('Duyệt dãy trọ thành công');
			await LoadData(query);
		}
	};

	const HandleReject = async (id: number) => {
		const response = await RejectMotelApi(id);
		if (response.code === 200) {
			alert('Từ chối dãy trọ thành công');
			await LoadData(query);
		}
	};

	const HandleLock = async (id: number) => {
		const response = await LockMotelApi(id);
		if (response.code === 200) {
			alert('Khóa dãy trọ thành công');
			await LoadData(query);
		}
	};

	const HandleUnLock = async (id: number) => {
		const response = await UnLockMotelApi(id);
		if (response.code === 200) {
			alert('Mở khóa dãy trọ thành công');
			await LoadData(query);
		}
	};

	const CheckStatus_ThaoTac = (status: number, id: number) => {
		if (status === 1) {
			return (
				<>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						{/* onClick={() => handleOpenModal('khoa')}> */}
						<FontAwesomeIcon
							icon={faSquareCheck}
							color='#298b90'
							size='2xl'
							className='icon-table-motel'
							onClick={() => HandleApprove(id)}
						/>
					</a>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						{/* onClick={() => handleOpenModal('khoa')}> */}
						<FontAwesomeIcon
							icon={faRectangleXmark}
							color='#298b90'
							size='2xl'
							className='icon-table-motel'
							onClick={() => HandleReject(id)}
						/>
					</a>
				</>
			);
		} else if (status === 2) {
			return (
				<>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							icon={faLock}
							color='#298b90'
							size='2xl'
							className='icon-table-motel'
							onClick={() => HandleLock(id)}
						/>{' '}
					</a>
				</>
			);
		} else if (status === 3) {
			return (
				<>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							icon={faUnlock}
							color='#298b90'
							size='2xl'
							className='icon-table-motel'
							onClick={() => HandleUnLock(id)}
						/>
					</a>
				</>
			);
		}
	};

	//đinh dạng ngày tháng
	const formatDate = (date: string) => {
		return new Date(date).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
	};

	const HandleFilter = (status: number | null) => {
		const newQuery = {
			...query,
			status: status,
		};
		setQuery(newQuery);
	};


	return (
		<div className='container-fluid'>
			<div className='row align-items-stretch'>
				<div className='card w-100'>
					<div className='card-body p-4'>
						<div className='d-flex justify-content-between align-items-center'>
							<div>
								<h2 className='header-name-all'>Quản lý dãy trọ</h2>
							</div>
							<div></div>
						</div>
						<div className='row justify-content-lg-between justify-content-xl-between  justify-content-xxl-between  mt-4'>
							<div className='d-flex mb-4 flex-wrap col-12 col-sm-12 col-md-12 col-lg-6 -col-xl-6 col-xxl-6'>
								<a
									className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === null ? 'active-filter-motel' : ''}`}
									onClick={() => HandleFilter(null)}
                  >
									Tất cả
								</a>
								<a
									href='#'
									className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 1 ? 'active-filter-motel' : ''}`}
									onClick={() => HandleFilter(1)}
                  >
									Chờ duyệt
								</a>
								<a
									href='#'
									className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 2 ? 'active-filter-motel' : ''}`}
									onClick={() => HandleFilter(2)}
                  >
									Đang hoạt động
								</a>
								<a
									href='#'
									className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 3 ? 'active-filter-motel' : ''}`}
									onClick={() => HandleFilter(3)}
                  >
									Ngừng hoạt động
								</a>
								<a
									href='#'
									className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 4 ? 'active-filter-motel' : ''}`}
									onClick={() => HandleFilter(4)}
                  >
									Từ chối
								</a>
								<a
									href='#'
									className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 5 ? 'active-filter-motel' : ''}`}
									onClick={() => HandleFilter(5)}>
									Đã xoá
								</a>
							</div>
							<div className='col-12 col-sm-12 col-md-12 col-lg-6 -col-xl-6 col-xxl-6'>
								<div className='d-flex justify-content-start justify-content-lg-end justify-content-xl-end justify-content-xxl-end'>
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
												placeholder='Tìm kiếm'
												onChange={(e) => HandleSearch(e.target.value)}
												value={query.search || ''}
												//clear input
											></input>
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
										<th scope='col'>ID</th>
										<th scope='col'>Tên chủ trọ</th>
										<th scope='col'>Địa chỉ</th>
										<th scope='col'>Số phòng</th>
										<th scope='col'>Đánh giá</th>
										<th scope='col'>Số người thuê</th>
										<th scope='col'>Ngày tạo</th>
										<th scope='col'>Mô tả</th>
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
											<td>{motel.rating.toFixed(1)}</td>
											<td>{motel.totalRoom}</td>
											<td>{formatDate(motel.createDate)}</td>
											<td>{motel.description}</td>
											<td>{CheckStatus(motel.status)}</td>
											<td>
												<Link
													to={`infomotel/${motel.id}`}
													className=' px-2 py-1 mx-1 btn-transform-y2'>
													<FontAwesomeIcon
														icon={faEllipsis}
														size='2xl'
														color='#298b90'
														className='icon-table-motel'
													/>
												</Link>
												{CheckStatus_ThaoTac(motel.status, motel.id)}
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
						<div className='w-100 d-flex justify-content-center mt-3'>
							<nav aria-label='Page navigation example'>
								<ul className='pagination'>
									<li className='page-item'>
										<a
											className='page-link  btn-filter'
											href='#'
											aria-label='Previous'>
											<span aria-hidden='true'>&laquo;</span>
										</a>
									</li>
									{/* render page number */}
									{Array.from({ length: page.totalPages }, (_, index) => (
										<li
											className='page-item'
											key={index}
											onClick={() => HandlePage(index + 1)}>
											<a
												className='page-link  btn-filter'
												href='#'>
												{index + 1}
											</a>
										</li>
									))}
									<li className='page-item'>
										<a
											className='page-link  btn-filter'
											href='#'
											aria-label='Next'>
											<span aria-hidden='true'>&raquo;</span>
										</a>
									</li>
								</ul>
							</nav>
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

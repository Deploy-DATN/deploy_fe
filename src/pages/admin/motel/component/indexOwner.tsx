import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/stylemotel.scss';
import { faCircle, faCircleCheck, faCircleXmark, faEllipsis, faHouseCircleCheck, faHouseCircleXmark, faHouseMedicalCircleExclamation, faPaperPlane, faPenToSquare, faPlus, faSearch, faStop, faUnlock, faUser, faLock, faLockOpen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MotelByIdDTO, MotelDTO } from '@/services/Dto/MotelDto';
import { getMotelByOwner, LockMotel, RemoveMotel, UnlockMotel } from '@/services/api/MotelApi';
import MotelOwner from './Owner/motelOwner';
import '../styles/stylemotel.scss';
import { FilterProps } from '..';
import { PageDTO } from '..';
import { getAccountApi } from '@/services/api/authApi';

export const indexOwner = () => {
	const [motel, setMotel] = useState<MotelDTO[]>();
	const [activeFilter, setActiveFilter] = useState<number | null>(null);
	const [query, setQuery] = useState<FilterProps>({
		status: null,
		pageNumber: 1,
		pageSize: 10,
		search: null,
	});
	const [page, setPage] = useState<PageDTO>({
		totalPages: 0,
		pageNumber: 0,
		pageSize: 0,
	});

	// ... existing code ...
	const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout>>();
	// ... existing code ...

	useEffect(() => {
		LoadData(query);
	}, [query]);

	const LoadData = async (query: FilterProps) => {
		var user = await getAccountApi();
		const response = await getMotelByOwner(user.data.data.id, query);
		setMotel(await response.items);
		setPage({
			totalPages: await response.totalPages,
			pageNumber: await response.pageNumber,
			pageSize: await response.pageSize,
		});
		console.log(motel);
	};

	const HandlePage = async (pageNumber: number) => {
		const newQuery = {
			...query,
			pageNumber: pageNumber,
		};
		setQuery(newQuery);
		await LoadData(newQuery);
	};

	const HandleFilter = async (status: number | null) => {
		setActiveFilter(status);
		const newQuery = {
			...query,
			status: status,
		};
		setQuery(newQuery);
		await LoadData(newQuery);
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

	const HandleLock = async (id: number) => {
		try {
			const response = await LockMotel(id);
			if (response == 'Vô hiệu hóa phòng trọ thành công') {
				// Load lại dữ liệu với query hiện tại
				await LoadData(query);
				alert('Vô hiệu hóa nhà trọ thành công');
			}
		} catch (error) {
			console.error('Lỗi khi khóa nhà trọ:', error);
		}
	};

	const HandleUnlock = async (id: number) => {
		try {
			const response = await UnlockMotel(id);
			if (response == 'Kích hoạt phòng trọ thành công') {
				await LoadData(query);
				alert('Kích hoạt nhà trọ thành công');
			}
		} catch (error) {
			console.error('Lỗi khi mở khóa nhà trọ:', error);
		}
	};

	const HandleRemove = async (id: number) => {
		try {
			const response = await RemoveMotel(id);
			if (response == 'Xóa phòng trọ thành công') {
				await LoadData(query);
				alert('Xóa nhà trọ thành công');
			}
		} catch (error) {
			console.error('Lỗi khi xóa nhà trọ:', error);
		}
	};

	const IconThaoTac = (status: number, id: number) => {
		if (status === 1) {
			return (
				<>
					<a
						onClick={() => HandleRemove(id)}
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							icon={faTrashCan}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
				</>
			);
		} else if (status === 2) {
			return (
				<>
					<a
						onClick={() => HandleLock(id)}
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
							icon={faCircleXmark}
						/>
					</a>
				</>
			);
		} else if (status === 3) {
			return (
				<>
					<a
						onClick={() => HandleUnlock(id)}
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							icon={faLockOpen}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
					<a
						onClick={() => HandleRemove(id)}
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							icon={faTrashCan}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
				</>
			);
		}
	};

	const HandleSearch = async (search: string) => {
		const newQuery = {
			...query,
			search: search,
		};
		setQuery(newQuery);

		// Clear timeout cũ nếu có
		if (timeoutId) clearTimeout(timeoutId);

		// Tạo timeout mới
		const newTimeoutId = setTimeout(async () => {
			await LoadData(newQuery);
		}, 3000);

		setTimeoutId(newTimeoutId);
	};

	return (
		<>
			<div className='container-fluid index-motel'>
				<div className='row align-items-stretch'>
					<div className='card w-100'>
						<div className='card-body p-4'>
							<div className='d-flex justify-content-between align-items-center'>
								<div>
									<h2 className='header-name-all'>Quản lý trọ</h2>
								</div>
								<div>
									<div className=''>
										<Link
											to='addModelOwner'
											className='btn btn-create-notification btn-transform-y2'>
											<FontAwesomeIcon
												icon={faPlus}
												size='lg'
												color='#fffffff'
												className='icon-table-motel me-3'
											/>
											Thêm dãy trọ
										</Link>
									</div>
								</div>
							</div>
							<div className='d-flex justify-content-between my-4'>
								<div className='d-flex  flex-wrap'>
									<a
										onClick={() => HandleFilter(null)}
										className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === null ? 'active-filter-motel' : ''}`}>
										Tất cả
									</a>
									<a
										onClick={() => HandleFilter(1)}
										className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 1 ? 'active-filter-motel' : ''}`}>
										Chờ duyệt
									</a>
									<a
										onClick={() => HandleFilter(2)}
										className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 2 ? 'active-filter-motel' : ''}`}>
										Đang hoạt động
									</a>
									<a
										onClick={() => HandleFilter(3)}
										className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 3 ? 'active-filter-motel' : ''}`}>
										Ngừng hoạt động
									</a>
									<a
										onClick={() => HandleFilter(4)}
										className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 4 ? 'active-filter-motel' : ''}`}>
										Từ chối
									</a>
									<a
										onClick={() => HandleFilter(5)}
										className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeFilter === 5 ? 'active-filter-motel' : ''}`}>
										Đã xoá
									</a>
								</div>
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
											onChange={(e) => HandleSearch(e.target.value)}
											value={query.search || ''}
											type='text'
											className='form-control'
											aria-label='Text input with radio button'
											placeholder='Tìm kiếm'></input>
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
										{motel &&
											motel.map((motel) => (
												<tr>
													<td>{motel.id}</td>
													<td className='text-overflow-motel'> {motel?.address}</td>
													<td>{motel?.rooms?.length} phòng</td>
													<td>{motel?.price?.electric}</td>
													<td>{motel?.price?.water}</td>
													<td>{motel?.price?.other}</td>

													<td>{CheckStatus(motel?.status)}</td>
													<td>
														<Link
															to={`/admin/room/${motel.id}`}
															state={motel}
															className=' px-2 py-1 mx-1 btn-transform-y2'>
															<FontAwesomeIcon
																icon={faEllipsis}
																size='2xl'
																color='#298b90'
																className='icon-table-motel'
															/>
														</Link>
														<a
															href={`/admin/indexOwner/EditModelOwner/${motel.id}`}
															className=' px-2 py-1 mx-1 btn-transform-y2'>
															<FontAwesomeIcon
																icon={faPenToSquare}
																size='2xl'
																color='#298b90'
																className='icon-table-motel'
															/>
														</a>
														{IconThaoTac(motel?.status, motel.id)}
													</td>
												</tr>
											))}
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
			</div>
		</>
	);
};

export default indexOwner;

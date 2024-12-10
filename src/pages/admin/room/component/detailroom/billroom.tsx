import InfoBill from '@/pages/admin/BillOwner/component/infoBill';
import { GetBill, SentBillToEmail } from '@/services/api/MotelApi';
import { BillDTO } from '@/services/Dto/MotelDto';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const formatCurrency = (amount: number) => {
	return new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	}).format(amount);
};

export const formatDateTime = (dateString: string): string => {
	if (!dateString) return '';

	return new Date(dateString)
		.toLocaleString('vi-VN', {
			hour: '2-digit',
			minute: '2-digit',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
		.replace(',', '');
};

export const Billroom: React.FC<{ roomId: number }> = ({ roomId }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedBillId, setSelectedBillId] = useState<number | null>(null);
	const handleOpenModal = (id: number) => {
		setSelectedBillId(id);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const [bill, setBill] = useState<BillDTO[]>();

	useEffect(() => {
		const fetchBill = async () => {
			const response = await GetBill(roomId);
			setBill(response.data);
			console.log(response.data);
		};
		fetchBill();
	}, []);

	const calculateServiceCost = (service: BillDTO, serviceName: string) => {
		const serviceItem = service.serviceBills.find((s) => s.name === serviceName);
		return serviceItem ? serviceItem.price_Service * serviceItem.quantity : 0;
	};

	// const [isLoading, setIsLoading] = useState(false); // Loading state

	// const handleConfirm = async (billId: number) => {
	// 	try {
	// 		const sentBill = await SentBillToEmail(billId);
	// 		if (sentBill.data == true) {
	// 			Swal.fire({
	// 				icon: 'success',
	// 				title: 'Thành công',
	// 				text: 'Đã gửi hóa đơn về email của khách hàng.',
	// 			});
	// 		} else {
	// 			Swal.fire({
	// 				icon: 'error',
	// 				title: 'Lỗi',
	// 				text: 'Lỗi khi gửi hóa đơn, vui lòng thử lại.',
	// 			});
	// 		}
	// 	} catch (error) {
	// 		Swal.fire({
	// 			icon: 'error',
	// 			title: 'Lỗi',
	// 			text: 'Lỗi khi gửi hóa đơn, vui lòng thử lại.',
	// 		});
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	const buttonConfirm = (status: number, billId: number) => {
		return (
			<>
				{status == 1 ? (
					<span className="tt-khoa badge bg-light-danger rounded-pill p-2 fs-2">
					Chưa thanh toán
					</span>
				) : (
					<span className="tt-dangthue bg-light-success rounded-pill p-2 fs-2">
					Đã thanh toán
					</span>
				)}
			</>
		);
	};
	const handleUpdate = () => {
		const fetchBill = async () => {
			const response = await GetBill(roomId);
			setBill(response.data);
			console.log(response.data);
		};
		fetchBill();
	  };

	return (
		<>
			<div className='d-flex justify-content-start mt-3'>
			<form
                  className="d-flex align-items-center border border-secondary-subtle ps-3 rounded"
                >
                  <span className="fa fa-search form-control-feedback"></span>
                  <input
                    type="search"
                    className="form-control border-0"
                    placeholder="Tìm kiếm hóa đơn"
                  />
                </form>
			</div>

			<div
				className='table-responsive mt-3'
				data-simplebar>
				<table className='table table-borderless align-middle text-nowrap'>
					<thead>
						<tr className='brg-table-tro rounded-pill'>
							{/* <th scope="col"></th> */}
							<th scope='col'>Số phòng</th>
							<th scope='col'>Ngày tạo</th>
							<th scope='col'>Ngày thanh toán</th>
							<th scope='col'>Tiền điện</th>
							<th scope='col'>Tiền nước</th>
							<th scope='col'>Chi phí khác</th>
							<th scope='col'>Tiền thuê trọ</th>
							<th scope='col'>Thành tiền</th>
							<th scope='col'>Trạng thái</th>
						</tr>
					</thead>
					<tbody>
						{bill?.map((service) => (
							<tr
								onClick={() => handleOpenModal(service.id)}
								key={service.id}>
								{' '}
								{/* <td
                  className="cangiua checkbox-bill"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input type="checkbox" name="" id="" />
                </td> */}
								<td>
									<p className='fs-3 fw-normal mb-0'>{service?.room.roomNumber}</p>
								</td>
								<td>
									<p className='fs-3 fw-normal mb-0'>{formatDateTime(service?.createdDate)}</p>
								</td>
								<td>
									<p className='fs-3 fw-normal mb-0'>{formatDateTime(service?.createdDate)}</p>
								</td>
								<td>
									<p className='fs-3 fw-normal mb-0'>{formatCurrency(calculateServiceCost(service, 'Điện'))}</p>
								</td>
								<td>
									<p className='fs-3 fw-normal mb-0'>{formatCurrency(calculateServiceCost(service, 'Nước'))}</p>
								</td>
								<td>
									<p className='fs-3 fw-normal mb-0'>{formatCurrency(calculateServiceCost(service, 'Khác'))}</p>
								</td>
								<td>
									<p className='fs-3 fw-normal mb-0'>{formatCurrency(service?.priceRoom)}</p>
								</td>
								<td>
									<p className='fs-3 fw-normal mb-0'>{formatCurrency(service?.total)}</p>
								</td>
								<td>
									{buttonConfirm(service?.status, service?.id)}
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
						<li className='page-item'>
							<a
								className='page-link  btn-filter'
								href='#'>
								1
							</a>
						</li>
						<li className='page-item'>
							<a
								className='page-link  btn-filter'
								href='#'>
								2
							</a>
						</li>
						<li className='page-item'>
							<a
								className='page-link  btn-filter'
								href='#'>
								3
							</a>
						</li>
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
			{showModal && (
				<InfoBill
					onClose={handleCloseModal}
					onUpdate={handleUpdate}
					billId={selectedBillId}
				/>
			)}
		</>
	);
};

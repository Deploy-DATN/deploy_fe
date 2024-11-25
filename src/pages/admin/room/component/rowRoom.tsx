import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

interface RowRoomProps {
	id: number;
	roomNumber: number;
	totalUser: number;
	status: number;
}

const CheckStatus = (status: number) => {
    if (status === 1) {
      return (
        <span className="tt-choduyet badge bg-light-warning rounded-pill p-2 fs-2">
          Đang trống
        </span>
      );
    } else if (status === 2) {
      return (
        <span className="tt-dangthue bg-light-success rounded-pill p-2 fs-2">
          Đang thuê
        </span>
      );
    } else if (status === 3) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill p-2 fs-2">
          Bảo trì
        </span>
      );
    } else if (status === 4) {
      return (
        <span className="tt-khoa badge bg-light-danger rounded-pill p-2 fs-2">
          Đã xoá
        </span>
      );
    }
  };

const RowRoom = ({ id, roomNumber, totalUser, status }: RowRoomProps) => {
	return (
		<>
			<div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 mt-3'>
				<Link
					className='room-motel d-flex align-items-center justify-content-between flex-wrap px-2 py-3 '
					to={`/admin/inforoom/${id}`}>
					<div className='col-12'>
						<h3 className=''> Phòng {roomNumber}</h3>
					</div>
					<div className='col-12 d-flex justify-content-between flex-wrap'>
						<div className=''>{CheckStatus(status)}</div>
						<div>
							<FontAwesomeIcon
								icon={faUserAlt}
								size='sm'
								color='#298b90'
								className='icon-table-motel me-2'
							/>{' '}
							{totalUser}
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default RowRoom;

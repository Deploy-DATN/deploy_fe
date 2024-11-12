import { MotelRoomDTO, RoomDTO } from '@/services/Dto/MotelDto';
import { faCircleXmark, faLockOpen, faPenToSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const RowTableRoom = (props: { room: MotelRoomDTO; toggleModal: (modalName: string, roomId: number) => void }) => {
	const { room, toggleModal } = props;

	const CheckStatus = (status: number) => {
		if (status === 1) {
			return <span className='tt-dangthue badge bg-light-success rounded-pill px-3 py-2 fs-3'>Đang trống</span>;
		} else if (status === 2) {
			return <span className='span-sudung-room-motel badge rounded-pill px-3 py-2 fs-3'>Đang thuê</span>;
		} else if (status === 3) {
			return <span className='span-baotri-room-motel badge rounded-pill px-3 py-2 fs-3'>Bảo trì</span>;
		}
	};

	const IconThaoTac = (status: number, id: number) => {
		if (status === 1) {
			return (
				<>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('infoRoom', room.id)}>
						{' '}
						<FontAwesomeIcon
							icon={faEllipsis}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('editRoom', room.id)}>
						<FontAwesomeIcon
							icon={faPenToSquare}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
					<a className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
							icon={faCircleXmark}
						/>
					</a>
          <a
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('addUserRoom', room.id)}>
						<FontAwesomeIcon
							icon={faUserPlus}
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
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('infoRoom', room.id)}>
						{' '}
						<FontAwesomeIcon
							icon={faEllipsis}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('editRoom', room.id)}>
						<FontAwesomeIcon
							icon={faPenToSquare}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
          <a
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('addUserRoom', room.id)}>
						<FontAwesomeIcon
							icon={faUserPlus}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
          
				</>
			);
		} else if (status === 3) {
			return (
				<>
					<a
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('infoRoom', room.id)}>
						{' '}
						<FontAwesomeIcon
							icon={faEllipsis}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
          <a
						className=' px-2 py-1 mx-1 btn-transform-y2'
						onClick={() => toggleModal('editRoom', room.id)}>
						<FontAwesomeIcon
							icon={faPenToSquare}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
          <a
						className=' px-2 py-1 mx-1 btn-transform-y2'>
						<FontAwesomeIcon
							icon={faLockOpen}
							size='2xl'
							color='#298b90'
							className='icon-table-motel'
						/>
					</a>
				</>
			);
		}
	};

	return (
		<>
			<tr key={props?.room?.id}>
				<td>{props?.room?.roomNumber}</td>
				<td>
					{props?.room?.area}m<sup>2</sup>
				</td>
				<td>{props?.room?.price}</td>
				<td>{props?.room?.consumptions[0]?.water}</td>
				<td>{props?.room?.consumptions[0]?.electricity}</td>
				<td>
					<FontAwesomeIcon
						icon={faUserAlt}
						size='sm'
						color='#298b90'
						className='icon-table-motel me-2'
					/>{' '}
					{props?.room?.quantityUserInRoom}
				</td>
				<td>{CheckStatus(props?.room?.status)}</td>
				<td>
					{IconThaoTac(props?.room?.status, props?.room?.id)}
					
				</td>
			</tr>
		</>
	);
};

export default RowTableRoom;

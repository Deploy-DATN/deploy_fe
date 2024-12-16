import { useEffect, useState } from 'react';
import '../style/room.scss';
import Detailroom from './detailroom/detailroom';
import Historyroom from './detailroom/historyroom';
import { Billroom } from './detailroom/billroom';
import Editroom from './detailroom/editroom';
import AddUserRoom from './detailroom/addUserRoom';
import Baotriroom from './detailroom/baotriroom';
import { useParams } from 'react-router-dom';
import { CheckIsLockRoomApi, GetRoomByIdApi, OpenRoomApi } from '@/services/api/MotelApi';
import Swal from 'sweetalert2';

const Inforoom = () => {
	const [modalState, setModalState] = useState<{ [key: string]: boolean }>({
		addRoom: false,
		AddElicWater: false,
	});
	const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

	const toggleModal = (modalName: keyof typeof modalState, roomId: number | null = null) => {
		setModalState((prevState) => ({
			...prevState,
			[modalName]: !prevState[modalName],
		}));
		setSelectedRoomId(roomId);
	};
	const [activeTab, setActiveTab] = useState('detail'); // State lưu tab đang được chọn

	const { id } = useParams();
	const [isLockRoom, setIsLockRoom] = useState(false);
  const [isOpenRoom, setIsOpenRoom] = useState(false);

	useEffect(() => {
		const checkIsLockRoom = async () => {
			const response = await CheckIsLockRoomApi(Number(id));
			if (response.data == true) {
				setIsLockRoom(true);
			}
      const response2 = await GetRoomByIdApi(id);
      if (response2?.data?.status === 3) {
        setIsOpenRoom(true);
      }
		};
		checkIsLockRoom();
	}, [id]);

  const handleOpenRoom = async () => {
    const response = await OpenRoomApi(Number(id));
    if (response.data === true) {
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Mở khoá phòng thành công",
      }).then(() => {
        setIsLockRoom(false);
        setIsOpenRoom(true);
        window.location.reload();
      });
    }
  }

	return (
		<>
			<div className='container-fluid'>
				<div className='row align-items-stretch mt-3'>
					<div className='card w-100'>
						<div className='card-body p-4'>
							{/* Thanh điều hướng */}
							<div>
								<div className='d-flex flex-wrap justify-content-between  align-items-center'>
									<div className='d-flex flex-wrap align-items-center'>
										<button
											onClick={() => setActiveTab('detail')}
											className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeTab === 'detail' ? 'active-filter-motel' : ''}`}>
											Chi tiết phòng
										</button>
										<button
											onClick={() => setActiveTab('bill')}
											className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeTab === 'bill' ? 'active-filter-motel' : ''}`}>
											Hóa đơn phòng
										</button>
										<button
											onClick={() => setActiveTab('history')}
											className={`btn btn-filter btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 ${activeTab === 'history' ? 'active-filter-motel' : ''}`}>
											Lịch sử thuê phòng
										</button>
									</div>
									<div className='d-flex flex-wrap align-items-center'>
										{/* <button
                      className={`btn btn-create-notification btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2`}
                      onClick={() => toggleModal('editRoom', 1)}
                    >
                      Sửa phòng
                    </button> */}
										<button
											className={`btn btn-create-notification btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
											disabled={!isOpenRoom}
                      onClick={handleOpenRoom}>
											
											Mở khoá
										</button>
										<button
											className={`btn btn-create-notification btn-sm px-3 py-2 mx-2 mb-3 btn-transform-y2 `}
											onClick={() => toggleModal('baotriroom', Number(id))}
											disabled={!isLockRoom}>
											Bảo trì
										</button>
									</div>
								</div>
							</div>

							{/* Nội dung hiển thị */}
							<div className=''>
								{activeTab === 'detail' && <Detailroom roomId={Number(id)} />}
								{activeTab === 'history' && <Historyroom roomId={Number(id)} />}
								{activeTab === 'bill' && <Billroom roomId={Number(id)} />}
							</div>
						</div>
					</div>
				</div>
				{modalState.editRoom && selectedRoomId && (
					<Editroom
						onClose={() => toggleModal('editRoom')}
					/>
				)}
				{modalState.addUserRoom && selectedRoomId && (
					<AddUserRoom
						roomId={selectedRoomId}
						onClose={() => toggleModal('addUserRoom')}
					/>
				)}
				{modalState.baotriroom && selectedRoomId && (
					<Baotriroom
						roomId={selectedRoomId}
						onClose={() => toggleModal('baotriroom')}
					/>
				)}
			</div>
		</>
	);
};

export default Inforoom;

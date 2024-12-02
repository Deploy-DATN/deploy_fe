import { useSelector } from 'react-redux';
import { RootState, userAppDispatch } from '@/redux/store';
import { fetchMyMotel } from '@/components/header/redux/action';

const MyMotel = () => {
    const dispatch = userAppDispatch();

    // const {MyMotel} = useSelector((state: RootState) => state.user.myMotel);
    return (
        <div className="container user-motel p-4">
            {/* {rentalDetail ? (
                <div className="row align-items-center">
                    <div className="col-5">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper rounded my-custom-swiper"
                        >
                            {rentalDetail.roomImages.map((image: any) => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.link} alt="Room" className="slide-img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-7 container">
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="motel text-dark">Dãy trọ: {rentalDetail.motelName}</div>
                                <div className="address text-dark">Địa chỉ: {rentalDetail.motelAdress}</div>
                                <div className="room text-dark">Phòng: {rentalDetail.roomNumber}</div>
                                <div className="price text-dark">Giá thuê: {rentalDetail.price} VNĐ</div>
                                <div className="area text-dark">Diện tích: {rentalDetail.area} m²</div>
                            </div>
                            <div className="col-6">
                                <div className="service-title text-dark">Dịch vụ tiện ích</div>
                                <div className="service text-dark">Điện: {rentalDetail.electricPrice} vnd</div>
                                <div className="service text-dark">Nước: {rentalDetail.waterPrice} vnd</div>
                                {rentalDetail.otherService.map((service: any, index: number) => (
                                    <div key={index} className="service text-dark">
                                        {service.name}: {service.price} vnđ
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="infomation-title text-dark">Người thuê</div>
                                <div className="infomation text-dark">Tên người thuê: {rentalDetail.fullName}</div>
                                <div className="infomation text-dark">
                                    Ngày thuê: {new Date(rentalDetail.createDate).toLocaleDateString()}
                                </div>
                                <div className="infomation text-dark">
                                    Tháng {new Date(rentalDetail.createDate).getMonth() + 1}:
                                    {rentalDetail.status === 1 ? ' Chưa thanh toán' : ' Đã thanh toán'}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="owner-title text-dark">Liên hệ chủ trọ</div>
                                <div className="owner text-dark">Tên chủ trọ: {rentalDetail.owner}</div>
                                <div className="owner text-dark">SDT: {rentalDetail.phone}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-6 ${rentalDetail.status === 2 ? 'd-none' : ''}`}>
                                <button
                                    className="btn col-10 btn-motel"
                                    onClick={() => handleVnPayPayment(rentalDetail.billId, rentalDetail.totalMoney)}
                                >
                                    Thanh toán
                                </button>
                            </div>
                            <Feedback motelId={rentalDetail.id} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-dark">
                    <h4>Bạn chưa thuê phòng nào</h4>
                </div>
            )} */}
        </div>
    )
}

export default MyMotel
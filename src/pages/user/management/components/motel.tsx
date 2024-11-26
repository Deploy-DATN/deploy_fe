import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import '../styles/motel.scss'
import { GetRentalRoomDetailAPI } from '@/services/api/HomeApi';
const Motel = () => {
    const [rentalDetail, setRentalDetail] = useState<any | null>(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchRetalRoomDetail = async () => {
            try {
                if (token) {
                    const response = await GetRentalRoomDetailAPI(token)
                    setRentalDetail(response.data)
                    console.log(response)
                }
            } catch (error) {
                console.log("fetch error!!", error)
            }

        };
        fetchRetalRoomDetail();
    }, []);

    console.log(rentalDetail)
    return (
        <div className="container user-motel p-4">
            {rentalDetail ? (
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
                            className="mySwiper rounded"
                        >
                            {rentalDetail.roomImages.map((image: any) => (
                                <SwiperSlide key={image.id}>
                                    <img src={image.link} alt="Room" className="img-fluid" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-7 container">
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="motel text-dark">{rentalDetail.motelName}</div>
                                <div className="address text-dark">{rentalDetail.motelAdress}</div>
                                <div className="room text-dark">{rentalDetail.roomNumber}</div>
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
                                <div className="infomation text-dark">{rentalDetail.fullName}</div>
                                <div className="infomation text-dark">
                                    Ngày thuê: {new Date(rentalDetail.createDate).toLocaleDateString()}
                                </div>
                                <div className="infomation text-dark">
                                    Tháng {new Date(rentalDetail.createDate).getMonth() + 1}:
                                    {rentalDetail.status ? 'Đã thanh toán' : 'Chưa thanh toán'}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="owner-title text-dark">Liên hệ chủ trọ</div>
                                <div className="owner text-dark">{rentalDetail.owner}</div>
                                <div className="owner text-dark">SDT: {rentalDetail.phone}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-primary col-10">Thêm người thuê</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-primary col-10">Phản hồi</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-dark">
                    <h4>Bạn chưa thuê phòng nào</h4>
                </div>
            )}
        </div>


    )
}

export default Motel
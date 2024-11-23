import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import '../styles/motel.scss'

const Motel = () => {
    return (
        <div className="container user-motel p-4">
            <div className='row align-items-center'>
                <div className='col-5'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper rounded-4"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='img-fluid' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='img-fluid' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-7 container'>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='motel text-dark'>
                                Dũng Hồ
                            </div>
                            <div className='address text-dark'>
                                Địa chỉ: 12 phạm hùng, buôn ma thuột
                            </div>
                            <div className='room text-dark'>
                                Phòng: 202
                            </div>
                            <div className='price text-dark'>
                                Giá thuê: 1200000 vnd
                            </div>
                            <div className='area text-dark'>
                                Diện tích: 12 m2
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='service-title text-dark'>
                                Dịch vụ tiện ích
                            </div>
                            <div className='service text-dark'>
                                Điện: 3000 vnd
                            </div>
                            <div className='service text-dark'>
                                Nước: 10000 vnd
                            </div>
                            <div className='service text-dark'>
                                Wifi: 120000 vnd
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <div className='infomation-title text-dark'>
                                Người thuê
                            </div>
                            <div className='infomation text-dark'>
                                Hồ dũng
                            </div>
                            <div className='infomation text-dark'>
                                Ngày thuê: 21/11/2024
                            </div>
                            <div className='infomation text-dark'>
                                Tháng 11: Chưa thanh toán
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='owner-title text-dark'>
                                Liên hệ chủ trọ
                            </div>
                            <div className='owner text-dark'>
                                Đỗ Hoàng phong
                            </div>
                            <div className='owner text-dark'>
                                SDT: 0123456780
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button className='btn btn-primary col-10'>Thêm người thuê</button>
                        </div>
                        <div className='col-6'>
                            <button className='btn btn-primary col-10'>Phản hồi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Motel
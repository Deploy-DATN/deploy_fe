import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { postVnpayApi, VnPay } from "@/services/api/HomeApi";
import '../styles/motel.scss'
import { GetRentalRoomDetailAPI } from '@/services/api/HomeApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Motel = () => {
    const navigate = useNavigate();
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

    const handleVnPayPayment = async (billId: number, amount: number) => {
        console.log('Inside handleVnPayPayment');
        try {
            console.log('Payload:', { billId, amount });
            const vnpayPayload: VnPay = {
                orderId: billId.toString(),
                amount,
            };
            const response = await postVnpayApi(vnpayPayload);
            console.log('API response:', response);
            if (response.status === 200) {

                window.location.href = response.data;
                if (response.data) {
                    sessionStorage.setItem('paymentPending', 'true');
                    navigate('/user/motel');
                    Swal.fire({
                        title: 'Thanh toán thành công',
                        text: 'Bạn đã thanh toán thành công hóa đơn này.',
                        icon: 'success',
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                }

            } else {
                sessionStorage.setItem('paymentPending', 'false');
                Swal.fire({
                    title: 'Chưa thanh toán',
                    text: 'Thanh toán thất bại',
                    icon: 'error',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                navigate('/user/motel');
            }
        } catch (error: any) {
            console.error('Error creating order:', error.message);
            alert('An error occurred while creating the order');
        }
    };

    useEffect(() => {
        const paymentPending = sessionStorage.getItem('paymentPending');

        if (paymentPending === 'true') {
            Swal.fire({
                title: 'Thanh toán thành công',
                text: 'Bạn đã thanh toán thành công hóa đơn này.',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
            });

            // Sau khi hiển thị thông báo, xóa thông tin thanh toán
            sessionStorage.removeItem('paymentPending');
        }

    }, []);

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
                                <div className="motel text-dark">Tên dãy trọ: {rentalDetail.motelName}</div>
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
                                    {rentalDetail.status = 1 ? ' Đã thanh toán' : ' Chưa thanh toán'}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="owner-title text-dark">Liên hệ chủ trọ</div>
                                <div className="owner text-dark">Tên chủ trọ: {rentalDetail.owner}</div>
                                <div className="owner text-dark">SDT: {rentalDetail.phone}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn col-10 btn-motel" onClick={() => handleVnPayPayment(rentalDetail.billId, rentalDetail.totalMoney)} style={{ pointerEvents: rentalDetail.status ? 'none' : 'auto', opacity: rentalDetail.status ? 0.5 : 1 }}>Thanh toán</button>
                            </div>
                            <div className="col-6">
                                <button className="btn col-10 btn-motel" >Phản hồi</button>
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
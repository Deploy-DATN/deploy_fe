import '../styles/billDetail.scss'

const BillDetail = () => {
    return (
        <div className="bill-detail py-4 px-5">
            <div className="title text-dark mb-3">
                Thông tin hóa đơn
            </div>
            <div className="infomation container">
                <div className="row">
                    <div className="col-8">
                        <div className="motel-description mb-4">
                            <div className="text-dark motel-description__name">
                                Dũng Hồ
                            </div>
                            <div className="text-dark motel-description__address">
                                Địa chỉ: 12 phạm hùng, buôn ma thuột
                            </div>
                            <div className="text-dark motel-description__room-name">
                                phòng: 202
                            </div>
                        </div>
                        <div className="user-name text-dark">
                            Khách hàng: Hồ Tấn Dũng
                        </div>
                    </div>
                    <div className="col-4 text-end">
                        <div className='bill-description'>
                            <div className='bill-description__number text-dark'>
                                Số: 12iu16u21
                            </div>
                            <div className='bill-description__create-date text-dark'>
                                Ngày tạo: 23/11/2024
                            </div>
                            <div className='bill-description__status text-dark'>
                                Trạng thái: Đã thanh toán
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số (điện, nước)</th>
                            <th scope="col">Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Điện</td>
                            <td>3200</td>
                            <td>100</td>
                            <td>320000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Nước</td>
                            <td>1200</td>
                            <td>100</td>
                            <td>120000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Wifi</td>
                            <td>20000</td>
                            <td>Không có</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Giá phòng</td>
                            <td>1200000</td>
                            <td>Không có</td>
                            <td>1200000</td>
                        </tr>
                        <tr className='fs-5'>
                            <th colSpan={4}>Thành tiền</th>
                            <td>10000000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BillDetail
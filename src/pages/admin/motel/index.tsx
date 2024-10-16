import tk from '@/assets/images/backgrounds/img-login.png'

export const Motel = () =>{
    return(
        <div className='container-fluid'>
            <div className="row align-items-stretch">
                <div className="card w-100">
                    <div className="card-body p-4">
                        <div
                            className="d-flex mb-4 justify-content-between align-items-center"
                        >
                            <h5 className="mb-0 fw-bold">Quản lý trọ</h5>

                            <div className="dropdown">
                                <button
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className="rounded-circle btn-transparent rounded-circle btn-sm px-1 btn shadow-none"
                                >
                                    <i className="ti ti-dots-vertical fs-7 d-block"></i>
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li>
                                        <a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"
                                        >Something else here</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="table-responsive" data-simplebar>
                            <table
                                className="table table-borderless align-middle text-nowrap"
                            >
                                <thead>
                                    <tr>
                                        <th scope="col">Trọ</th>
                                        <th scope="col">Địa chỉ</th>
                                        <th scope="col">Phòng trống</th>
                                        <th scope="col">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-4">
                                                    <img
                                                        src={tk}
                                                        width="50"
                                                        className="rounded-circle"
                                                        alt=""
                                                    />
                                                </div>

                                                <div>
                                                    <h6 className="mb-1 fw-bolder">ID12345</h6>
                                                    <p className="fs-3 mb-0">Account1</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0">123 BMT - Tân an</p>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0 text-success">
                                                53
                                            </p>
                                        </td>
                                        <td>
                                            <span
                                                className="badge bg-light-success rounded-pill text-success px-3 py-2 fs-3"
                                            >Hoạt động</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-4">
                                                    <img
                                                        src={tk}
                                                        width="50"
                                                        className="rounded-circle"
                                                        alt=""
                                                    />
                                                </div>

                                                <div>
                                                    <h6 className="mb-1 fw-bolder">ID12222</h6>
                                                    <p className="fs-3 mb-0">Account2</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0">123 BMT</p>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0 text-success">
                                                68
                                            </p>
                                        </td>
                                        <td>
                                            <span
                                                className="badge bg-light-primary rounded-pill text-primary px-3 py-2 fs-3"
                                            >Chưa biết ghi gì</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-4">
                                                    <img
                                                        src={tk}
                                                        width="50"
                                                        className="rounded-circle"
                                                        alt=""
                                                    />
                                                </div>

                                                <div>
                                                    <h6 className="mb-1 fw-bolder">ID01234</h6>
                                                    <p className="fs-3 mb-0">Acount3</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0">999 BMT</p>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0 text-success">
                                                94
                                            </p>
                                        </td>
                                        <td>
                                            <span
                                                className="badge bg-light-danger rounded-pill text-danger px-3 py-2 fs-3"
                                            >Khóa</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-4">
                                                    <img
                                                        src={tk}
                                                        width="50"
                                                        className="rounded-circle"
                                                        alt=""
                                                    />
                                                </div>

                                                <div>
                                                    <h6 className="mb-1 fw-bolder">ID83737</h6>
                                                    <p className="fs-3 mb-0">Account4</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0">150 BMT</p>
                                        </td>
                                        <td>
                                            <p className="fs-3 fw-normal mb-0 text-success">
                                                27
                                            </p>
                                        </td>
                                        <td>
                                            <span
                                                className="badge bg-light-warning rounded-pill text-warning px-3 py-2 fs-3"
                                            >Đang sửa</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
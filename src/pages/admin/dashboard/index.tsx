import { MyChart, ChartProps } from "./components/chart";
import tk from '@/assets/images/backgrounds/img-login.png'


export const Dashboard = () => {

    const profit: ChartProps = {
        data: {
            options: {
                chart: {
                    id: 'barChart',
                    toolbar: {
                        show: false,
                    }
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
            },
            series: [
                {
                    name: 'Số liệu',
                    data: [30, 40, 35, 50, 49, 60, 70],
                },
            ],
            type: "bar" as "bar",
            id: "profit"
        }
    }

    const grade: ChartProps = {
        data: {
            options: {
                chart: {
                    id: 'donutChart',
                    toolbar: {
                        show: false,
                    }
                },
                labels: ['A', 'B', 'C', 'D', 'E']
            },
            series: [10, 20, 30, 40],
            type: "donut" as "donut",
            id: "grade"
        }
    }

    const earning: ChartProps = {
        data: {
            options: {
                chart: {
                    id: 'areaChart',
                    toolbar: {
                        show: false,
                    },
                    background: 'transparent',
                },
                grid: {
                    show: false,
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                fill: {
                    type: "solid",
                    opacity: 0,
                },
            },
            series: [
                {
                    name: 'Sales',
                    data: [30, 40, 35, 50, 49, 60, 70],
                },
            ],
            type: 'area' as 'area',
            id: 'earning'
        }
    };

    return (
        <div className="container-fluid">
            {/* <!--  Row 1 --> */}
            <div className="row">
                <div className="col-lg-8 d-flex align-items-strech">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-10">
                                <div className="">
                                    <h5 className="card-title fw-semibold">Doanh thu</h5>
                                </div>
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
                            <MyChart data={profit.data} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12 col-sm-6">
                            {/* <!-- Yearly Breakup --> */}
                            <div className="card overflow-hidden">
                                <div className="card-body p-4">
                                    <h5 className="card-title mb-10 fw-semibold">Dịch vụ</h5>
                                    <div className="row">
                                        <div className="d-flex justify-content-center">
                                            <MyChart data={grade.data} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-6">
                            {/* <!-- Monthly Earnings --> */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="row alig n-items-start">
                                        <div className="col-12">
                                            <h5 className="card-title mb-10 fw-semibold">Tài khoản</h5>
                                            <div className="d-flex align-items-center pb-1">
                                                <span
                                                    className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                                    <i className="ti ti-arrow-down-right text-danger"></i>
                                                </span>
                                                <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                <p className="fs-3 mb-0">năm</p>
                                            </div>
                                        </div>
                                        <MyChart data={earning.data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-stretch">
                <div className="card w-100">
                    <div className="card-body p-4">
                        <div
                            className="d-flex mb-4 justify-content-between align-items-center"
                        >
                            <h5 className="mb-0 fw-bold">Các trọ còn trống</h5>

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
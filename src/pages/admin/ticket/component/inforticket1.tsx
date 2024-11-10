import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { InfoTicket } from "@/services/Dto/ticketDto"
import { useEffect, useState } from "react"
import { getTicketById } from '@/services/api/ticketApi';

import '../styles/infoticket.scss'

const Infoticket = () => {
    const { id } = useParams<{ id: string }>();

    const [infoticket, setInfoticket] = useState<InfoTicket>();

    const fetchInfoticket = async (ticketId: number) => {
        try {
            const res = await getTicketById(ticketId);
            setInfoticket(res.data.data);
        } catch (error) {
            console.error('Lỗi lấy dữ liệu api:', error);
        }
    }
    useEffect(() => {
        if (id) {
            const ticketId = +id;
            fetchInfoticket(ticketId);
        }
    }, [id]);

    const images = [
        'https://placehold.co/50x50',
        'https://placehold.co/250x150',
        'https://placehold.co/150x150',
        'https://placehold.co/250x150'
    ];

    return (
        <div className="container-fluid infoticket">
            <div className="row align-items-stretch">
                <div className="card w-100">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="header-name-all">Chi tiết ticket</div>
                            <div>
                                {" "}
                                <div className="">
                                    {/* button thêm */}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 block-content'>
                                <div className='title d-flex justify-content-center mb-3'>
                                    <div className='title__content'>{infoticket?.title}</div>
                                </div>
                                <div className='mb-3 row'>
                                    <div className='type col-6'>
                                        <div className='type__label mb-2'>Người gửi:</div>
                                        <input
                                            value={infoticket?.userName}
                                            className='type__content form-control'
                                            disabled
                                        />
                                    </div>
                                    <div className='date col-6'>
                                        <div className='date__label mb-2'>Ngày tạo:</div>
                                        <input
                                            value={format(infoticket?.createDate ? new Date(infoticket.createDate) : new Date(), 'dd/MM/yyyy')}
                                            className='date__content form-control'
                                            disabled />
                                    </div>
                                </div>
                                <div className='content mb-3'>
                                    <div className='content__label mb-2'>Nội dung:</div>
                                    <textarea
                                        value={infoticket?.content}
                                        className='content__content form-control'
                                        disabled
                                    />
                                </div>
                                <div className='row mb-3'>
                                    <div className='receiver col-6'>
                                        <div className='receiver__label mb-2'>Người sử lý:</div>
                                        <input
                                            value={infoticket?.receiver}
                                            className='receiver__content form-control'
                                        />
                                    </div>
                                    <div className='status col-6'>
                                        <div className='status__label mb-2'>Tiến trình:</div>
                                        <input
                                            value={infoticket?.status === 1 ? "Tiếp nhận" : infoticket?.status === 2 ? "Đang sử lý" : infoticket?.status === 3 ? "Hoàn thành" : "Chưa có"}
                                            className='status__content form-control'
                                        />
                                    </div>
                                </div>
                                <div className='type mb-3'>
                                    <div className='type__label mb-2'>Loại ticket:</div>
                                    <input
                                        value={infoticket?.type === 1 ? "Lỗi hệ thống" : infoticket?.type === 2 ? "Yêu cầu" : infoticket?.type === 3 ? "Tố cáo" : infoticket?.type === 4 ? "Trợ giúp" : "Chưa có"}
                                        className='type__content form-control'
                                        disabled
                                    />
                                </div>
                                <div className='action d-flex justify-content-between'>
                                    <a className="btn btn-primary" href="#" role="button">Link</a>
                                    <a className="btn btn-primary" href="#" role="button">Link</a>
                                </div>
                            </div>
                            <div className='col-6 block-image row align-items-center'>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div className="col-6" key={index}>
                                        <div className={`ratio ratio-4x3 fixed-size ${infoticket?.imgs && infoticket.imgs[index] ? '' : 'image-empty d-flex justify-content-center align-items-center'}`}>
                                            {infoticket?.imgs && infoticket.imgs[index] ? (
                                                <img
                                                    src={infoticket.imgs[index]}
                                                    alt={`Hình ${index + 1}`}
                                                    className="img-fluid"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            ) : 'Chưa có hình ảnh'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infoticket
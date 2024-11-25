import { useNavigate } from 'react-router-dom';

const History = () => {
    const navigate = useNavigate();
    const handelClickRoom = (roomId: number) => {
        navigate(`/user/history/${roomId}`);
    }
    return (
        <div className="history p-3">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Ngày thuê</th>
                        <th scope="col">Ngày trả</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={() => handelClickRoom(1)}>
                        <th scope="row">2</th>
                        <td>13 phạm hùng</td>
                        <td>1200000</td>
                        <td>22/11/2024</td>
                        <td>22/11/2024</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>14 phạm hùng</td>
                        <td>1200000</td>
                        <td>22/11/2024</td>
                        <td>22/11/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default History
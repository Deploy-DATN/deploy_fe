import { useParams, useNavigate } from 'react-router-dom';

type Params = {
    roomId: string;
}

const Bill = () =>{
    const navigate = useNavigate();
    const { roomId } = useParams<Params>();

    const handelClickBill= (billId : number) => {
        navigate(`/user/history/${roomId}/${billId}`);
    }

    return(
        <div className="bill">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={()=>handelClickBill(2)}>
                        <th scope="row">1</th>
                        <td>1200000</td>
                        <td>2200000</td>
                        <td>23/11/2024</td>
                        <td>Đã thanh toán</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>1200000</td>
                        <td>2200000</td>
                        <td>23/11/2024</td>
                        <td>Đã thanh toán</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>1200000</td>
                        <td>2200000</td>
                        <td>23/11/2024</td>
                        <td>Đã thanh toán</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Bill
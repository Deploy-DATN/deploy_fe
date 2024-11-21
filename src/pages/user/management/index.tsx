import ProfileForm from './components/form/profileForm';
import './styles/profile.scss'
import avatar from '@/assets/images/backgrounds/img-login.png'
import Swal from 'sweetalert2';
import { postDetaiUserApi, UserDetail, postAvatarApi } from '@/services/api/HomeApi'


const Profile = () => {

    const handleSubmit = async (data: UserDetail) => {
        const token = localStorage.getItem("token");
        console.log(token);

        if (!token) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi!',
                text: 'Token không hợp lệ hoặc chưa được lưu trữ.',
            });
            return;
        }
        const response = postDetaiUserApi(data, token);

        try {
            // Đợi kết quả trả về từ API
            if ((await response).status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Cập nhật thông tin thành công',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: 'Cập nhật thông tin thất bại',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi!',
                text: 'Có lỗi xảy ra trong quá trình cập nhật',
            });
            console.error('Lỗi cập nhật thông tin người dùng:', error);
        }
    }

    // Xử lý khi người dùng chọn ảnh
    const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const token = localStorage.getItem("token");
            console.log(token);

            if (!token) {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: 'Token không hợp lệ hoặc chưa được lưu trữ.',
                });
                return;
            }
            const response = postAvatarApi(file, token);

            try {
                // Đợi kết quả trả về từ API
                if ((await response).status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công',
                        text: 'Cập nhật thông tin thành công',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi!',
                        text: 'Cập nhật thông tin thất bại',
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: 'Có lỗi xảy ra trong quá trình cập nhật',
                });
                console.error('Lỗi cập nhật thông tin người dùng:', error);
            }
        }
        console.log(file)
    };


    // Bắt sự kiện khi bấm nút và mở trình chọn file
    const handleButtonClick = () => {
        const fileInput = document.getElementById("avatarInput") as HTMLInputElement;
        fileInput?.click();
    };


    return (
        <div className='container profile py-5'>
            <div className='row'>

                <div className='col-5 d-flex flex-column align-items-center'>
                    <img src={avatar} className='avatar rounded-circle mb-2' alt="avatar" />
                    <input
                        type="file"
                        accept="image/*"
                        id="avatarInput"
                        style={{ display: "none" }} // Ẩn input file
                        onChange={handleAvatarChange} // Xử lý khi chọn ảnh
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleButtonClick} // Mở trình chọn file khi bấm nút
                    >
                        Cập nhật avatar
                    </button>
                </div>

                <div className='col-7'>
                    <ProfileForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Profile
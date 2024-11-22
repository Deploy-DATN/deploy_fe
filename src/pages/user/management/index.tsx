import ProfileForm from './components/form/profileForm';
import './styles/profile.scss';
import Swal from 'sweetalert2';
import { postDetaiUserApi, UserDetail, postAvatarApi } from '@/services/api/HomeApi';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Profile = () => {
    const location = useLocation();
    const { avatar: initialAvatar } = location.state || {}; // Lấy avatar từ state hoặc fallback
    const [currentAvatar, setCurrentAvatar] = useState(initialAvatar || 'https://firebasestorage.googleapis.com/v0/b/nha-tro-t7m.appspot.com/o/images%2Fc68b44ba-41f4-4985-a339-f9378b7fec37.png?alt=media'); // Ảnh mặc định nếu không có avatar

    const handleSubmit = async (data: UserDetail) => {
        const token = localStorage.getItem('token');
        if (!token) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi!',
                text: 'Token không hợp lệ hoặc chưa được lưu trữ.',
            });
            return;
        }

        try {
            const response = await postDetaiUserApi(data, token);
            if (response.status === 200) {
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
    };

    const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const token = localStorage.getItem('token');
            if (!token) {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: 'Token không hợp lệ hoặc chưa được lưu trữ.',
                });
                return;
            }

            try {
                const response = await postAvatarApi(file, token);
                console.log(`response: ${response.data}`)
                if (response.status === 200) {
                    const newAvatarUrl = response.data.avatarLink; // Giả sử API trả về URL ảnh mới
                    console.log(newAvatarUrl)
                    setCurrentAvatar(newAvatarUrl); // Cập nhật avatar
                    Swal.fire({
                        icon: 'success',
                        title: 'Thành công',
                        text: 'Cập nhật avatar thành công',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi!',
                        text: 'Cập nhật avatar thất bại',
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: 'Có lỗi xảy ra trong quá trình cập nhật',
                });
                console.error('Lỗi cập nhật avatar:', error);
            }
        }
    };


    const handleButtonClick = () => {
        const fileInput = document.getElementById('avatarInput') as HTMLInputElement;
        fileInput?.click();
    };

    return (
        <div className="container profile py-5">
            <div className="row">
                <div className="col-5 d-flex flex-column align-items-center">
                    <img
                        src={currentAvatar}
                        className="avatar rounded-circle mb-2"
                        alt="avatar"
                        onError={(e) => {
                            e.currentTarget.src = 'https://firebasestorage.googleapis.com/v0/b/nha-tro-t7m.appspot.com/o/images%2Fc68b44ba-41f4-4985-a339-f9378b7fec37.png?alt=media'; // Đổi sang ảnh mặc định nếu lỗi
                        }}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        id="avatarInput"
                        style={{ display: 'none' }}
                        onChange={handleAvatarChange}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleButtonClick}
                    >
                        Cập nhật avatar
                    </button>
                </div>

                <div className="col-7">
                    <ProfileForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default Profile;

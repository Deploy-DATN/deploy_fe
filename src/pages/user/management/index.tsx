import ProfileForm from './components/form/profileForm';
import './styles/profile.scss'
import avatar from '@/assets/images/backgrounds/img-login.png'

export interface Inputs {
    name: string;
    phone: string;
    email: string;
}

const Profile = () => {
    const handleSubmit = async (data: Inputs) => {
        console.log(data);
    }

    return (
        <div className='container profile py-5'>
            <div className='row'>
                <div className='col-5 d-flex flex-column align-items-center'>
                    <img src={avatar} className='avatar rounded-circle mb-2' alt="avatar" />
                    <button className='btn btn-primary'>Cập nhật avatar</button>
                </div>
                <div className='col-7'>
                    <ProfileForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Profile
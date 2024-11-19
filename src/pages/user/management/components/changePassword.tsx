import ChangePasswordForm from "./form/changePasswordForm";

export interface Inputs {
    currentPassword:string;
    newPassword:string;
    confirmPassword:string;
}

const ChangePassword = () =>{
    const handleSubmit = async (data: Inputs) => {
        console.log(data);
    }
    return(
        <div className="change-password col-7 mx-auto p-5">
            <ChangePasswordForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default ChangePassword
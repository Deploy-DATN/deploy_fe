import { Controller, Control, FieldErrors } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

interface InputFieldProps {
    control: Control<any>,
    label?: string,
    name: string,
    type?: string,
    errors: FieldErrors<any>,
    classname: string,
    placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({ control, label, name, type = "text", errors, classname, placeholder }) => {
    return (
        <>
            <label className="form-label">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <input {...field}
                        type={type}
                        className={classname}
                        placeholder={placeholder}
                    />
                }
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) =>
                    <div className='invalid-feedback'>{message}</div>
                }
            />
        </>
    )
}

export default InputField
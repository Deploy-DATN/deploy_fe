import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup"
import Swal from 'sweetalert2';
import { ErrorMessage } from "@hookform/error-message"
import InputField from '@/components/form_controls/input_field';
import {useState} from 'react'
import { Selectbox, Option } from '@/components/form_controls/select';
import { FormCreate } from '@/services/Dto/ticketDto';

interface Props {
    onSubmit: ((data: FormCreate) => void)
}

const TicketForm: React.FC<Props> = ({ onSubmit }) => {
    const [images, setImages] = useState<File[]>([]);

    const selectType: Option[] = [
        { value: 1, label: 'Lỗi hệ thống' },
        { value: 2, label: 'Yêu cầu' },
        { value: 4, label: 'Trợ giúp' }
    ];

    const schema = yup.object().shape({
        title: yup.string().required('Vui lòng nhập tiêu đề'),
        content: yup.string().required('Vui lòng nhập nội dung'),
        modelId: yup.number().nullable().notRequired(),
        imgs: yup.array()
            .of(
                yup.mixed<File>().test("isFile", "Chỉ chấp nhận ảnh", (value) => {
                    return value instanceof File && value.type.startsWith("image/");
                })
            )
            .min(1, "Vui lòng chọn ít nhất một ảnh")
            .max(4, "Chỉ cho phép tối đa 4 ảnh")
            .required()
    });
    const { control, handleSubmit, formState: { errors } } = useForm<FormCreate>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            content: '',
            type: 1,
            modelId: null,
            imgs: []
        }
    });
    const handleFileChange = (files: FileList | null) => {
        if (!files) return;

        const newFiles = Array.from(files);
        if (images.length + newFiles.length > 4) {
            Swal.fire('Giới hạn tối đa 4 hình ảnh');
            return;
        }

        const updatedImages = [...images, ...newFiles].slice(0, 4);
        setImages(updatedImages);
        return updatedImages;
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-6 block-content mx-auto">
                    <div className="title mb-3">
                        <InputField
                            control={control}
                            label="Tiêu đề:"
                            name="title"
                            type="text"
                            errors={errors}
                            classname={`form-control ${errors.title ? 'is-invalid' : ''}`}
                        />
                    </div>
                    <div className="content mb-3">
                        <InputField
                            control={control}
                            label="Nội dung:"
                            name="content"
                            type="textarea"
                            errors={errors}
                            rows={5}
                            classname={`form-control ${errors.content ? 'is-invalid' : ''}`}
                        />
                    </div>
                    <div className="type col-6 mb-3">
                        <div className="receiver__label mb-2">Loại:</div>
                        <Selectbox
                            control={control}
                            name="type"
                            className={`form-select ${errors.type ? 'is-invalid' : ''}`}
                            options={selectType}
                        />
                    </div>
                    <div className="file row g-2 mb-3">
                        {images && images.length > 0
                            && images.map((item, index) => (
                                <div className="file-input col-3" key={`img-${index}`}>
                                    <img className='file-input__img w-100 h-100' src={URL.createObjectURL(item)} alt={`preview-${index}`} />
                                </div>
                            ))
                        }
                        {images && images.length < 4 && (
                            <Controller
                                name="imgs"
                                control={control}
                                render={({ field }) => (
                                    <div className={`file-input col-3 ${errors.imgs ? 'is-invalid' : ''}`}>
                                        <input
                                            type="file"
                                            id="file-input"
                                            className="file-input__input d-none"
                                            multiple
                                            onChange={(e) => {
                                                const updatedFiles = handleFileChange(e.target.files);
                                                if (updatedFiles) {
                                                    field.onChange(updatedFiles);
                                                }
                                            }}
                                        />
                                        <label className="file-input__label d-flex justify-content-center align-items-center w-100 h-100" htmlFor="file-input">
                                            <i className="fa-regular fa-plus fa-flip-both fa-xs fa-lg"></i>
                                        </label>
                                    </div>
                                )}
                            />
                        )}
                        <ErrorMessage
                            errors={errors}
                            name="imgs"
                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                        />
                    </div>
                    <div className="action">
                        <button type="submit" className="btn btn-primary">Gửi</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TicketForm
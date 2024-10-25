import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { postUpdateNotiApi, UpdateNoti } from '@/services/api/authApi';
import InputField from '@/components/form_controls/input_field';

interface EditNotificationProps {
    notificationId: number;
    initialData: UpdateNoti;
    onClose: () => void;
}

const validationSchema = yup.object().shape({
    title: yup.string().required('Tiêu đề không được để trống'),
    content: yup.string().required('Nội dung không được để trống'),
    type: yup.number().required('Loại không được để trống').typeError('Loại phải là một số'),
});

const EditNotification: React.FC<EditNotificationProps> = ({ notificationId, initialData, onClose }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<UpdateNoti>({
        resolver: yupResolver(validationSchema),
        defaultValues: initialData,
    });

    const onSubmit = async (data: UpdateNoti) => {
        try {
            const response = await postUpdateNotiApi(notificationId, data);
            if (response.data.code === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Cập nhật thông báo thành công',
                });
                onClose();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Lỗi!',
                    text: 'Cập nhật thông báo thất bại',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi!',
                text: 'Có lỗi xảy ra trong quá trình cập nhật',
            });
            console.error('Lỗi cập nhật thông báo:', error);
        }
    };

    return (
        <div className="modal-overlay-notifi-edit">
            <div className="modal-content-notifi-edit position-relative">
                <div className=''>
                    <h2 className='h2-modal-notifi-edit'>Sửa Thông Báo</h2>
                    <button className="close-btn position-absolute" onClick={onClose}>×</button>
                </div>
                <form className='form-edit-notifi' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-3">
                        <InputField
                            control={control}
                            label='Tiêu đề'
                            type="text"
                            name="title"
                            errors={errors}
                            classname={`input form-control mt-2 ${errors['title']?.message ? "is-invalid" : ""}`}
                            placeholder="Cấp phép nhà trọ" />
                    </div>
                    <div className="form-group mt-3">
                        <InputField
                            control={control}
                            label='Mô tả'
                            type="textarea"
                            name="content"
                            errors={errors}
                            classname={`input form-control mt-2 ${errors['content']?.message ? "is-invalid" : ""}`}
                            placeholder="Nhà trọ của bạn đã được duyệt, xem thêm thông tin chi tiết."
                            rows={3}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="type">Loại</label>
                        <Controller
                            control={control}
                            name="type"
                            render={({ field }: { field: any }) => (
                                <select
                                    {...field}
                                    className={`input form-control mt-2 ${errors.type?.message ? "is-invalid" : ""}`}
                                >
                                    <option value={1}>Thông thường</option>
                                    <option value={2}>Cảnh báo</option>
                                    <option value={3}>Khẩn cấp</option>
                                    <option value={4}>Hệ thống</option>
                                </select>
                            )}
                        />
                        {errors['type'] && <div className="invalid-feedback">{errors['type']?.message}</div>}
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <button type="button" className='btn-edit-notifi btn-edit-notifi-cancel btn-transform-y2' onClick={onClose}>Trờ về</button>
                        <button type="submit" className='btn-edit-notifi btn-edit-notifi-save btn-transform-y2'>Lưu</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNotification;

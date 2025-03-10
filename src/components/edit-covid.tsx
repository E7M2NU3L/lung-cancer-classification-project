import { CovidProps, UpdateCovidTypes } from '../types/app-types';
import { UpdateCovidCheckSchema } from '../schemas/covid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useCovid } from '../hooks/use-covid';

const EditCovidModal = ({ isModalOpen, setIsModalOpen, content }: { 
    isModalOpen: boolean; 
    setIsModalOpen: (value: boolean) => void; 
    content: CovidProps; 
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateCovidTypes>({
        resolver: zodResolver(UpdateCovidCheckSchema),
        defaultValues: {
            author: content?.author || '',
            description: content?.description || '',
        },
        mode : 'onChange'
    });
    const {Update} = useCovid();

    // Reset form values when modal opens
    useEffect(() => {
        if (content) {
            reset({
                author: content?.author,
                description: content?.description,
            });
        }
    }, [content, reset]);

    const onSubmit: SubmitHandler<UpdateCovidTypes> = async (data) => {
        try {
            console.log("Form submitted with data:", data);
            await Update.mutateAsync({
                id : String(content?.id),
                data : data
            });
            // Add API call here
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <Modal 
            title="Edit Covid Info"
            open={isModalOpen} 
            onCancel={() => setIsModalOpen(false)} 
            footer={null}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-6">
                <div className='space-y-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Author</label>
                    <Input {...register("author")} value={content?.author} />
                    {errors.author && <Alert type='error' message={errors.author.message} />}
                </div>

                <div className='space-y-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Description</label>
                    <TextArea {...register("description")} value={content?.description} />
                    {errors.description && <Alert type='error' message={errors.description.message} />}
                </div>

                <div className="flex justify-end mt-4 gap-2">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-1 border rounded-md"
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-1 bg-blue-600 text-white rounded-md flex items-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <LoadingOutlined className='mr-1 h-4 w-4 animate-spin' />
                                Saving...
                            </>
                        ) : (
                            "Update Record"
                        )}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditCovidModal;

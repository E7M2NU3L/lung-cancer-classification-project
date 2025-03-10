import { CovidProps, UpdateCancerTypes } from '../types/app-types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { UpdateCancerCheckSchema } from '../schemas/cancer-ct';
import { useCtCancer } from '../hooks/use-ct-cancer';

const EditCancerCT = ({ isModalOpen, setIsModalOpen, content }: { 
    isModalOpen: boolean; 
    setIsModalOpen: (value: boolean) => void; 
    content: CovidProps; 
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateCancerTypes>({
        resolver: zodResolver(UpdateCancerCheckSchema),
        defaultValues: {
            author: content?.author || '',
            description: content?.description || '',
        },
        mode : 'onChange'
    });

    // Reset form values when modal opens
    useEffect(() => {
        if (content) {
            reset({
                author: content?.author,
                description: content?.description,
            });
        }
    }, [content, reset]);

    const {Update} = useCtCancer();

    const onSubmit: SubmitHandler<UpdateCancerTypes> = async (data) => {
        try {
            console.log("Form submitted with data:", data);
            // Add API call here
            await Update.mutateAsync({
                id : String(content?.id),
                data : data    
            });
            reset();
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <Modal 
            title="Edit Cancer Info"
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

export default EditCancerCT;

import { useState } from 'react';
import { Alert, Button, Input, Modal } from 'antd';
import ImageDragger from './image-dragger';
import { CreateCancerTypes } from '../types/app-types';
import { CreateCancerCheckSchema } from '../schemas/cancer-ct';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextArea from 'antd/es/input/TextArea';
import { LoadingOutlined } from '@ant-design/icons';

const UploadModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setValue
  } = useForm<CreateCancerTypes>({
      resolver: zodResolver(CreateCancerCheckSchema),
      defaultValues: {
          author: '',
          description: '',
          image_url : ''
      },
  });

    const onSubmit: SubmitHandler<CreateCancerTypes> = async (data) => {
      try {
          console.log("Form submitted with data:", data);
          // Add API call here
          setIsModalOpen(false);
      } catch (error) {
          console.error("Error submitting form:", error);
      }
    };
  
    return (
      <>

        <Button color='magenta' variant='solid' size='middle' onClick={showModal}>
          Check
        </Button>
        <Modal onCancel={() => setIsModalOpen(false)} title="Lung Cancer Detection with CT Images" open={isModalOpen} footer={null}>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-6">
                <div className='space-y-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Author</label>
                    <Input {...register("author")} />
                    {errors.author && <Alert type='error' message={errors.author.message} />}
                </div>

                <div className='space-y-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Description</label>
                    <TextArea {...register("description")}  />
                    {errors.description && <Alert type='error' message={errors.description.message} />}
                </div>

                <div className='space-y-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Upload CT File</label>
                    <ImageDragger setValue={setValue} />
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
                            "Create Record"
                        )}
                    </button>
                </div>
            </form>
        </Modal>
      </>
    );
}

export default UploadModal
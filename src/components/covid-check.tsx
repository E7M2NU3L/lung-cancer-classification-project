import { useState } from 'react';
import { Alert, Button, Input, Modal } from 'antd';
import ImageDragger from './image-dragger';
import { CreateCovidTypes } from '../types/app-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextArea from 'antd/es/input/TextArea';
import { LoadingOutlined } from '@ant-design/icons';
import { CreateCovidCheckSchema } from '../schemas/covid';

const UploadModalCovid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
    clearErrors,
    watch
  } = useForm<CreateCovidTypes>({
    resolver: zodResolver(CreateCovidCheckSchema),
    defaultValues: {
      author: '',
      description: '',
      image_url: '',
    },
  });

  const imageUrl = watch('image_url');

  const onSubmit: SubmitHandler<CreateCovidTypes> = async (data) => {
    try {
      console.log("Form submitted with data:", data);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      clearErrors();
      reset();
    }
  };

  return (
    <>
      <Button color='magenta' variant='solid' size='middle' onClick={() => setIsModalOpen(true)}>
        Check Covid
      </Button>
      <Modal onCancel={() => setIsModalOpen(false)} title="Check whether you have Covid" open={isModalOpen} footer={null}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-6">
          <div className='space-y-1'>
            <label className='text-sm font-medium text-slate-800 tracking-tight'>Author - Give your name</label>
            <Input {...register("author")} placeholder='Eg: John Doe' />
            {errors.author && <Alert type='error' message={errors.author.message} />}
          </div>

          <div className='space-y-1'>
            <label className='text-sm font-medium text-slate-800 tracking-tight'>Description</label>
            <TextArea {...register("description")} placeholder='Type something here..' />
            {errors.description && <Alert type='error' message={errors.description.message} />}
          </div>

          <div className='space-y-1'>
            <label className='text-sm font-medium text-slate-800 tracking-tight'>Upload CT File</label>
            <ImageDragger setValue={setValue} />
            {imageUrl && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">Uploaded File:</p>
                <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  {imageUrl}
                </a>
              </div>
            )}
          </div>

          <div className="flex justify-end mt-4 gap-2">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-1 border rounded-md">
              Close
            </button>
            <button type="submit" className="px-4 py-1 bg-blue-600 text-white rounded-md flex items-center" disabled={isSubmitting}>
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
};

export default UploadModalCovid;

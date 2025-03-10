import { useState } from 'react';
import { Alert, Button, Input, Modal } from 'antd';
import ImageDragger from './image-dragger';
import { CreateCovidTypes } from '../types/app-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import TextArea from 'antd/es/input/TextArea';
import { LoadingOutlined } from '@ant-design/icons';
import { CreateCovidCheckSchema } from '../schemas/covid';

const UploadModalCovid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
      setValue,
      reset,
      clearErrors
  } = useForm<CreateCovidTypes>({
      resolver: zodResolver(CreateCovidCheckSchema),
      defaultValues : {
        author : "",
        description : "",
        image_url : ""
      }
  });

    const onSubmit: SubmitHandler<CreateCovidTypes> = async (data) => {
      try {
          console.log("Form submitted with data:", data);
          // Add API call here
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

        <Button color='magenta' variant='solid' size='middle' onClick={showModal}>
          Check Covid
        </Button>
        <Modal onCancel={() => setIsModalOpen(false)} title="Check whether you have Covid" open={isModalOpen} footer={null}>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-6">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-800 tracking-tight">
                        Author
                    </label>
                    <Controller
                        name="author"
                        control={control}
                        render={({ field }) => <Input {...field} />}
                    />
                    {errors.author && <Alert type="error" message={errors.author.message} />}
                    </div>

                    <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-800 tracking-tight">
                        Description
                    </label>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => <TextArea {...field} />}
                    />
                    {errors.description && <Alert type="error" message={errors.description.message} />}
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

export default UploadModalCovid
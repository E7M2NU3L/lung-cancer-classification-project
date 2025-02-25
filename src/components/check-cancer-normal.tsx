import { useState } from "react";
import { CreateCanerManualTypes } from "../types/app-types";
import { lungCancerSchema } from "../schemas/cancer";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Button, Drawer, Input, Select } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CheckCancerManual = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
  } = useForm<CreateCanerManualTypes>({
      resolver: zodResolver(lungCancerSchema),
      defaultValues: {
        age : 0,
        alcohol_consuming : 0,
        allergy : 0,
        anxiety : 0,
        chest_pain : 0,
        chronic_disease : 0,
        coughing : 0,
        fatigue : 0,
        peer_pressure : 0,
        gender : 'M',
        shortness_of_breath : 0,
        smoking : 0,
        swallowing_difficulty : 0,
        wheezing : 0,
        yellow_fingers : 0
      },
  });

    const onSubmit: SubmitHandler<CreateCanerManualTypes> = async (data) => {
      try {
          console.log("Form submitted with data:", data);
          // Add API call here
          setIsModalOpen(false);
      } catch (error) {
          console.error("Error submitting form:", error);
      }
    };
  return (
    <div>
         <Button color='magenta' variant='solid' size='middle' onClick={showModal}>
          Check Covid
        </Button>
        <Drawer onClose={() => setIsModalOpen(false)} title="Check whether you have Covid" open={isModalOpen} footer={null}>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className='space-y-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Enter your Age</label>
                    <Input {...register("age")}  />
                    {errors.age && <Alert type='error' message={errors.age.message} />}
                </div>
                
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Gender</label>
                    <Select
                        {...register("gender")}
                        placeholder="Select your gender"
                        options={[
                            { value: 'M', label: 'Male' },
                            { value: 'F', label: 'Female' },
                            { value: '2', label: 'Others', disabled: true },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>

                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Are you alcohol consumer?</label>
                    <Select
                        {...register("alcohol_consuming")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>

                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you have Allergies?</label>
                    <Select
                        {...register("allergy")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>

                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Are you struggling with anxiety?</label>
                    <Select
                        {...register("anxiety")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>

                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you experience sudden chest pains?</label>
                    <Select
                        {...register("chest_pain")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you have any chronic diseases?</label>
                    <Select
                        {...register("chronic_disease")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you cough ofter?</label>
                    <Select
                        {...register("coughing")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you experience peer <span className="text-red-500">pressure</span>?</label>
                    <Select
                        {...register("peer_pressure")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you experience short breaths?</label>
                    <Select
                        {...register("shortness_of_breath")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Are you a smoker?</label>
                    <Select
                        {...register("smoking")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you have swallowing <span className="text-red-500">Difficulty</span>?</label>
                    <Select
                        {...register("swallowing_difficulty")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you have wheezing problems?</label>
                    <Select
                        {...register("wheezing")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
                </div>
                <div className='space-y-1 grid grid-cols-1'>
                    <label className='text-sm font-medium text-slate-800 tracking-tight'>Do you have yellow fingers?</label>
                    <Select
                        {...register("yellow_fingers")}
                        placeholder="Select Either Yes or No"
                        options={[
                            { value: 1, label: 'Yes' },
                            { value: 0, label: 'No' },
                        ]}
                        />
                    {errors.gender && <Alert type='error' message={errors.gender.message} />}
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
                            "Check"
                        )}
                    </button>
                </div>
            </form>
        </Drawer>
    </div>
  )
}

export default CheckCancerManual
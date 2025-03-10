import { useState } from "react";
import { CreateCanerManualTypes } from "../types/app-types";
import { lungCancerSchema } from "../schemas/cancer";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Alert, Button, Drawer, Input, Select } from "antd";
import { useCancerManual } from "../hooks/use-cancer";

const { Option } = Select;

const CheckCancerManual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const {Create} = useCancerManual();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateCanerManualTypes>({
    resolver: zodResolver(lungCancerSchema),
    defaultValues: {
      age: 0,
      alcohol_consuming: 0,
      allergy: 0,
      anxiety: 0,
      chest_pain: 0,
      chronic_disease: 0,
      coughing: 0,
      fatigue: 0,
      peer_pressure: 0,
      gender: "M",
      shortness_of_breath: 0,
      smoking: 0,
      swallowing_difficulty: 0,
      wheezing: 0,
      yellow_fingers: 0,
    },
  });

  const onSubmit: SubmitHandler<CreateCanerManualTypes> = async (data) => {
    try {
      console.log("Form submitted with data:", data);
      // Add API call here
      const response = await Create.mutateAsync(data);
      console.log("Response:", response);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
        setIsModalOpen(false);
    }
  };

  return (
    <div>
      <Button size="small" color="magenta" variant="solid" onClick={showModal}>
        Manual Questionnaire
      </Button>
      <Drawer
        onClose={() => setIsModalOpen(false)}
        title="Answer these questions quickly, based on your experience"
        open={isModalOpen}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Age Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-800">Enter your Age</label>
            <Controller
                name="age"
                control={control}
                render={({ field }) => (
                    <Input
                    {...field}
                    type="number"
                    onChange={(e) => field.onChange(Number(e.target.value))} // Ensure it's a number
                    />
                )}
            />
            {errors.age && <Alert type="error" message={errors.age.message} />}
          </div>

          {/* Gender Field */}
          <div className=" flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-800">Gender</label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select {...field} placeholder="Select your gender" className="">
                  <Option value="M">Male</Option>
                  <Option value="F">Female</Option>
                </Select>
              )}
            />
            {errors.gender && <Alert type="error" message={errors.gender.message} />}
          </div>

          {/* Boolean Select Fields */}
          {[
            { name: "alcohol_consuming", label: "Are you an alcohol consumer?" },
            { name: "allergy", label: "Do you have allergies?" },
            { name: "anxiety", label: "Are you struggling with anxiety?" },
            { name: "chest_pain", label: "Do you experience sudden chest pains?" },
            { name: "chronic_disease", label: "Do you have any chronic diseases?" },
            { name: "coughing", label: "Do you cough often?" },
            { name: "peer_pressure", label: "Do you experience peer pressure?" },
            { name: "shortness_of_breath", label: "Do you experience short breaths?" },
            { name: "smoking", label: "Are you a smoker?" },
            { name: "swallowing_difficulty", label: "Do you have swallowing difficulty?" },
            { name: "wheezing", label: "Do you have wheezing problems?" },
            { name: "yellow_fingers", label: "Do you have yellow fingers?" },
          ].map((field) => (
            <div key={field.name} className=" flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-800">{field.label}</label>
              <Controller
                name={field.name as keyof CreateCanerManualTypes}
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder="Select Yes or No">
                    <Option value={1}>Yes</Option>
                    <Option value={0}>No</Option>
                  </Select>
                )}
              />
              {errors[field.name as keyof CreateCanerManualTypes] && (
                <Alert type="error" message={errors[field.name as keyof CreateCanerManualTypes]?.message} />
              )}
            </div>
          ))}

          {/* Submit & Cancel Buttons */}
          <div className="flex justify-end mt-4 gap-2">
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Submit
            </Button>
          </div>
        </form>
      </Drawer>
    </div>
  );
};

export default CheckCancerManual;
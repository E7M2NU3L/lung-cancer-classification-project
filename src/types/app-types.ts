import {z} from 'zod';
import { CreateCovidCheckSchema, UpdateCovidCheckSchema } from '../schemas/covid';
import { CreateCancerCheckSchema, UpdateCancerCheckSchema } from '../schemas/cancer-ct';
import { UpdateLungCancerSchema, lungCancerSchema } from '../schemas/cancer';

export type CreateCovidTypes = z.infer<typeof CreateCovidCheckSchema>;
export type UpdateCovidTypes = z.infer<typeof UpdateCovidCheckSchema>;

export type CreateCancerTypes = z.infer<typeof CreateCancerCheckSchema>;
export type UpdateCancerTypes = z.infer<typeof UpdateCancerCheckSchema>;

export type CreateCanerManualTypes = z.infer<typeof lungCancerSchema>;
export type UpdateCanerManualTypes = z.infer<typeof UpdateLungCancerSchema>;

export interface LungCancerData {
  id: number;
  gender: "M" | "F";
  age: number;
  smoking: number;
  yellow_fingers: number;
  anxiety: number;
  peer_pressure: number;
  chronic_disease: number;
  fatigue: number;
  allergy: number;
  wheezing: number;
  alcohol_consuming: number;
  coughing: number;
  shortness_of_breath: number;
  swallowing_difficulty: number;
  chest_pain: number;
  lung_cancer: "YES" | "NO";
}

export interface CovidProps {
  author : string; 
  description : string;
  id : number; 
  image_url : string;
  output : string;
}
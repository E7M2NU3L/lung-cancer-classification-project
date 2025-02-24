import { z } from "zod";

export const lungCancerSchema = z.object({
  gender: z.enum(["M", "F"]),
  age: z.number().int().min(0), // Ensuring age is a non-negative integer
  smoking: z.number().int().min(0).max(1), // Assuming binary values (0 or 1)
  yellow_fingers: z.number().int().min(0).max(1),
  anxiety: z.number().int().min(0).max(1),
  peer_pressure: z.number().int().min(0).max(1),
  chronic_disease: z.number().int().min(0).max(1),
  fatigue: z.number().int().min(0).max(1),
  allergy: z.number().int().min(0).max(1),
  wheezing: z.number().int().min(0).max(1),
  alcohol_consuming: z.number().int().min(0).max(1),
  coughing: z.number().int().min(0).max(1),
  shortness_of_breath: z.number().int().min(0).max(1),
  swallowing_difficulty: z.number().int().min(0).max(1),
  chest_pain: z.number().int().min(0).max(1),
});

export const UpdateLungCancerSchema = lungCancerSchema.partial();
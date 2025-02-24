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
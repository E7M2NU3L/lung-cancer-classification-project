import {z} from 'zod';

export const CreateCancerCheckSchema = z.object({
    author : z.string().max(100, {
        message : "is that your real name ??, come on dude"
    }),
    description : z.string().max(4000, {
        message : "just type below 4000 letters, nobody talks to apps like that"
    }),
    image_url : z.any()
});

export const UpdateCancerCheckSchema = CreateCancerCheckSchema.partial();
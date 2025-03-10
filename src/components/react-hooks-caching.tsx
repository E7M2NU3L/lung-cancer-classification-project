import { CodeBlock } from "./code-block";

const ReactHooksQueryImplementations = () => {
const cancer_hook = `import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import type {UseMutationResult} from '@tanstack/react-query';
import { ClassifyImage, DeleteClassification, FetchAllClassifications, UpdateClassification } from '../api/cancer-ct';
import { CreateCancerTypes, UpdateCancerTypes } from '../types/app-types';

export interface Props {
    data: any;
    isPending: boolean;
    Create: UseMutationResult;
    Update: UseMutationResult;
    Delete: UseMutationResult;
}

export const useCtCancer = () => {
    const queryclient = useQueryClient();

    const refetch = () => {
        queryclient.invalidateQueries({
            queryKey : ['fetch-cancer-ct-results']
        });
    }

    const {data, isPending} = useQuery({
        queryKey : ['fetch-cancer-ct-results'],
        queryFn : FetchAllClassifications,
    });

    const Create = useMutation({
        mutationFn : (values : CreateCancerTypes) => ClassifyImage(values),
        mutationKey : [
            'create-result-cancer-ct'
        ],
        onSuccess : () => {
            refetch();
        }
    });

    const Update = useMutation({
        mutationFn : (values : {
            id : string,
            data : UpdateCancerTypes
        }) => UpdateClassification(values.id, values.data),
        mutationKey : [
            'update-result-cancer-ct',
        ],
        onSuccess : () => {
            refetch();
        }
    });

    const Delete = useMutation({
        mutationFn : (id : string) => DeleteClassification(id),
        mutationKey : [
            'delete-result-cancer-ct',
        ],
        onSuccess : () => {
            refetch();
        }
    });

    return {
        data,
        isPending,
        Create,
        Update,
        Delete
    }
}`;
  return (
    <div>
        <h1 className="text-3xl font-semibold tracking-tight">Calling APIS via React hooks & Client Side Caching</h1>
        <p className="text-sm font-normal tracking-normal leading-tight whitespace-normal">React query provides awesome functionality to convert normal api function calling with axios to state machine and i also provides client side cahing maintaining stae timings to fetch apis regalarly etc.,</p>

        <main className="max-w-6xl py-6 mx-auto w-full">
            <CodeBlock
                language="ts"
                filename="use-cancer.ts"
                code={cancer_hook}
            />
        </main>
    </div>
  )
}

export default ReactHooksQueryImplementations
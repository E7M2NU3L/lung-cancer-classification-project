import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
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
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
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
}
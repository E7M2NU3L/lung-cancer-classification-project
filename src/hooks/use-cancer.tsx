import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import { ClassifyImage, DeleteClassification, FetchAllClassifications, UpdateClassification } from '../api/cancer';
import { CreateCanerManualTypes, UpdateCanerManualTypes } from '../types/app-types';
import type {UseMutationResult} from '@tanstack/react-query';

export interface useCancerManualProps {
    data: any;
    isPending: boolean;
    Create: UseMutationResult;
    Update: UseMutationResult;
    Delete: UseMutationResult;
}

export const useCancerManual = () => {
    const queryclient = useQueryClient();

    const refetch = () => {
        queryclient.invalidateQueries({
            queryKey : ['fetch-covid-results']
        });
    }

    const {data, isPending} = useQuery({
        queryKey : ['fetch-cancers-results'],
        queryFn : FetchAllClassifications,
    });

    const Create = useMutation({
        mutationFn : (values : CreateCanerManualTypes) => ClassifyImage(values),
        mutationKey : [
            'create-result-cancers'
        ],
        onSuccess : () => {
            refetch();
        }
    });

    const Update = useMutation({
        mutationFn : (values : {
            id : string,
            data : UpdateCanerManualTypes
        }) => UpdateClassification(values.id, values.data),
        mutationKey : [
            'update-result-cancers',
        ],
        onSuccess : () => {
            refetch();
        }
    });

    const Delete = useMutation({
        mutationFn : (id : string) => DeleteClassification(id),
        mutationKey : [
            'delete-result-cancers',
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
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import { ClassifyImage, DeleteClassification, FetchAllClassifications, UpdateClassification } from '../api/covid';
import { CreateCovidTypes, UpdateCovidTypes } from '../types/app-types';
import type {UseMutationResult} from '@tanstack/react-query';

export interface useCovidProps {
    data: any;
    isPending: boolean;
    Create: UseMutationResult;
    Update: UseMutationResult;
    Delete: UseMutationResult;
}

export const useCovid = () => {
    const queryclient = useQueryClient();

    const refetch = () => {
        queryclient.invalidateQueries({
            queryKey : ['fetch-covid-results']
        });
    }

    const {data, isPending} = useQuery({
        queryKey : ['fetch-covid-results'],
        queryFn : FetchAllClassifications
    });

    const Create = useMutation({
        mutationFn : (values : CreateCovidTypes) => ClassifyImage(values),
        mutationKey : [
            'create-result-covid'
        ],
        onSuccess : () => {
            refetch();
        }
    });

    const Update = useMutation({
        mutationFn : (values : {
            id : string,
            data : UpdateCovidTypes
        }) => UpdateClassification(values.id, values.data),
        mutationKey : [
            'update-result-covid',
        ],
        onSuccess : () => {
            refetch();
        }
    });

    const Delete = useMutation({
        mutationFn : (id : string) => DeleteClassification(id),
        mutationKey : [
            'delete-result-covid',
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
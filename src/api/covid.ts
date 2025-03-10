import axios from 'axios';
import { CreateCovidTypes, UpdateCovidTypes } from '../types/app-types';
import { appErr } from '../utils/app-err';

export async function ClassifyImage(values : CreateCovidTypes) {
    try {
        let endpoint : string;
        const environment = import.meta.env.VITE_NODE_ENV;
        if (environment === "deployment") {
            endpoint = import.meta.env.VITE_BASE_URL ?? "http://localhost:8000";
        }
        else {
            endpoint = import.meta.env.VITE_BASE_URL ?? "https://cvp-rust.vercel.app";
        }

        const response = await axios.post(
            endpoint + "/api/v1/classifiers/covid-check",
            values
        );

        return response.data;
    } catch (error) {
        appErr.appErrServer(error);
    }
};

export async function FetchAllClassifications() {
    try {
        let endpoint = import.meta.env.VITE_BASE_URL ?? "http://localhost:8000";

        const response = await axios.get(`${endpoint}/api/v1/classifiers/covid-check`);
        console.log("API Response:", response.data); // Debugging log

        return response.data; // ✅ Ensure function returns response data
    } catch (error) {
        appErr.appErrServer(error);
    }
};

export async function FetchSingleClassification(id: string) {
    try {
        let endpoint : string;
        const environment = import.meta.env.VITE_NODE_ENV;
        if (environment === "deployment") {
            endpoint = import.meta.env.VITE_BASE_URL ?? "http://localhost:8000";
        }
        else {
            endpoint = import.meta.env.VITE_BASE_URL ?? "https://cvp-rust.vercel.app";
        }

        const response = await axios.get(
            endpoint + "/api/v1/classifiers/covid-check"
        );

        const singleResponse = response.data.filter((classification : any) => classification !== null && classification.id !== id);
        console.log(singleResponse);

        return response.data;
    } catch (error) {
        appErr.appErrServer(error);
    }
}

export async function DeleteClassification(id: string) {
    try {
        let endpoint : string;
        const environment = import.meta.env.VITE_NODE_ENV;
        if (environment === "deployment") {
            endpoint = import.meta.env.VITE_BASE_URL ?? "http://localhost:8000";
        }
        else {
            endpoint = import.meta.env.VITE_BASE_URL ?? "https://cvp-rust.vercel.app";
        }

        const response = await axios.delete(
            endpoint + "/api/v1/classifiers/covid-check/" + id
        );
        return response.data;
    } catch (error) {
        appErr.appErrServer(error);
    }
};

export async function UpdateClassification(id: string, values: UpdateCovidTypes) {
    try {
        let endpoint : string;
        const environment = import.meta.env.VITE_NODE_ENV;
        if (environment === "deployment") {
            endpoint = import.meta.env.VITE_BASE_URL ?? "http://localhost:8000";
        }
        else {
            endpoint = import.meta.env.VITE_BASE_URL ?? "https://cvp-rust.vercel.app";
        }

        const response = await axios.put(
            endpoint + "/api/v1/classifiers/covid-check/" + id,
            values
        );

        return response.data;
    } catch (error) {
        appErr.appErrServer(error);
    }
}
import { CodeBlock } from "./code-block"

const AxiosApi = () => {

    const cancerApi = `import axios from 'axios';
import { CreateCancerTypes, UpdateCancerTypes } from '../types/app-types';
import { appErr } from '../utils/app-err';

export async function ClassifyImage(values : CreateCancerTypes) {
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
            endpoint + "/api/v1/classifiers/cancer-check-ct",
            values
        );

        return response.data;
    } catch (error) {
        appErr.appErrServer(error);
    }
};

export async function FetchAllClassifications() {
    let endpoint: string;
    const environment = import.meta.env.VITE_NODE_ENV;

    // Proper conditional check for deployment environment
    if (environment === "deployment") {
        endpoint = import.meta.env.VITE_BASE_URL ?? "https://cvp-rust.vercel.app";
    } else {
        endpoint = import.meta.env.VITE_BASE_URL ?? "http://localhost:8000";
    }

    try {
        const response = await axios.get("{endpoint}/api/v1/classifiers/cancer-check-ct");

        console.log("API Response:", response.data);

        return response.data; // ✅ Return only the data, not the entire response
    } catch (error) {
        console.error("Error fetching classifications:", error);
        appErr.appErrServer(error);
    }
}


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
            endpoint + "/api/v1/classifiers/cancer-check-ct"
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
            endpoint + "/api/v1/classifiers/cancer-check-ct/" + id
        );
        return response.data;
    } catch (error) {
        appErr.appErrServer(error);
    }
};

export async function UpdateClassification(id: string, values: UpdateCancerTypes) {
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
            endpoint + "/api/v1/classifiers/cancer-check-ct/" + id,
            values
        );

        return response.data;
    } catch (error) {
        appErr.appErrServer(error);
    }
}`

  return (
    <div>
        <h1 className="text-3xl font-semibold tracking-tight">API Integration with Axios</h1>
        <p className="text-sm font-normal tracking-normal leading-tight whitespace-normal">the communication between Frontend and Backend is established with axios and proper headers and data is sent and received accordingly</p>

        <main className="max-w-6xl py-6 mx-auto w-full">
            <CodeBlock
                language="ts"
                filename="cancer-api.ts"
                code={cancerApi}
            />
        </main>
    </div>
  )
}

export default AxiosApi
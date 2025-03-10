import { Client, Storage, ID } from 'appwrite';

export class StorageServices {
    private client: Client;
    private storage: Storage;

    constructor() {
        this.client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID!);

        this.storage = new Storage(this.client);
    }

    // Example method to upload a file
    async uploadFile(file: File) {
        try {
            return await this.storage.getFileView(import.meta.env.VITE_APPWRITE_BUCKET_ID!, (await this.storage.createFile(import.meta.env.VITE_APPWRITE_BUCKET_ID!, ID.unique(), file)).$id);
        } catch (error) {
            console.error('Upload failed:', error);
            throw error;
        }
    }
}

export const storageService = new StorageServices();
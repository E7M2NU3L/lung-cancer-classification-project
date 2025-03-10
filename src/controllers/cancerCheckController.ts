import { CreateCancerTypes } from '../types/app-types';
import { storageService } from '../config/storage';

/**
 * Uploads an image file to Appwrite storage.
 * @param file - The file to be uploaded.
 * @returns URL of the uploaded image.
 */
export const uploadImage = async (file: File): Promise<string> => {
    try {
        const fileUrl = await storageService.uploadFile(file);
        return fileUrl;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Image upload failed");
    }
};

/**
 * Handles form submission by uploading image and sending data.
 * @param data - The form data.
 */
export const submitCancerCheck = async (data: CreateCancerTypes) => {
    try {
        console.log("Submitting form data:", data);
        // Add API call to store the form data in DB
        return { success: true, message: "Record created successfully" };
    } catch (error) {
        console.error("Error submitting form:", error);
        throw new Error("Form submission failed");
    }
};

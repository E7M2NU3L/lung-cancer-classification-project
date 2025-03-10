import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { UseFormSetValue } from 'react-hook-form';
import { uploadImage } from '../controllers/cancerCheckController';

const { Dragger } = Upload;

const ImageDragger = ({ setValue }: { setValue: UseFormSetValue<{ author: string; description: string; image_url?: string }> }) => {

    const props: UploadProps = {
        name: 'file',
        multiple: false,
        customRequest: async ({ file, onSuccess }) => {
            try {
                const imageUrl = await uploadImage(file as File);
                setValue('image_url', imageUrl);
                message.success(`${file} uploaded successfully.`);
                onSuccess?.('File uploaded');
            } catch (error) {
                message.error(`${file} upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Only single file uploads are supported.</p>
        </Dragger>
    );
};

export default ImageDragger;

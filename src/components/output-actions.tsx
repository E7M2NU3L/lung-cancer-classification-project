import {DeleteOutlined, EditOutlined, FolderViewOutlined} from '@ant-design/icons'
import { Button, message, Modal, Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';
import { useState } from "react";

const confirm: PopconfirmProps['onConfirm'] = (e) => {
  console.log(e);
  message.success('Click on Yes');
};

const cancel: PopconfirmProps['onCancel'] = (e) => {
  console.log(e);
  message.error('Click on No');
};

const OutputActions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

  return (
    <main>
        <main className="gap-3 flex flex-row items-center">
            <Button color="cyan" variant="solid" size="small" onClick={showModal}>
                <FolderViewOutlined />
            </Button>
            <Button color="blue" variant="outlined" size="small" onClick={showModal}>
                <EditOutlined />
            </Button>
            <Popconfirm
                title="Delete History"
                description="Are you sure to delete this History"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <Button color="red" size="small" variant="solid"><DeleteOutlined /></Button>
            </Popconfirm>
        </main>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>

        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </main>
  )
}

export default OutputActions
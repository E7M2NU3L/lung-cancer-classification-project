import { useState } from 'react';
import { Button, Modal } from 'antd';
import ImageDragger from './image-dragger';

const UploadModal = () => {
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
      <>
        <Button color='magenta' variant='solid' size='middle' onClick={showModal}>
          Classify
        </Button>
        <Modal title="Lung Cancer Classification for X Ray Images" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <ImageDragger />
        </Modal>
      </>
    );
}

export default UploadModal
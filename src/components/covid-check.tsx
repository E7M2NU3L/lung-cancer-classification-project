import { Button, Card, Modal, Pagination, Popconfirm, message } from "antd";
import { useCovid } from "../hooks/use-covid";
import UploadModal from "./upload-modal";
import {motion} from 'framer-motion';
import type {PaginationProps, PopconfirmProps} from 'antd';
import { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const {Meta} = Card;

const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
  };
  
  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };
  

const CovidCheck = () => {
    const {data} = useCovid();
    console.log(data);

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

    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
      };
  return (
    <div>
        <main className='flex w-full items-center border border-gray-200 p-4 my-12 justify-between min-h-[10vh] gap-4'>
        <main className='flex flex-col max-w-2xl'>
            <h1 className='text-2xl font-medium tracking-tight'>
                Previous Submissions
            </h1>
            <p className='text-sm font-normal tracking-tight text-gray-500 leading-tight whitespace-normal'>go through previous submissions made by fellow HRs to test my applications workflow, feel free to test!</p>
        </main>

        <UploadModal />
    </main>

    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {[0,1,2,3].map((_, index) => (
           <motion.section initial={{
            opacity: 0,
            y: -100,
           }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4 * index,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }
             }}
            whileHover={{
                scale: 1.05,
                rotate: 4,
                transition: {
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }
            }}
           >
             <Card key={index}
            cover={
                <img
                  alt="example"
                  src="https://www.e7health.com/files/blogs/chest-x-ray-29.jpg"
                />
              }
            >
                <Meta
                    title={
                        <h1 className='text-lg font-medium tracking-tight'>
                            Output: <span className='text-red-500'>Cancer</span>
                        </h1>
                    }
                    description={
                        <main className='flex flex-col gap-4'>
                            <h1 className='text-sm font-normal tracking-tight leading-tight'>description about the image given by the user</h1>
                            <main className="flex justify-between gap-4 flex-wrap items-center">
                            <p className='text-xs font-medium'>Author: HR David</p>

                            <main className="gap-3 flex flex-row items-center">
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
                            </main>
                        </main>
                    }
                    style={{ width: '100%' }}
                />
            </Card>
           </motion.section>
        ))}

        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </main>
    <main className="my-6 flex justify-center items-center w-full">
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </main>
    </div>
  )
}

export default CovidCheck
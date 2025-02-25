import { Button, Card, Pagination, Popconfirm, message } from "antd";
import { useCovid } from "../hooks/use-covid";
import {motion} from 'framer-motion';
import type {PaginationProps, PopconfirmProps} from 'antd';
import { useState } from "react";
import { DeleteOutlined, EditOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { appErr } from "../utils/app-err";
import { CovidProps } from "../types/app-types";
import EditCovidModal from "./edit-covid";
import UploadModalCovid from "./upload-modal-covid";

const {Meta} = Card;

const CovidCheck = () => {
    const {data, isPending} = useCovid();
    console.log(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
      };
    
    const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    const DeleteCovid = async (id : number) => {
        try {
            console.log(id);
            message.success('Record has been deleted successfully');
        } catch (error) {
            appErr.appErrClient(error);
        }
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

        <UploadModalCovid />
    </main>

    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {!isPending && data.map((content : CovidProps, index : number) => (
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
            key={index}
           >
             <Card
                cover={
                <img
                  alt="example"
                  src={content.image_url ?? ''}
                />
              }
            >
                <Meta
                    title={
                        <span className='font-semibold'>Result:  {content?.output === "Normal" ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Normal</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>Cancer</span>} </span>
                    }
                    description={
                        <main className='flex flex-col gap-4'>
                            <h1 className='text-sm font-normal tracking-tight leading-tight'>{content?.description ?? ''}</h1>
                            <main className="flex justify-between gap-4 flex-wrap items-center">
                            <p className='text-xs font-medium'>Author: {content?.author}</p>

                            {isPending ? (
                                <main className="gap-3 flex flex-row items-center">
                                    <Button color="blue" variant="outlined" size="small">
                                        <Loading3QuartersOutlined className="h-4 w-4 animate-spin" />
                                    </Button>
                                    
                                    <Button color="red" size="small" variant="solid"><Loading3QuartersOutlined className="h-4 w-4 animate-spin" /></Button>
                                </main>
                            ) : (
                                <main className="gap-3 flex flex-row items-center">
                                    <Button color="blue" variant="outlined" size="small" onClick={showModal}>
                                        <EditOutlined />
                                    </Button>
                                    <Popconfirm
                                        title="Delete History"
                                        description="Are you sure to delete this History"
                                        onConfirm={() => {
                                            DeleteCovid(content?.id)
                                        }}
                                        onCancel={cancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button color="red" size="small" variant="solid"><DeleteOutlined /></Button>
                                    </Popconfirm>
                                </main>
                            )}
                            </main>
                        </main>
                    }
                    style={{ width: '100%' }}
                />
            </Card>

            {!isPending && (
                <EditCovidModal key={index} content={content} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            )}
           </motion.section>
        ))}
    </main>
    <main className="my-6 flex justify-center items-center w-full">
    <Pagination showQuickJumper defaultCurrent={1} total={isPending ? 0 : data?.length} onChange={onChange} />
    </main>
    </div>
  )
}

export default CovidCheck
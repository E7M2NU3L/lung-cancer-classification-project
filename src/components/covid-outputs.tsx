import { Button, Card, Pagination, PaginationProps } from "antd"
import UploadModalCovid from "./covid-check"
import { EditOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { motion } from 'framer-motion'
import EditCovidModal from "./edit-covid";
import { useCovid } from "../hooks/use-covid";
import DeleteCovid from "./delete-covid";

const { Meta } = Card;

const CovidOutputs = () => {

    const {data, isPending} = useCovid();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        console.log('Page: ', pageNumber);
      };
  return (
    <div>
        <main className='flex w-full items-center border border-gray-200 p-4 my-12 justify-between min-h-[10vh] gap-4'>
        <main className='flex flex-col max-w-2xl'>
            <h1 className='text-2xl font-medium tracking-tight'>
                Check with C-Xrays
            </h1>
            <p className='text-sm font-normal tracking-tight text-gray-500 leading-tight whitespace-normal'>go through previous submissions made by fellow HRs to test my applications workflow, feel free to test!</p>
        </main>

        <UploadModalCovid />
    </main>

    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
       {isPending && (
        <Card>
            <Meta title={
                <h1 className="text-2xl font-semibold tracking-tight whitespace-normal text-slate-900">
                    <Loading3QuartersOutlined className="h-4 w-4 mr-2 animate-spin" />
                    Please Wait
                </h1>
            }
            description={
                <p className="text-sm font-medium text-slate-900 tracking-tight whitespace-normal leading-tight">Loading the content from the db, please be patient</p>
            }
            />
        </Card>
       )}

       {data && (
        <React.Fragment>
             {data?.map((content : any, index : number) => (
           <motion.section initial={{
            opacity: 0,
            y: -100,
           }}
           key={index}
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
                  src={content?.image_url ?? ""}
                />
              }
            >
                <Meta
                    title={
                        <span className='font-semibold'>Result:  {content?.output === "Normal" ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>{content.output}</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] border border-red-600 text-red-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>{content?.output}</span>}
                         </span>
                    }
                    description={
                        <main className='flex flex-col gap-4'>
                            <h1 className='text-sm font-normal tracking-tight leading-tight'>{content?.description}</h1>
                            <main className="flex justify-between gap-4 flex-wrap items-center">
                            <p className='text-xs font-medium'>Author: <span className="hover:underline hover:translate-y-1 hover:scale-105 transition-all duration-200 ease-in-out active:-translate-y-1">
                                {content?.author ?? ""}
                                </span></p>

                            <main className="gap-3 flex flex-row items-center">
                                <Button color="blue" variant="outlined" size="small" onClick={showModal}>
                                    <EditOutlined />
                                </Button>
                                <DeleteCovid id={content?.id} />
                            </main>
                            </main>
                        </main>
                    }
                    style={{ width: '100%' }}
                />
            </Card>

            {!isPending && (
                <EditCovidModal content={content} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            )}
           </motion.section>
        ))}          
        </React.Fragment>
       )}
    </main>

    <main className="my-6 flex justify-center items-center w-full">
    <Pagination showQuickJumper defaultCurrent={1} total={isPending ? 0 : data?.length} onChange={onChange} />
    </main>
    </div>
  )
}

export default CovidOutputs
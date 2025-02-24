import {DeleteOutlined, EditOutlined, FolderViewOutlined} from '@ant-design/icons'
import { Button, message, Modal, Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';
import { useState } from "react";
import { LungCancerData } from '../types/app-types';
import { useCancerManual } from '../hooks/use-cancer';

const OutputActions = ({data, id} : {
    data : LungCancerData[]
    id : number
}) => {
    const currentData = data.filter((dat) => dat.id === id)[0];
    console.log(currentData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showModalEdit = () => {
        setIsEditModalOpen(true);
    };
    const {Delete} = useCancerManual();

    const confirm: PopconfirmProps['onConfirm'] = (e) => {
        console.log(e);
        Delete.mutateAsync(currentData.id.toString());
        message.success('Click on Yes');
      };
      
      const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        message.error('Click on No');
      };

  return (
    <main>
        <main className="gap-3 flex flex-row items-center">
            <Button color="cyan" variant="solid" size="small" onClick={showModal}>
                <FolderViewOutlined />
            </Button>
            <Button color="blue" variant="outlined" size="small" onClick={showModalEdit}>
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
        <Modal title="Patient Info." open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <main className='flex flex-col gap-3'>
                <h1 className='text-2xl font-semibold tracking-tight text-slate-900'>
                    <span className='text-cyan-700'>{currentData.age}</span> Year old {currentData.gender === "M" ? "Male" : "Female"}
                </h1>
                <p className='my-2 text-sm font-light text-slate-800 tracking-tight underline'>Overview:</p>
                
                <main className='grid grid-cols-2 gap-4'>
                <main className='flex flex-col gap-2'>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Alcholic: {currentData.alcohol_consuming === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Allergy: {currentData.allergy === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Has Anxiety: {currentData.anxiety === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Chest Pain: {currentData.chest_pain === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Chronic Disease: {currentData.chronic_disease === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Swallowing Difficulties: {currentData.swallowing_difficulty === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Has yellow fingers: {currentData.yellow_fingers === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                </main>
                <main className='flex flex-col gap-2'>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Coughing: {currentData.coughing === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Fatigue: {currentData.fatigue === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Peer Pressure: {currentData.peer_pressure === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Has short breaths: {currentData.shortness_of_breath === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Smoker: {currentData.smoking === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                    <p className='text-xs font-light text-slate-800 tracking-tight'>Has Wheezing: {currentData.wheezing === 1 ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Yes</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>No</span>}</p>
                </main>
                </main>

                <main className='flex flex-row justify-end items-center mb-3'>
                    <h1 className='text-2xl font-semibold'>Result:  {currentData.lung_cancer === "NO" ? <span className='bg-green-600/20 rounded-lg px-3 py-[1px] border border-green-600 text-green-600 cursor-pointer leading-[0px] ml-2 active:translate-y-1'>Normal</span> : <span className='bg-red-600/20 rounded-lg px-3 py-[1px] ml-2 border border-red-600 text-red-600 cursor-pointer active:translate-y-1 leading-0 '>Cancer</span>} </h1>
                </main>
            </main>
        </Modal>

        <Modal title="Edit Item" open={isEditModalOpen} onOk={() => setIsEditModalOpen(false)} onCancel={() => setIsEditModalOpen(false)}>
            <p>Some Edit contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </main>
  )
}

export default OutputActions
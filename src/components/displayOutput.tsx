import React from 'react';
import { Card } from 'antd';
import UploadModal from './upload-modal';

const { Meta } = Card;

const Outputs: React.FC = () => (
  <main>
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
                            <p className='text-xs font-medium'>Author: HR David</p>
                        </main>
                    }
                    style={{ width: '100%' }}
                />
            </Card>
        ))}
    </main>
  </main>
);

export default Outputs;
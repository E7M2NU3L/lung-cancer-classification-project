import { Card } from "antd"

const {Meta} = Card;

const Docs = () => {
  return (
    <div className="min-h-[90vh]">
         <main className='flex w-full items-center border border-gray-200 justify-between min-h-[10vh] gap-4 px-4'>
            <main className='flex flex-col max-w-2xl'>
                <h1 className='text-2xl font-medium tracking-tight'>
                    Documentation
                </h1>
                <p className='text-sm font-normal tracking-tight text-gray-500 leading-tight whitespace-normal'>An Overview on how i built the project, hwo well did the training and testing go, how i structured this app.</p>
            </main>
        </main>
        <main className="flex justify-center py-20 items-center h-full w-full">
            <Card>
                <Meta title={
                    <h1 className="text-lg font-medium tracking-tight">
                        Its still in building process...
                    </h1>
                } description="you can get back here and view how the project was built a bit later..." />
            </Card>
        </main>
    </div>
  )
}

export default Docs
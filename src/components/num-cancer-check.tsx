import LungCancerTable from "./output-table";
import CheckCancerManual from "./check-cancer-normal";

const NumCancerCheck = () => {
    return (
    <div>
        <main className='flex w-full md:items-center border border-gray-200 p-4 my-12 md:justify-between min-h-[10vh] gap-4 flex-col justify-start items-start '>
        <main className='flex flex-col max-w-2xl'>
            <h1 className='text-2xl font-medium tracking-tight'>
                Previous Submissions
            </h1>
            <p className='text-sm font-normal tracking-tight text-gray-500 leading-tight whitespace-normal'>go through previous submissions made by fellow HRs to test my applications workflow, feel free to test!</p>
        </main>

        <CheckCancerManual />
    </main>

    <LungCancerTable />
    </div>
  )
}

export default NumCancerCheck
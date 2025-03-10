import ModelTraining from "../components/model-training";
import DjangoAPI from "../components/django-apis";
import AxiosApi from "../components/axios-api";
import ReactHooksQueryImplementations from "../components/react-hooks-caching";
import DevOps from "../components/devOps";

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
        <main className="flex py-20 max-w-7xl mx-auto flex-col gap-6 h-full w-full px-4 md:px-0">
            <ModelTraining />
            <DjangoAPI />
            <AxiosApi />
            <ReactHooksQueryImplementations />
            <DevOps />
        </main>
    </div>
  )
}

export default Docs
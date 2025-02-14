import { Badge, Button } from "antd"
import {Link} from 'react-router-dom'
import Outputs from "../components/displayOutput"

const Home = () => {
  return (
    <div className="min-h-[90vh] max-w-7xl mx-auto px-4 md:px-0">
        <main className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="flex flex-row gap-1 items-center text-center justify-center border border-pink-500 max-w-[12vh] mx-auto rounded-2xl"><Badge color="magenta" />
                <p className="text-sm tracking-tight font-medium">AI Project</p>
            </div>
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Lung Cancer Classification System
            </h1>

            <p className="text-sm tracking-tight leading-tight text-gray-500">Built a Lung Cancer Classification System using CNN with TensorFlow and Keras, enabling accurate diagnosis from medical scans. Developed with Django, DRF, and React (Vite) for a seamless UI, integrating React Query, Ant Design, Framer Motion, and Tailwind CSS. Deployed with Docker and Appwrite Cloud Storage for scalability and security.</p>

            <main className="flex flex-row items-center justify-center gap-4">
                <Button color='magenta' variant='solid' size='small' className='rounded-xl'>
                    <Link to={"/docs"}>
                        Documentation
                    </Link>
                </Button>
                <Button color='magenta' variant='outlined' size='small'>
                    <Link to={"https://worlddelaemmanuel.vercel.app/"} target="_blank">
                        Portfolio
                    </Link>
                </Button>
            </main>
        </main>

        <main>
            <Outputs />
        </main>
    </div>
  )
}

export default Home
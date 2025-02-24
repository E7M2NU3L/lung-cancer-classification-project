import { Badge, Button, Card } from "antd"
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const {Meta} = Card;

const Code = () => {
  return (
    <div className="min-h-[90vh]">
         <main className='flex w-full items-center border border-gray-200 justify-between min-h-[10vh] gap-4 px-4'>
        <main className='flex flex-col max-w-2xl'>
            <h1 className='text-2xl font-medium tracking-tight'>
                Code
            </h1>
            <p className='text-sm font-normal tracking-tight text-gray-500 leading-tight whitespace-normal'>Go through the coding i did to showcase this running prototype.</p>
        </main>
    </main>
        
    <motion.main whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 260,
            damping: 20,
        }
    }}
    initial={{
        opacity: 0,
        scale: 0.9,
    }}
    className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full w-full max-w-7xl mx-auto">
        <Card
            cover={
                <img
                alt="example"
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1739532964~exp=1739536564~hmac=4d9da260c2ddefa63746de48fd11452688aadcbf0c4e93dff1e47c5b6efe0853&w=740"
                className="h-[30vh] object-cover"
                />
            }
            >
                <Meta
                    title={
                        <h1 className='text-lg font-medium tracking-tight'>
                            Frontend: <Badge color="blue" /> <span className="text-blue-500">React</span>
                        </h1>
                    }
                    description={
                        <main className='flex flex-col gap-4'>
                            <h1 className='text-sm font-normal tracking-tight leading-tight'>
                                Built with React (Vite) and TypeScript, leveraging React Query for efficient state management, Tailwind CSS for styling, Ant Design for UI components, Framer Motion for animations, and Axios for API handling.
                                </h1>

                            <Button size="small" color="blue" variant="solid">
                                <Link to="https://github.com/E7M2NU3L/lung-cancer-classification-project.git" target="_blank">Frontend Repo</Link>
                            </Button>
                        </main>
                    }
                    style={{ width: '100%' }}
                />
        </Card>

        <Card
            cover={
                <img
                alt="example"
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149242070.jpg?t=st=1739532984~exp=1739536584~hmac=f01b3a1bebd04f87b922c60db2feb43500ec0a066f7936a5387d8893848f179b&w=740"
                className="h-[30vh] object-cover"
                />
            }
            >
                <Meta
                    title={
                        <h1 className='text-lg font-medium tracking-tight'>
                            Backend: <Badge color="green" /> <span className="text-green-500">Django</span>
                        </h1>
                    }
                    description={
                        <main className='flex flex-col gap-4'>
                            <h1 className='text-sm font-normal tracking-tight leading-tight'>  
                                Powered by Django and Django REST Framework, with TensorFlow and Keras for deep learning, OpenCV for image processing, and Django CORS Headers for secure API communication.  
                            </h1>

                            <Button size="small" color="green" variant="solid">
                                <Link to="https://github.com/E7M2NU3L/lung_cancer_detector.git" target="_blank">Backend Repo</Link>
                            </Button>
                        </main>
                    }
                    style={{ width: '100%' }}
                />
        </Card>

        <Card
            cover={
                <img
                alt="example"
                src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?t=st=1739533022~exp=1739536622~hmac=f03196e2fa3daa19cd82aa9b683f6cb31308c19de942c443b2d1afecb87de564&w=740"
                className="h-[30vh] object-cover"
                />
            }
            >
                <Meta
                    title={
                        <h1 className='text-lg font-medium tracking-tight'>
                            ML APIs: <Badge color="orange" /> <span className="text-orange-500">Jupyter Notebook</span>
                        </h1>
                    }
                    description={
                        <main className='flex flex-col gap-4'>
                            <h1 className='text-sm font-normal tracking-tight leading-tight'>  
                                Developed and tested in Jupyter Notebook using TensorFlow, Keras, OpenCV, NumPy, Matplotlib, and Scikit-Learn for data preprocessing, and model evaluation.  
                            </h1>
                            <Button size="small" color="orange" variant="solid">
                                <Link to="https://github.com/E7M2NU3L/lung_cancer_detector/tree/master/test" target="_blank">View Evaluations</Link>
                            </Button>
                        </main>
                    }
                    style={{ width: '100%' }}
                />
        </Card>
    </motion.main>
    </div>
  )
}

export default Code
import {Link} from 'react-router-dom';
import {Button, Tooltip} from 'antd';

const Navbar = () => {
  return (
    <div className="min-h-[10vh] flex flex-row justify-between items-center px-4">
        <Tooltip title="Computer Vision Project">
        <Link to={"/"}>
            <h1 className="text-lg font-medium tracking-tight"><span className="text-blue-500">C</span><span className="text-orange-500">V</span></h1>
        </Link>
        </Tooltip>

        <main className='flex flex-row gap-3 items-center'>
            <Button color='magenta' variant='solid' size='small' className='rounded-xl'>
                <Link to={"/docs"}>
                    Docs
                </Link>
            </Button>
            <Button color='magenta' variant='outlined' size='small'>
                <Link to={"/code"}>
                    Code
                </Link>
            </Button>
        </main>
    </div>
  )
}

export default Navbar
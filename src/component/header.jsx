import dp from '../assets/dp.jpg'
import {FiSettings} from 'react-icons/fi'

const Header = ( { loggeduser } ) => {
    console.log(loggeduser)
    return ( 
        <div className="flex items-center justify-between bg-[#00a4ea80] sticky h-[10%]">
            <div className="w-[60px] h-[60px]  rounded-full m-1" >
                <img src={dp} alt="dp" className='w-full h-full rounded-full' />
            </div>
            <div className='' >
                <h2 className='font-semibold text-[24px]'>InBox</h2>
            </div>
            <div>
                <button className='mx-1 p-1 '><FiSettings className='text-[30px]'/></button>
            </div>
        </div>
     );
}
 
export default Header;
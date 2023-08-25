import { BiMessage, BiGroup, BiTargetLock, BiPlayCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="h-[9%]  static flex items-center justify-evenly">
            <NavLink to='/InBox' className='active:bg-transparent rounded-full p-1 focus:bg-transparent focus:text-blue-800'> <BiMessage className='text-[30px]  font-bold '/></NavLink>
            <NavLink to='/groups' className='active:bg-transparent rounded-full p-1 focus:bg-transparent focus:text-blue-800'> <BiGroup className='text-[30px] font-bold '/></NavLink>
            <NavLink to='/target' className='active:bg-transparent rounded-full p-1 focus:bg-transparent focus:text-blue-800'> <BiTargetLock className='text-[30px] font-bold '/></NavLink>
            <NavLink to='/reels' className='active:bg-transparent rounded-full p-1 focus:bg-transparent focus:text-blue-800'> <BiPlayCircle className='text-[30px] font-bold '/></NavLink>
        </nav>
     );
}
 
export default NavBar;
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ Cpassword, setCPassword ] = useState( '' )

    const navigate = useNavigate()

    const register = async ( e ) => {
        e.preventDefault()
        navigate("/login")
    }

    return ( 
        <div className=" flex flex-col md:flex-row items-center justify-center w-[100%] h-[100%]  ">
            <div className="w-[100%] md:w-[30%] bg-signup h-fit md:h-[100%] bg-no-repeat bg-center bg-[#F1F1E6]  md:bg-[#00a4ea9b] bg-blend-overlay  md:flex">
                <div className='hidden md:flex py-4 md:py-0 flex-col  items-center justify-center text-center w-[100%] font-semibold text-[24px] space-y-11 my-auto  md:text-[#EEFCFF] '>
                    Meet friends In Box<br /> Chat <br /> Share State <br /> Have Fun
                    <p className='text-[16px] md:text-[#EEFCFF] lowercase'>InBox. My Place.</p>
                </div>
            </div>
            <div className="w-[100%] md:w-[70%] md:bg-[#F1F1E6] h-[100vh] bg-signup bg-center  bg-no-repeat bg-w-[100%] bg-[#00a4ea9b] bg-blend-lighten flex flex-col items-center justify-around ">
                <div className='flex md:hidden  md:py-0 flex-col  items-center justify-evenly text-center w-[100%] font-semibold text-[24px] space-y-11 my-auto  md:text-[#EEFCFF] mb-auto'>
                    Meet friends In Box<br /> Chat <br /> Share State <br /> Have Fun
                    <p className='text-[16px] md:text-[#EEFCFF] lowercase'>InBox. My Place.</p>
                </div>
                <h2 className='text-[24px] font-bold text-[#F1F1E6] md:text-[#00A4EA] m-auto'>In Box</h2>
                <form onSubmit={(e)=>{register(e)}} className='flex flex-col items-center justify-evenly w-[70%] m-auto' >
                                        
                    <label className='font-semibold  text-[20px]' htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="email"
                        value={ email }
                        onChange={ (e)=> setEmail(e.target.value) }
                        className="md:w-[60%] md:bg-[#00a4ea8b] focus:outline-none px-2 py-1 text-[16px] rounded-md   " />
                    <label className='font-semibold  text-[20px]' htmlFor="password">Set Password</label>
                    <input
                        id='password'
                        type="password"
                        value={password}
                        onChange={ (e)=> setPassword(e.target.value) }
                        className="md:w-[60%] md:bg-[#00a4ea8b] focus:outline-none px-2 py-1 text-[16px] rounded-md " />
                    <label className='font-semibold  text-[20px]' htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id='Cpassword'
                        type="Cpassword"
                        value={Cpassword}
                        onChange={ (e)=> setCPassword(e.target.value) }
                        className="md:w-[60%] md:bg-[#00a4ea8b] focus:outline-none px-2 py-1 text-[16px] rounded-md " />
                    
                   
                    <div className="mt-6">
                        <button  ><input type="submit" value="signup" className="border text-[18px] hover:bg-[#91a8b2] p-1 bg-[#00A4EA]" /></button>
                    </div>
                <p>Have an Account? <a href="/login" className='text-white font-mono md:white md:text-blue-700 '>Log In</a></p>
                </form>
            </div>
        </div>
     );
}
 
export default Signup;
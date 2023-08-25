import dp from '../assets/official.jpg'

const Reals = () => {
    return ( 
        <div className="w-[100%] h-[91%] bg-inbox bg-cover overflow-scroll bg-center bg-blend-overlay bg-[#00a4ea52] flex-col">
            <div className="flex items-center bg-[#003f5287] h-[10%]">
                <div className="w-[60px] h-[60px]  rounded-full m-1 p-1">
                    <img src={ dp } alt="dp" className='w-full h-full rounded-full' />
                </div>
                <h2>Username</h2>
            </div>
            <div className="h-[90%] bg-slate-800">
                
            </div>
        </div>
     );
}
 
export default Reals;
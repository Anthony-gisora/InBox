import dp1 from '../assets/official.jpg'

const MessageFeed = () => {
    return ( 
        <div className="flex flex-row border-t mt-2 py-4 border-b border-[#003F52] items-center mx-auto justify-between w-[98%]">
            <div className="flex flex-row items-center justify-start w-[100%]">
                <div className="w-[50px] h-[50px]  rounded-full m-1">
                    <img src={dp1} alt="" className="w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col w-fit px-1">
                    <div className="font-semibold text-lg">
                        username
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
            <div className="mx-1 p-0.5 text-blue-300">
                time
            </div>
        </div>
     );
}
 
export default MessageFeed;
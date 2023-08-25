import MessageFeed from "../component/messagefFeed";
import { FaFacebookMessenger } from 'react-icons/fa'

const Groups = () => {
    return ( 
        <div className="md:flex w-[100%] h-[81%] bg-inbox bg-cover overflow-y-scroll md:overflow-hidden bg-center bg-blend-overlay bg-[#00a4ea52]">
            <div className="w-[100%] md:w-[35%] md:overflow-y-scroll  md:border-r-4 border-r-[#003F52] md:p-1">
                <MessageFeed />
                <MessageFeed />
                <MessageFeed />
                <MessageFeed />
                <MessageFeed />
                group
            </div>
            <div className="hidden md:flex w-[65%] md:items-center md:justify-center md:text-[100px] md:bg-slate-800 md:bg-blend-different">
                <FaFacebookMessenger />
            </div>
        </div>
     );
}
 
export default Groups;
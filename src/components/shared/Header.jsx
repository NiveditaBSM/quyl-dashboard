import { RiSearchLine } from "react-icons/ri";
import { LuCircleHelp, LuSettings2 } from "react-icons/lu";
import { PiChatDots } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";
import UserPhoto from "../../assets/images/user.png";

const Header = () => {
    const username = "Adeline H. Dancy";
    return (
        <div className="flex justify-between items-center h-12 ml-5 mr-5 mt-5 rounded-md">

            <div className="relative w-1/2">
                <RiSearchLine fontSize={18} className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-400" />
                <input type="text" placeholder="Search your course" className="text-sm h-12 w-[100%] bg-white px-12 focus:outline-none active:outline-none rounded-lg text-gray-500 font-medium leading-tight"></input>
            </div>

            <div className="flex justify-between items-center gap-10">
                <LuCircleHelp fontSize={24} className="text-gray-500" />
                <div className="relative">
                    <PiChatDots fontSize={24} className="text-gray-500" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
                </div>
                <LuSettings2 fontSize={24} className="text-gray-500" />
                <div className="relative">
                    <VscBell fontSize={24} className="text-gray-500" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
                </div>
                <div className="flex items-center gap-5">
                    <img src={UserPhoto} />
                    <div className="font-bold" style={{ color: '#05162E' }}>{username}</div>
                </div>
            </div>

        </div>
    );
}
export default Header;
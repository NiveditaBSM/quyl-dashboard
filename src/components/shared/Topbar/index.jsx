import { FaSearch, FaBell, FaCog, FaQuestionCircle } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="topBar mt-5 mr-5  flex items-center justify-evenly ">
            <div className="searchBar flex items-center h-12 w-1/2">
                {/* <FaSearch className="mr-2" /> */}
                <input type="text" placeholder="Search..." className="w-[100%] p-2 rounded border border-gray-400">
                </input>
            </div>
            <div className="flex items-center">
                <FaQuestionCircle className="ml-5 cursor-pointer" />
                <FaBell className="ml-5 cursor-pointer" />
                <FaCog className="ml-5 cursor-pointer" />
            </div>
            <div className="flex items-center">
                <img src="path/to/profile/photo.jpg" alt="User Profile" className="w-10 h-10 rounded-full mr-2" />
                <span className="font-bold">User Name</span>
            </div>
        </div>
    );
};

export default TopBar;

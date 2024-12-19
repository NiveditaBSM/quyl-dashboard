import Logo from "../../../assets/quyl.svg";
import OptionItem from "./OptionItem";
import { RiDashboard3Line, RiBookReadFill, RiBookMarkedLine } from "react-icons/ri"
import { LuCircleHelp } from "react-icons/lu";
import { HiOutlineChartPie } from "react-icons/hi2";
import { TbSettings2 } from "react-icons/tb";


const optionList = [
    {
        iconName: RiDashboard3Line,
        name: "Dashboard",
        url: "#",
    },
    {
        iconName: RiBookReadFill,
        name: "Students",
        url: "#",
    },
    {
        iconName: RiBookMarkedLine,
        name: "Chapter",
        url: "#",
    },
    {
        iconName: LuCircleHelp,
        name: "Help",
        url: "#",
    },
    {
        iconName: HiOutlineChartPie,
        name: "Reports",
        url: "#",
    },
    {
        iconName: TbSettings2,
        name: "Settings",
        url: "#",
    },

]
const Sidebar = () => {
    return (
        <div className="sidebar fixed top-0 left-0 z-[100] w-[20%]">
            <div className="logoWrapper ml-4 mt-10 h-11 w-24 right-20">
                <img src={Logo} ></img>
            </div>
            <div className="flex justify-center mt-8">
                <div className="sidebarTabs gap-3 w-[95%]" >

                    <div className="options w-100 justify-center">
                        {optionList.map(item => (
                            <OptionItem key={item.name} Icon={item.iconName} name={item.name} />
                        ))}
                        {/* <OptionItem Icon={RiDashboard3Line} name="Dashboard" />
                        <OptionItem Icon={RiDashboard3Line} name="Dashboard" /> */}
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Sidebar
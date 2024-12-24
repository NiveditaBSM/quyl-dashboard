import {
    RiDashboard3Line,
    RiBookReadFill,
    RiBookMarkedLine
} from "react-icons/ri"
import { LuCircleHelp } from "react-icons/lu";
import { HiOutlineChartPie } from "react-icons/hi2";
import { TbSettings2 } from "react-icons/tb";


export const SIDEBAR_LINKS = [
    {
        iconName: RiDashboard3Line,
        name: "Dashboard",
        url: "/dashboard",
    },
    {
        iconName: RiBookReadFill,
        name: "Students",
        url: "/students",
    },
    {
        iconName: RiBookMarkedLine,
        name: "Chapter",
        url: "/chapter",
    },
    {
        iconName: LuCircleHelp,
        name: "Help",
        url: "/help",
    },
    {
        iconName: HiOutlineChartPie,
        name: "Reports",
        url: "/reports",
    },
    {
        iconName: TbSettings2,
        name: "Settings",
        url: "/settings",
    },

]
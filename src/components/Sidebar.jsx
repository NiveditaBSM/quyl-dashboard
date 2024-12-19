import React from "react";
import Logo from "../assets/quyl.svg";
import Button from "@mui/material/Button";
import { RiDashboard3Line } from "react-icons/ri"

const Sidebar = () => {
    return (
        <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
            <div className="logoWrapper ml-2 mt-8 h-11 w-24 right-20">
                <img src={Logo} ></img>
            </div>

            <div className="sidebarTabs" >
                <Button className="w-100"> 
                    <span className="icon mr-3 w-[25px] h-[25px] flex items-center justify-center rounded-md"></span>
                    Dashboard
                </Button>
                
            </div>

        </div>
    )
}

export default Sidebar
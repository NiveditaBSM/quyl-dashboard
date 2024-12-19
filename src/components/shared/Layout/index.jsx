import Sidebar from "../Sidebar";
import TopBar from "../Topbar";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <section className='main flex'>
            <div className='sidebarWrapper w-[20%]'>
                <Sidebar />
            </div>
            <div className='rightContentWrapper w-[80%]'>
                <TopBar />
                <div>{<Outlet />}</div>
            </div>
        </section>
    );
}

export default Layout;
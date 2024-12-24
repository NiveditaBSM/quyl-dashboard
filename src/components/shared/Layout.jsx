import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <section className='main flex flex-row h-screen w-screen overflow-hidden'>
            <Sidebar className='sidebar' />
            <div className='rightContentWrapper w-5/6'>
                <Header />
                <Outlet />
            </div>
        </section>
    );
}

export default Layout;
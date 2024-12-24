import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/quyl.svg";
import { SIDEBAR_LINKS } from "../../lib/const/navigation";
import PropTypes from 'prop-types';
import classNames from "classnames";

const Sidebar = () => {
    return (
        <div className=" w-72 p-3 flex-col flex bg-white">
            <div className="flex">
                <img className="h-10 w-24 mt-8" src={Logo} ></img>
            </div>
            <div className="flex-1 mt-5 gap-2">
                {SIDEBAR_LINKS.map(item => (
                    <SidebarLink key={item.name} item={item} />
                ))}
            </div>
            <div>
                {/* create theme changer here */}
            </div>
        </div>
    )
}

export default Sidebar;

const linkClasses = "sidebarLink flex items-center gap-3 px-4 py-4 rounded-md";

const SidebarLink = ({ item }) => {
    const { pathname } = useLocation();

    return (
        <Link to={item.url} className={classNames(pathname === item.url ? 'activeSidebarLink' : '', linkClasses)}>
            <span className="text-xl"> <item.iconName /> </span>
            {item.name}
        </Link>
    )
}

SidebarLink.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        iconName: PropTypes.elementType.isRequired,
    }).isRequired,
};


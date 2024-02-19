import {Link, useLocation} from "react-router-dom";
import "./index.css"
import {
        FaTachometerAlt,  
        FaBook, 
        FaRegCalendarAlt, 
        FaInbox, 
        FaHistory, 
        FaUserCircle, 
        FaSignOutAlt, 
        FaQuestionCircle, 
        FaYoutube
    } from "react-icons/fa";
function KanbsNavigation(){
    const links=[
        {label: "Account", icon: <FaUserCircle className="fs-2 "/>},
        {label: "Dashboard", icon: <FaTachometerAlt className="fs-2 text-danger"/>},
        {label: "Courses", icon: <FaBook className="fs-2 text-danger"/>},
        {label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 text-danger"/>},
        {label: "Inbox", icon: <FaInbox className="fs-2 text-danger"/>},
        {label: "History", icon: <FaHistory className="fs-2 text-danger"/>},
        {label: "Studio", icon: <FaYoutube className="fs-2 text-danger"/>},
        {label: "Commons", icon: <FaSignOutAlt className="fs-2 text-danger"/>},
        {label: "Help", icon: <FaQuestionCircle className="fs-2 text-danger"/>},
    ];

    const {pathname}= useLocation();
    return (
        <div className="d-none d-md-block bg-dark">
            <ul className="wd-kanbas-navigation full-height" style={{backgroundColor:"black"}}>
            
                <li>
                    <Link to="https://www.northeastern.edu">
                        <img 
                        src="/images/NEU_Logo.png"
                        width={70}
                        className="navbar-logo"/>
                        
                    </Link>
                </li>

                {links.map((link,index) =>(
                    <li key={index} className={pathname.includes(link.label)?"wd-active":""}>
                        <Link to={`/Kanbas/${link.label}`}>{link.icon}<br/> {link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}

export default KanbsNavigation;
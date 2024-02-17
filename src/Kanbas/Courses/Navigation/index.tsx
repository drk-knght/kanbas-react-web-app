import {Link, useLocation} from "react-router-dom";
import "./index.css"
 function CourseNavigation(){
    const links=[
                "Home", "Modules", "Piazza", 
                "Zoom", "Assignments","Quizzes", 
                "Grades", "People", "Panopto Video",
                "Discussions", "Announcements", "Pages",
                "Files", "Rubrics", "Outcomes", 
                "Collaborations", "Syllabus", "Settings"
            ];
    
    const {pathname}=useLocation();

    return (
        <ul className="d-none d-md-block wd-navigation">
            {links.map((link,index) =>(
                <li key={index} className={pathname.includes(encodeURI(link)) ? "wd-active":""}>
                    <Link to={link}>{link}</Link>
                </li>
            ))}
        </ul>
    );
 }

 export default CourseNavigation;
import {Link, useLocation, useParams} from "react-router-dom";
import { courses } from "../../Database";
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
    const {courseId}=useParams();
    const course=courses.find(course =>course._id === courseId);
    return (
        <div>
            <div className="d-none d-md-block">
                <div className="ps-5 mb-3 w-10 fs-12"><em className="course-description">{course?.description}</em></div>
            
                <ul className="wd-navigation">
                    {links.map((link,index) =>(
                        <li key={index} className={pathname.includes(encodeURI(link)) ? "wd-active":""}>
                            <Link to={link}>{link}</Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
 }

 export default CourseNavigation;
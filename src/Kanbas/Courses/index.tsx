import {courses} from "../../Kanbas/Database";
import {useParams, Navigate, Route, Routes, Link} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import {PiEyeglasses} from "react-icons/pi";
import CourseNavigation from "./Navigation";
import SmallNav from "./Navigation/SmallNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Grades from "./Grades";
import AssignmentEditor from "./Assignments/Editor";
import "./index.css"

function Courses(){
  const {courseId}=useParams();
  const course=courses.find((course) => course._id===courseId);
  const href= window.location.href;
  const splitHref=href.split("/");
  const breadcrumbText=splitHref[splitHref.length-1]==="Home" ? 
                      ["Modules"]: splitHref.at(-2)=="Assignments" ?
                      [splitHref.at(-2), splitHref.at(-1)] : [splitHref.at(-1)];
  return(

    <div>

      <div className="d-none d-md-block mx-3 p-2">
        
        <div className="d-flex align-items-center custom-breadcrumb breadcrumb-border">
          
          <HiMiniBars3 className="text-danger cursor-pointer mr-5" 
          style={{fontSize:"24px"}}/>

          <ol className="breadcrumb align-self-center pt-3 fs-20">

            <li className="breadcrumb-item">
              <Link to={`/Kanbas/Courses/${courseId}/Home/`} className="link-danger remove-underline">
                {course?.name}
              </Link>
            </li>
            {
              breadcrumbText.map(text =>(
                <li key={text} className="breadcrumb-item">{text?.replace(/%20/g, " ")}</li>
              ))
            }

          </ol>

          <button className="btn btn-light ms-auto d-flex justify-content-center align-items-center">
            <PiEyeglasses className="mr-1"/>
            Student View
          </button>

        </div>

      </div>
      <SmallNav/>
      <CourseNavigation/>
      <div>
        <div className="window-container" >

          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;
// import {Link} from "react-router-dom";
// import Nav from "../Nav"
import store from "./store";
import { Provider } from "react-redux";
import KanbsNavigation from "./Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard"
import Courses from "./Courses";
import { useState } from "react";
import db from "./Database";

function Kanbas(){
    const [courses, setCourses]=useState(db.courses);
    const [course,setCourse] = useState({
        _id:"0", name:"New Course", title: "New Course Title",
        description:"New course Description", number:"New Number",
        startDate:"2023-09-10", endDate:"2023-12-15",
        image:"/images/reactjs.jpg"
    });
    const deleteCourse=(courseId: string)=>{
        setCourses(courses.filter((course)=>course._id!==courseId));
    }
    const addNewCourse=()=>{
        const newCourse= { ...course, 
                        _id:new Date().getTime().toString()};
        setCourses([...courses, { ...course, ...newCourse }]);
    };
    const updatecourse=()=>{
        setCourses(
        courses.map((c)=>{
            if(c._id=== course._id){
            return course;
            }
            else {
            return c;
            }
        })
        );
    };
    return(
        <Provider store={store}>
            <div className="d-flex">
                {/* <Link to="/Labs/a3">A3</Link> |
                <Link to="/Kanbas">Kanbas</Link> |
                <Link to="/hello">Hello</Link> | */}
                {/* <Nav/> */}
                {/* <div>
                    <h1>Kanbas</h1>
                </div> */}
                <KanbsNavigation/>
                <div style={{flexGrow:1}}>
                    {/* <h1>Account</h1>
                    <h1>Dashboard</h1>
                    <h1>Courses</h1> */}
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard 
                        course={course}
                        courses={courses}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updatecourse}/>} />
                        <Route path="Courses/*" element={<h1>Courses</h1>} />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Kanbas;
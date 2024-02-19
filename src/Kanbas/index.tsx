// import {Link} from "react-router-dom";
// import Nav from "../Nav"
import KanbsNavigation from "./Navigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard"
import Courses from "./Courses";

function Kanbas(){
    return(
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
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/*" element={<h1>Courses</h1>} />
                    <Route path="Courses/:courseId/*" element={<Courses/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;
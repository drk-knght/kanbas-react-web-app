import React from "react";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaPencilAlt} from "react-icons/fa";
import {PiNotePencil} from "react-icons/pi";
import {Link, useParams} from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"

function Assignments(){
    const {courseId}= useParams();
    const assignmentList=assignments.filter(
        (assignment) => assignment.course ===courseId); 
    
        return (
            <>
                <div className="d-flex w-100 px-2">
                    <div className="flex-fill">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-self-center w-25">
                                <input type="text"
                                    className="form-control d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2"
                                    placeholder="Search Assignments" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                            <div>
                                <button className="btn btn-light m-1">
                                    + Group
                                </button>
                                <button className="btn btn-danger m-1">+ Assignment</button>
                                <button className="btn btn-light m-1"><FaEllipsisV className="fs-20"/></button>
                            </div>
                        </div>
                        <hr/>
                        <ul className="list-group wd-modules me-4 mt-4">
                            <li className="list-group-items">
                                <div className="module-header py-3">
                                    <span className="me-2 ms-1">
                                        <FaEllipsisV className="fs-20"/>
                                        <FaEllipsisV className="fs-20" style={{marginLeft:-13}}/>
                                    </span>
                                    <div className="d-inline-flex align-items-center justify-content-center">
                                        <button className="btn dropdown-toggle me-2"/>
                                        <span className="fw-bold cursor-pointer">Assignments</span>
                                    </div>
                                    <span className="float-end pe-3">
                                        <span className="border-dark-subtle rounded-pill fs-12 border p-2">
                                            40% of Total
                                        </span>
                                        <i className="me-2 ms-1 cursor-pointer"/>
                                        <FaEllipsisV className="fs-20 ms-2 cursor-pointer"/>
                                    </span>
                                </div>
                                <ul className="list-group">
                                    {assignmentList.map((assignment)=>{
                                        return (
                                            <li key={assignment._id} className="list-group-items assignment-li">
                                                <div className="module-content fw-bold d-flex justify-content-center align-itmes-center ms-1 py-2">
                                                    <FaEllipsisV className="fs-20"/>
                                                    <FaEllipsisV className="fs-20" style={{marginLeft:-13}}/>
                                                    <PiNotePencil className="text-success fs-24 mx-4"/>
                                                    <span className="w-300 me-auto">
                                                        <Link 
                                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                        className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                                                            {assignment.title}
                                                        </Link>
                                                        <br/>
                                                        <Link 
                                                        to="#"
                                                        className="fw-normal fs-12 link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                                                            Multiple Modules
                                                        </Link>
                                                        <span className="fw-normal fs-16"> | </span>
                                                        <span className="fw-normal fs-12">
                                                            {!! assignment.notAvailableBefore && (
                                                                <span>
                                                                    <span className="fw-bold">Not available until</span> {" "}{assignment.notAvailableBefore}
                                                                    <span className="fw-normal fs-16"> | </span>

                                                                </span>
                                                            )}
                                                            <span className="fw-bold">Due</span> {assignment.dueDate}
                                                            <span className="fw-normal fs-16"> | </span> Points: {assignment.totalPoints}
                                                        </span>
                                                    </span>
                                                    <span className="pe-3">
                                                        <FaCheckCircle className="text-success fs-20 me-3 cursor-pointer"/>
                                                        <FaEllipsisV className="fs-20 ms-2 cursor-pointer"/>
                                                    </span>

                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </>
        );
}

export default Assignments;
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
                        <ul className="list-group wd-modules mt-4">
                            <li className="list-group-items">
                                <div className="module-header py-3">
                                    <span className="me-2 ms-1">
                                        <FaEllipsisV className="fa fa-ellipsis-v fs-20" style={{marginRight:-10}}/>
                                        <FaEllipsisV className="fa fa-ellipsis-v fs-20 ml-n3"/>
                                    </span>
                                    <div className="d-inline-flex align-items-center justify-content-center">
                                        <button className="btn dropdown-toggle me-2"></button>
                                        <span className="fw-bold cursor-pointer">Assignments</span>
                                    </div>
                                    <span className="float-end pe-3">
                                        <span className="border border-dark-subtle rounded-pill p-2 fs-12">40% of
                                            Total</span>
                                            <FaPlus className="fa fa-plus ms-1 me-2 cursor-pointer"/>
                                            <FaEllipsisV className="fa fa-ellipsis-v ms-2 fs-20 cursor-pointer"/>
                                    </span>
                                </div>
                                <ul className="list-group">
                                    {assignmentList.map((assignment)=>(
                                        <li className="list-group-items assignment-li">
                                            <div className="module-content fw-bold py-2 d-flex justify-content-center align-items-center ms-1">
                                                <FaEllipsisV className="fs-20" style={{marginRight:-13}}/>
                                                <FaEllipsisV className="fs-20"/>
                                                <PiNotePencil className="mx-4 text-success fs-24"/>
                                                <span className="me-auto">
                                                    <Link 
                                                    to= {`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                    className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
                                                        {assignment.title}
                                                    </Link>
                                                    <br />
                                                    <span className="fw-normal fs-12">Week 0 SETUP - Week
                                                        starting from Monday September 5th (9/5/2022) Module |</span>
                                                    <br />
                                                    <span className="fw-normal fs-12"><span className="fw-bold">Due</span> Sep 18,
                                                        2022 at 11.59pm |
                                                        100pts
                                                    </span>
                                                </span>
                                                <span className="pe-3">
                                                    <FaCheckCircle className="text-success me-3 fs-20 cursor-pointer"/>
                                                    <FaEllipsisV className="ms-2 fs-20 cursor-pointer"/>
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
}

export default Assignments;
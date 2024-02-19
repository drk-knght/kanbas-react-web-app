import React, {useState} from "react";
import "./index.css";
import {modules} from "../../Database"
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const {courseId}=useParams();
    const modulesList=modules.filter((module)=> module.course === courseId);
    const [selectedModule,setSelectedModule] = useState(modulesList[0]);
    
    return (
        
        <div className="flex-fill pe-5">
            <div className="d-flex justify-content-end">
                <button className="btn btn-light m-1">Collapse All</button>
                <button className="btn btn-light m-1">View Progress</button>
                <button className="btn btn-light dropdown-toggle m-1">
                    <FaCheckCircle className="text-success fs-20 mr-5"/>
                    Publish All
                </button>
                <button className="btn btn-danger m-1">+ Module</button>
                <button className="btn btn-light m-1"><FaEllipsisV/></button>
            </div>
            <hr/>
            <ul className="list-group wd-modules mt-4">
                {modulesList.map(module =>(
                    <li 
                    className="list-group-items"
                    onClick={() => setSelectedModule(module)}>
                        <div className="module-header py-3">

                            <span className="me-2 ms-1 cursor-pointer">
                                <FaEllipsisV className="fs-20"/>
                            </span>

                            <div className="d-inline-flex align-items-center justify-content-center">
                                <button className="btn dropdown-toggle me-2"></button>
                                <span className="fw-bold cursor-pointer">{module.name}</span>
                            </div>

                            <span className="float-end pe-2">
                                <button className="dropdown-toggle bg-transparent me-3 d-inline-flex align-items-center justify-content-center">
                                    <FaCheckCircle className="text-success fs-20"/>
                                </button>
                                <FaPlusCircle className="me-3 fs-20 cursor-pointer grey-color"/>
                                <FaEllipsisV className="ms-2 fs-20 cursor-pointer"/>
                            </span>
                            
                        </div>
                        {selectedModule._id==module._id && (
                            <ul className="list-group">
                                {module.lessons?.map(lesson=> (
                                    <li className="list-group-items module-li">
                                        <div className="module-content py-2">
                                            <span className="me-2 ms-1">
                                                <FaEllipsisV className="fs-20" style={{marginRight:-13}}/>
                                                <FaEllipsisV className="fs-20 me-2"/>
                                            </span>
                                            {lesson.name}
                                            <span className="float-end pe-2">
                                                <FaCheckCircle className="text-success me-3 fs-20 cursor-pointer"/>
                                                <FaEllipsisV className="ms-2 fs-20 cursor-pointer"/>
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ModuleList;
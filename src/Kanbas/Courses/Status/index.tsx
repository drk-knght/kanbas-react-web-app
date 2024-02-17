import React from "react";
import { FaRegCalendarAlt,FaBan, FaCheckCircle ,FaCircle,FaTimes,FaSignInAlt, FaCrosshairs,FaChartBar,FaBullhorn,FaBell } from "react-icons/fa";
import {LiaSignInAltSolid} from "react-icons/lia";
import "./index.css"


function Status(){
    return (
        
            <div className="flex-grow-0 me-2 d-none d-lg-block pe-4 ms-2" style={{width: "320px"}}>
                <h4>Course Status</h4>
                <div className="btn-group ms-1 mb-3" aria-label="Basic example">
                    <button type="button" className="btn btn-light rounded-0">
                        <FaBan/>
                        Unpublish
                    </button>
                    <button type="button" className="btn btn-success rounded-0">
                        <FaCheckCircle/>
                        Published
                    </button>
                </div>
            
                
                <div className="container text-center">
                    <div className="row">
                        <button className="btn btn-light m-1 text-start">
                            <FaSignInAlt className="mr-5"/>
                            Import Existing Content
                        </button>
                        <button className="btn btn-light m-1 text-start">
                            <LiaSignInAltSolid className="mr-5"/>
                            Import From Commons
                        </button>
                        <button className="btn btn-light m-1 text-start">
                            <FaCrosshairs className="mr-5"/>
                            Choose Home Page
                        </button>
                        <button className="btn btn-light m-1 text-start">
                            <FaChartBar className="mr-5"/>
                            View Course Stream
                        </button>
                        <button className="btn btn-light m-1 text-start">
                            <FaBullhorn className="mr-5"/>
                            New Announcements
                        </button>
                        <button className="btn btn-light m-1 text-start">
                            <FaChartBar className="mr-5"/>
                            New Analytics
                        </button>
                        <button className="btn btn-light m-1 text-start">
                            <FaBell className="mr-5"/>
                            View Course Notification
                        </button>
                    </div>
                </div>
                
                {/* !-- To Do -- */}
                <div className="mt-3 px-2">
                    <h6 className="fw-bold">To Do</h6>
                    <hr />
                    <div className="d-flex">
                        <div className="todo-1">
                            1
                        </div>

                        <div className="ms-4 me-auto fs-12" style={{color: "gray"}}>
                            <a href="#"
                                className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                Grade A1 - ENV + HTML
                                <br />
                            </a>
                            100 points
                            <FaCircle className="fs-8 m-1"/>
                            Sep 18 at 11:59 pm
                        </div>
                        <FaTimes className="pe-1 fs-13 grey-color"/>
                    </div>
                </div>

                <div className="mt-4 px-2">
                    <div className="d-flex justify-content-between">
                        <h6 className="fw-bold">Coming Up</h6>
                        <div>
                            <FaRegCalendarAlt />
                            <a href="#"
                                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-12">View
                                Calendar</a>
                        </div>
                    </div>
                    <hr />
                    <div className="mb-4 d-flex">
                        <FaRegCalendarAlt/>

                        <div className="ms-4 fs-12 grey-color">
                            <a href="#"
                                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                Lecture
                                <br />
                                <span className="grey-color">CS5610.48102.99291</span>
                                <br />
                                <span className="grey-color">Sep 11 at 6pm</span>
                            </a>
                        </div>
                    </div>
                    <div className="my-2 d-flex">
                        <FaRegCalendarAlt/>

                        <div className="ms-4 fs-12 grey-color">
                            <a href="#"
                                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                Web Dev Lecture
                                <br />
                                <span className="grey-color">CS5610.48102.99291</span>
                                <br />
                                <span className="grey-color">Sep 11 at 6pm</span>
                            </a>
                        </div>
                    </div>
                    <div className="my-4 d-flex">
                        <FaRegCalendarAlt/>

                        <div className="ms-4 fs-12 grey-color">
                            <a href="#"
                                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                                CS4550 Lecture
                                <br />
                                <span className="grey-color">CS5610.48102.99291</span>
                                <br />
                                <span className="grey-color">Sep 11 at 6pm</span>
                            </a>
                        </div>
                    </div>
                    <a href="#"
                        className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14">
                        12 more in the next week...</a>
                </div>
            </div> 
                
    )
}

export default Status;
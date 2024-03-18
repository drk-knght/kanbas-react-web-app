import React, {useState} from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const {courseId}=useParams();
    // const modulesList=modules.filter((module)=> module.course === courseId);
    
    // const [moduleList, setModuleList] = useState<any[]>(modules);
    // const [selectedModule,setSelectedModule] = useState(moduleList[0]);
    // const [module, setModule]=useState({
    //     _id:"0",
    //     name:"New Module",
    //     description:"New Description",
    //     course:courseId || "",
    // });

    // const addModule=(module:any)=> {
    //     const newModule={...module,
    //         _id:new Date().getTime().toString()};
        
    //     const newModuleList=[newModule, ...moduleList];
    //     setModuleList(newModuleList);
    // };

    // const deleteModule=(moduleId:string)=>{
    //     const newModuleList=moduleList.filter(
    //         (module) => module._id !== moduleId);
    //     setModuleList(newModuleList);
    // };

    // const updateModule= ()=>{
    //     const newModuleList= moduleList.map((m)=>{
    //         if(m._id === module._id){
    //             return module;
    //         }
    //         else {
    //             return m;
    //         }
    //     });
    //     setModuleList(newModuleList);
    // };
    
    const moduleList=useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const [selectedModule,setSelectedModule] = useState(module);
    const dispatch =useDispatch();

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
            <div>
                <h4>Add New Module</h4>
                <div>
                    <input 
                        className="form-control my-1"
                        value={module.name}
                        onChange={(e)=> dispatch(setModule({
                        ...module, name:e.target.value
                    }))}/>
                </div>
                <div>
                    <textarea 
                        className="form-control my-1"
                        value={module.description}
                        onChange={(e)=>dispatch(setModule({
                        ...module,description:e.target.value
                    }))}/>
                </div>
                <div>
                    <button 
                        onClick={()=>dispatch(addModule({...module,course:courseId}))}
                        className="btn btn-sm btn-success me-1">
                        Add
                    </button>
                    <button 
                        onClick={()=>dispatch(updateModule(module))}
                        className="btn btn-sm btn-primary me-1">
                        Update
                    </button>
                </div>
            </div>
            <ul className="list-group wd-modules mt-4">
                {/* <li className="list-group-item">
                    <button onClick={()=>dispatch(addModule({...module,course:courseId}))}>Add</button>
                    <button onClick={()=>dispatch(updateModule(module))}>Update</button>
                    <input 
                        value={module.name}
                        onChange={(e)=> dispatch(setModule({
                        ...module, name:e.target.value
                    }))}/>
                    <textarea 
                        value={module.description}
                        onChange={(e)=>dispatch(setModule({
                        ...module,description:e.target.value
                    }))}/>
                </li> */}
                {moduleList.filter((module)=> module.course===courseId)
                .map((module,index) =>(
                    <li 
                        key={index}
                        className="list-group-items"
                        onClick={() => setSelectedModule(module)}
                        >
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
                                <button
                                    onClick={() => {dispatch(setModule(module))}}
                                    className="btn btn-primary me-1" style={{padding:3}}>
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(deleteModule(module._id))}
                                    className="btn btn-danger" style={{padding:3}}>
                                    Delete
                                </button>
                                <FaEllipsisV className="ms-2 fs-20 cursor-pointer"/>
                            </span>
                            
                        </div>
                        {selectedModule._id==module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson: { name: string})=> (
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
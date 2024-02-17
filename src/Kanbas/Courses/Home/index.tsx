import ModuleList from "../Modules/List";
import Status from "../Status";

function Home(){
    return (
        <div className="d-flex overflow-hidden" style={{minHeight: "100%"}}>
            <ModuleList/>
            <Status/>
        </div>
    );
}

export default Home;
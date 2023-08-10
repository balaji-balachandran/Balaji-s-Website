import Navbar from "./../components/Navbar"
import Blob from "../components/Blob"
import "./../css/Splash.css"
import "./../css/fonts.css"
import "./../css/Projects.css"

const Home = () => {
    
    

    return(
        <>
            <Navbar
                tabs={["1","2"]}
                links={["1"]}
            />
            <div className="splash">
                <div className="right">
                    <h1>Hi I'm Balaji</h1>
                </div>
                
                <div className="left">
                    <Blob></Blob>
                </div>
            </div>
            <div className="projects">
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
                <div className="project">
                    <p>This is a project</p>
                </div>
            </div>
            <button>Hello</button>
        </>
    )
};
  
export default Home;
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    return(
    <div className="projects">
        <ProjectCard title={"Communipute"} description={"This is communipute"} image={"green"}/>
        <ProjectCard title={"Communipute"} description={"THis is adka"} image={"red"}/>
    </div>
    )
};
  
export default Projects;
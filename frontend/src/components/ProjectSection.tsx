import Masonry from "react-masonry-css"
import "./../css/Projects.css"

const Projects = () => {

    const breakpoints = {
        default : 3,
        1100: 2,
        700: 1
    }

    return (
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>            
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>        
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </Masonry>
    )
}

export default Projects
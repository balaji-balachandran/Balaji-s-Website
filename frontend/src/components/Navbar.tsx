import logo from "./../../assets/icons/c++.png"
import "./../css/Navbar.css"

interface Tabs {
    tabs : string[]
    links : string[]
}

const Navbar : React.FC<Tabs> = props => {
    return (
        <div className="navbar" id="navibar">
            <a href="/"><img id="logo" src={logo}/></a>

            <div className="links">
                <a href="projects">Home</a>
                <a href ="/">Projects</a>
                <a href="/" onClick={()=>{
                    const nav = document.getElementById("navibar");
                    if(nav) console.log(nav.offsetHeight);

            }}>About Me</a>
            </div>
        </div>
    )
}

export default Navbar
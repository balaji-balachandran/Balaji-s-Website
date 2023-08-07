import Navbar from "./../components/Navbar"
import Blob from "../components/Blob"
// import "./../css/Splash.css"


const Home = () => {
    

    return(
        <>
            <Navbar
                tabs={["1","2"]}
                links={["1"]}
            />
            <div className="left">
                <Blob></Blob>
            </div>
            <div className="Splash"></div>
        </>
    )
};
  
export default Home;
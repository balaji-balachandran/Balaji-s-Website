    import "./../css/ProjectCard.css"
// import image from './../../../assets/icons/c++.png'
interface CardProps {
  title: string;
  description: string;
  image: any;
}

const Card : React.FC<CardProps> = (props) => {
    const imageURL = 'url("./../../../assets/icons/c++.png")';

    const imageStyle = {
        backgroundImage: imageURL,
        backgroundSize: 'contain',
        width: '32px',
        height: '32px',
    };
    const techstack = ["c++","html","css","typescript","python","react"]
    const baseURL = "./../../../assets/icons/"
    const extension = ".png"


    return  <div className="project-card">
                <div className="project-image" style={{backgroundColor: props.image}}/>
                <div className="project-description" style={{padding: '20px'}}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="project-languages" style={{padding: '10px'}}>
                    {techstack.map(technology =>
                        <>
                        <img className="tech-icons" src={baseURL + technology + extension} />
                        <p className="tech-desc">{technology}</p>
                        </>
                        )}
                </div>
            </div>;
};
  
export default Card;
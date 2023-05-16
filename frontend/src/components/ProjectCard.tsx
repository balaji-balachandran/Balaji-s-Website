import "./../css/ProjectCard.css"

interface CardProps {
  title: string;
  description: string;
  image: any;
}

const Card : React.FC<CardProps> = (props) => {
    return  <div className="project-card">
                <div className="project-image" style={{backgroundColor: props.image}}/>
                <div className="project-description">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="project-languages"/>
            </div>;
};
  
export default Card;
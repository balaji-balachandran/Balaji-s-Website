import "./../css/Splash.css"

interface CircleProps {
  color : string
}

const Circle : React.FC<CircleProps> = (props) => {

    return <div 
    onMouseDown={()=>console.log("Clicked")}
    onDrag={()=>{console.log("dragged")
        
    }}
    draggable="true"
    className="circle"></div>;
};
  
export default Circle;
import "./../css/Blob.css"

// var svg = document.getElementById("cups");
// var s = Snap(svg);

// var simpleCup = Snap.select('#simple-cup');
// var fancyCup = Snap.select('#fancy-cup');

// var simpleCupPoints = simpleCup.node.getAttribute('d');
// var fancyCupPoints = fancyCup.node.getAttribute('d');


// var toFancy = function(){
//   simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);  
// }

// var toSimple = function(){
//   simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy); 
// }


// toSimple();

const Blob = () =>{
    // Come back to and use snap to animate the svg
    return (
        <>
            <div className="blob"></div>

            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js"></script> */}
        </>
    )
}

export default Blob
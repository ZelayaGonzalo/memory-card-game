import React,{useState,useEffect} from "react"
import NavBar from "./NavBar"
import Card from "./Card"


function importAll(r) {
    return r.keys().map(r)
  }
function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
      return val === arrVal;
    });
}
function shuffleFisherYates(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }
  
let images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/))

function PlayField(){
    const [score,setScore]=useState(0)
    const [maxScore,setMaxScore]=useState(0)
    const [picked,setPicked]=useState([])

   
    useEffect(()=>{
        images=shuffleFisherYates(images)
    })

    const addScore= () => {
        setScore(prevScore=>prevScore+1)
        if(score>=maxScore){
            setMaxScore(score+1)
        }
    }
    function checkRepeat(event){
        setPicked(prevPicked=>{
            if(!checkAvailability(picked,event.target.src)){
                addScore()
               return prevPicked.concat(event.target.src)
            }
            else{
                setScore(0)
                return prevPicked=[]
            }
        })
    }

    return(
        <div>
            <NavBar  score={score} maxScore={maxScore}/>
        <div className="playField">
            {images.map(img =>
                 <div className="cardContainer" onClick={checkRepeat}>
                 <Card  img={img.default}/>
             </div>
             ) }
        </div>
        </div>
    )
}
export default PlayField
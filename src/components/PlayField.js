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
  
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/))
console.log(images)

function PlayField(){
    const [score,setScore]=useState(0)
    const [maxScore,setMaxScore]=useState(8)
    const [picked,setPicked]=useState([])

    const addScore= () => {
        setScore(prevScore=>prevScore+1)
        if(score>=maxScore){
            setMaxScore(score+1)
        }
    }
    function checkRepeat(event){
        setPicked(prevPicked=>{
            if(!checkAvailability(picked,event.target.src)){
               return prevPicked.concat(event.target.src)
            }
            else{
                console.log("repeated")
                return prevPicked
            }
        })
    }

    return(
        <div>
            <NavBar  score={score} maxScore={maxScore}/>
        <div className="playField">
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div className="cardContainer" onClick={addScore,checkRepeat}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
        </div>
        </div>
    )
}
export default PlayField
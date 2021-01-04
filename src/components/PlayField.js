import React,{useState,useEffect} from "react"
import NavBar from "./NavBar"
import Card from "./Card"

function importAll(r) {
    return r.keys().map(r)
  }
  
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/))

function PlayField(){
    const [score,setScore]=useState(0)
    const addScore= () => {setScore(prevScore=>prevScore+1)} 

    return(
        <div>
            <NavBar  score={score}/>
        <div className="playField">
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>
            <div onClick={addScore}>
                <Card  img={images[Math.floor(Math.random() * images.length)].default} />
            </div>

        </div>
        </div>
    )
}
export default PlayField
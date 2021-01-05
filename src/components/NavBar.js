function NavBar(props){
    return(
        <div className="navBar">
            <h1>Memory Game</h1>
            <p>Score: {props.score}</p>
            <p>MaxScore: {props.maxScore} </p>
        </div>
    )

}
export default NavBar
import { useState } from "react"

export default function LikeButton(){
    let [isLiked,setIsLiked] =useState(true)
    function Button(){
     setIsLiked(!isLiked)
    }
    let styles = {color:"red",fontSize:"30px" }
    let font = {fontSize:"30px"}
    
    return(
        <div>
            Like Button
            <p onClick={Button}> {isLiked ? (<i className="fa-regular fa-heart" style={font}></i>) : <i className="fa-solid fa-heart" style={styles}></i> } </p>
        </div>
    )
}
function Word({word}){
  
    return(
       <p className="word"> {word.split("").fill("_").join(" ")} </p>
    )
}

export default Word;
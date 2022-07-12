import React,{useState} from "react"
function Test(props){
    let[contador, setContador] = useState(0)
const handleClick = () => {
    setContador(contador+1)
    console.log("funciona")
}
    return(
        <>
            <p>{contador}</p> 
            <button onClick={handleClick}>CLick me!</button>
        </>
    )
}

export default Test
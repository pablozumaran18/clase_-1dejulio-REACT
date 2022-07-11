import "./input.css"

function Input(props){
    return(
        <div>
            <p>{props.titulo}</p>
            <input type={props.type}></input>

        </div>
    )
}
export default Input 
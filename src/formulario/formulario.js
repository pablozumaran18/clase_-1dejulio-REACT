import "./formulario.css"
import Input from "../input/input";
import Button from "../button/button"
import Select from "../select/select";

function Formulario(props){
    let marca = ["Toyota","Honda","Hyundai","Ford"]
    let modelo = ["Fit","Focus","Model x","Accent"]
    return (<div id="div">
        <Input type="text" titulo="agregar Patente" />
        <Input type="Number" titulo="agregue el año"></Input>
        <Select items={marca} titulo="marca">

        </Select>
        <Select items={modelo} titulo="modelo">
            
        </Select>
        <br></br>
        <Button></Button>
        
    </div>)
}
export default Formulario
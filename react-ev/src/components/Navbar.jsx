import { Link } from "react-router-dom"
import { Countries } from "./countries"

export const Navbar =()=>{

    return (
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"skyblue",padding:"6px"}}>
            
            <button>
            <Link to="/add-country" >Add-Country</Link>
            </button>
            
            <button>
            <Link to="/add-city" >Add-City</Link>
            </button>
        </div>
    )
}
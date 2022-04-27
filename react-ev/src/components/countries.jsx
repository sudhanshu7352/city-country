import axios from "axios"
import { useState } from "react"
import "./home.css"


export const Countries =()=>{
  const [country,setCountry]=useState({})
    
  //code for handle submit
    const handlesubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/countries",country).then(()=>{
            alert("country added");
        })
    }
    const handle=(e)=>{
      //  console.log(e.target)
        const {id,value} =e.target
      setCountry({...country,[id]:value})
    }
    return (

        
        <div className="coun_div">
            <h1>Add Country</h1>
            <form onSubmit={handlesubmit} >
                <input type="text" id="country" onChange={(e)=>handle(e)} />
                <br />
                <input type="submit" value="add country" />
            </form>
        </div>
    )
}

import axios from "axios"
import { useEffect, useState } from "react"
import "./home.css"

export const Cities =()=>{
    const [city,setCity]=useState({})
    const [coun,setCoun] =useState([])
    
    const handlesubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/cities",city).then(()=>{
            alert("city added");
        })
    }
    useEffect(()=>{
          axios.get("http://localhost:8080/countries").then((res)=>{
             // console.log(res.data)
              setCoun(res.data)
          })
    },[])
    const handle=(e)=>{
      //  console.log(e.target)
        const {id,value} =e.target
      setCity({...city,[id]:value})
    }
    return (

        
        <div className="city_div">
            <h1>Add City details</h1>
            <form onSubmit={handlesubmit} >
              City:  <input type="text" id="city" onChange={(e)=>handle(e)} placeholder="city" required/>
                <br />
              Population:  <input type="number" id="population" onChange={(e)=>handle(e)} placeholder="population" required />
                <br />
                Country: <select name="" id="country" onChange={(e)=>handle(e)}>
                     {/* <option value="">-----</option> */}
                     {coun.map((e)=>(
                         <option key={e.id} value={e.country}>{e.country}</option>
                     ))}
                 </select>
                <br />
                <input type="submit" value="add city" />
            </form>
        </div>
    )
}
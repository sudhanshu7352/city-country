
import axios from "axios"
import { useEffect, useState } from "react"
import "./home.css"
export const Home =()=>{
    const [coun,setCoun] =useState([])
    const [fil,setFil] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/cities").then((res)=>{
          //  console.log(res.data)
            setCoun(res.data)
        })
  },[])
    useEffect(()=>{
        axios.get("http://localhost:8080/countries").then((res)=>{
        // console.log(res.data)
            setFil(res.data)
        })
    },[])
    const handlesortasc=()=>{
        let data = coun.sort((a,b)=>a.population -b.population)
        //console.log("coun")
        setCoun([...data])
    }    
    const handlesortdec=()=>{
        let data2 = coun.sort((a,b)=>b.population -a.population)
      //  console.log("coun")
        setCoun([...data2])
    }  
    const handlefilter=(e)=>{
       // console.log(e.target.value)
        let d =e.target.value
      let data3= coun.filter((el)=>{if(d== el.country){
          console.log(el)
          return el
      }})
       console.log(data3)
        setCoun([...data3])
    }
    return (
        
        <div>
            <div>
                {/* <button onClick={()=>handlefilter()}>filter by country</button> */}
                <select name="" id="country" onChange={(e)=>handlefilter(e)}>
                     <option value="">-filter by country-</option>
                     {fil.map((e)=>(
                         <option key={e.id} value={e.country}>{e.country}</option>
                     ))}
                      </select>
                <button onClick={()=> handlesortasc()} >sort by asc population</button>
                <button onClick={()=> handlesortdec ()} >sort by dec population</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {coun.map((e)=>(
                       <tr key={e.id}>
                           <td>{e.id}</td>
                           <td>{e.country}</td>
                           <td>{e.city}</td>
                           <td>{e.population}</td>
                           <td> <button>Edit</button></td>
                           <td><button>Delete</button></td>
                          
                       </tr>
                        
                   ))}
                </tbody>
            </table>
        </div>

    )
}
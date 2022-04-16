
import axios from "axios"
import { useEffect, useState } from "react"
import "./home.css"
export const Home =()=>{
    const [coun,setCoun] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/cities").then((res)=>{
            console.log(res.data)
            setCoun(res.data)
        })
  },[])

    return (
        
        <div>
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
                           <td>{e.population}</td>
                           <td>{e.city}</td>
                           <td> <button>Edit</button></td>
                           <td><button>Delete</button></td>
                          
                       </tr>
                        
                   ))}
                </tbody>
            </table>
        </div>

    )
}
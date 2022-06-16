import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Countries } from './components/countries'
import { Cities } from './components/cities'
import { Navbar } from './components/Navbar'

function App() {
 // const [count, setCount] = useState(0)
  //  let [temp,useTemp]=useState("yes")

  //  const store=()=>{
  //   console.log(temp)
  //   if(temp=="yes"){
  //     useTemp("true")
  //   }else{
  //     useTemp(false)
  //   }
  //  }
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/add-country' element={<Countries />} />
       <Route path='/add-city' element={<Cities />}/>
     </Routes>
       {/* <button onClick={()=>store()}>click:{temp}</button> */}
    </div>
  )
}

export default App

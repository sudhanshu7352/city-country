import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Countries } from './components/countries'
import { Cities } from './components/cities'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/add-country' element={<Countries />} />
       <Route path='/add-city' element={<Cities />}/>
     </Routes>
    </div>
  )
}

export default App


export const Cities =()=>{
    const [city,setCity]=useState({})
    
    const handlesubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/cities",city).then(()=>{
            alert("city added");
        })
    }
    const handle=(e)=>{
      //  console.log(e.target)
        const {id,value} =e.target
      setcity({...city,[id]:value})
    }
    return (

        
        <div>
            <form onSubmit={handlesubmit} >
                <input type="text" id="city" onChange={(e)=>handle(e)} />
                <input type="number" id="population" onChange={(e)=>handle(e)}  />
                <br />
                <input type="submit" value="add city" />
            </form>
        </div>
    )
}
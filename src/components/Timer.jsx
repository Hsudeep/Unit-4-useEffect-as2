import React,{useState, useEffect} from 'react'



const Timer = () => {
    const [first, setfirst] = useState(20)
    // const [end, setend] = useState(40)  
    // const [timer, settimer] = useState(first)
    useEffect(()=>{
        const returnFromInterval =  setInterval(()=>{
            if(first===25){
                clearInterval(returnFromInterval) 
            }else{
                setfirst((prev)=>prev+1)
            }
           
        },1000)

         return ()=>{
          clearInterval(returnFromInterval)
         } 
        },[first])
  return (
    <div>    
        <h1>Start: {first}</h1>
    </div>
  )
}

export default Timer
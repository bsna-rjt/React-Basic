// import React from 'react'

import { useEffect,useState } from "react"

const UseEffect = () => {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)

    // //Type 1 of UseEffect on the basis of execution
    // useEffect(()=>{
    //     console.log("Hello World!"); //console 2times because of Strict mode in main.jsx
    // },[])

    //Type 2 of UseEffect on the basis of execution
    useEffect(()=>{
        document.title=count; //dom manipulation in title
        console.log("useEffect Triggered");
    },[count,count2]) //console is shown when count's value is changed // add count2 to console when count2 value is also change


  return (
    <div>UseEffect
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>Count2: {count2}</h1>
        <button onClick={()=>setCount2(count2-1)}>-</button>
    </div>
  )
}

export default UseEffect
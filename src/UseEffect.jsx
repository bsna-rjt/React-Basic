// import React from 'react'

import { useEffect } from "react"

const UseEffect = () => {

    //Type 1 of UseEffect on the basis of execution
    useEffect(()=>{
        console.log("Hello World!"); //console 2times because of Strict mode in main.jsx
    },[])

  return (
    <div>UseEffect</div>
  )
}

export default UseEffect
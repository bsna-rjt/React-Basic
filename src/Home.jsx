// import React from 'react'
import { useState } from 'react';
// import Button from './Button';
// import {Component} from 'react';

const Home = () => {
  //useState for re-render
  const state=useState(0); //[0,function]
  // console.log("state[0]",state[0])
  // console.log("state[1]",state[1])
  const state1=state[0]; //[initial value
  const state2=state[1]; //function
  const [count,setCount]=useState(0);
  
  // var count=0;
  // const increaseCount=()=>{ //function use garda re-render hudaina //so useState use gareko for re-render feature
  //   count=count+1;
  // }

  return (
    <div>
    <h1>Home Page</h1>
    <h1>state1:{state1}</h1>
    <h1>count:{count}</h1>
    <button onClick={()=>state2(5)}>+</button>
    <button onClick={()=>state2(state1+1)}>++</button>
    <button onClick={()=>setCount(count+1)}>+++</button>
    {/* <button onClick={increaseCount}>increaseCount</button>  */}
    {/* <Button textInsideButton="Home"/> */}
    </div>
  )
}


// class Home extends Component { //Old method in React | deprecated already in new versions
//   constructor(){
//     super()

//     this.state={
//       count:0
//     }
//   }

//   increaseCounter(){
//     this.setState({count:this.state.count+1})
//   }

//   render(){
//     return(
//       <div>
//        <h1>Count:{this.state.count}</h1>
//        <button onClick={()=>this.increaseCounter()}>+</button>
//       </div>
//     )
//   }
// }

export default Home

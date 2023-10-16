// import React from 'react'
// import Button from './Button';
import {Component} from 'react';

// const Home = () => {
//   return (
//     <div>
//     <h1>Home Page</h1>
//     <h1>Hello</h1>
//     <Button textInsideButton="Home"/>
    

//     </div>
//   )
// }


class Home extends Component { //Old method in React | deprecated already in new versions
  constructor(){
    super()

    this.state={
      count:0
    }
  }

  increaseCounter(){
    this.setState({count:this.state.count+1})
  }

  render(){
    return(
      <div>
       <h1>Count:{this.state.count}</h1>
       <button onClick={()=>this.increaseCounter()}>+</button>
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
class App extends Component{
 constructor(props)
   {
   super(props);
  this.state={
      deadline: 'August 7,2018',
      newDeadline:' '
     }
  }
changedeadline(){
this.setState({deadline:this.state.newDeadline})
}

            render(){
                return(
          <div className="App">
                 <div className="heading"> countdown to {this.state.deadline}</div>
          <Clock />
           <div>
                 <input placeholder='new date'
                onChange={event=>this.setState({newDeadline: event.target.value})}
                 />
                 <button onClick={()=>this.changedeadline()}>Submit </button>
             </div>
          </div>
                      )
                  }
          }
export default App;

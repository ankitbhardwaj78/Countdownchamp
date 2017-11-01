import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form , FormControl, Button } from 'react-bootstrap';


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
          <Clock
              deadline={this.state.deadline}
           />
           <Form inline>
                 <FormControl
                  placeholder='new date'
                onChange={event=>this.setState({newDeadline: event.target.value})}
                 />
                 <Button onClick={()=>this.changedeadline()}>Submit </Button>
             </Form>
          </div>
                      )
                  }
          }
export default App;

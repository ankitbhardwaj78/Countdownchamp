import React, { Component } from 'react';

class App extends Component{
            render(){
                return(
          <div>
                 <div> countdown </div>
            <div>
                 <div> 14 days</div>
                 <div>30 hours</div>
                 <div>15 minutes</div>
                 <div>20 seconds</div>
           </div>
           <div>
                 <input placeholder='new date'/>
                 <button>Submit </button>
             </div>
          </div>
                      )
                  }
          }
export default App;

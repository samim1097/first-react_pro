import React, {Component} from'react';
import './App.css';
import Person from './Person'
  class App extends Component{
  state = {
    person: [
      { name: 'max', age: '24'  },
      { name: 'samim', age: '28' },
      { name: 'rana', age: '26' }
          ]
  }
 render(){
  return (
    <div>
       <Person/>
      <Person name ={this.state.person[0].name} age= {this.state.person[0].age}/>
      <Person name ={this.state.person[1].name} age= {this.state.person[1].age}/>
      <Person name ={this.state.person[2].name} age= {this.state.person[2].age}/>
      <button>click me </button>
    </div>
  );
  }
  } 
export default App;

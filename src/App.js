import React, {Component} from 'react';
import DateInput from './components/DateInput'
import Photo from './components/Photo'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      date: "",
      image: ""
    } 
  }
  
  render() {
    return (
      <div>
        <h1>NASA Image of the Day</h1>
        <DateInput />
        <Photo />
      </div>
    )
  }

}

export default App;

import React, {Component} from 'react';
import DateInput from './components/DateInput'
import Photo from './components/Photo'
import './App.css';

class App extends Component {
  //initialize state
  state = {
    date: "",
    image: ""
  } 

  changeDate = (e) => {
    //prevent default on form submit
    e.preventDefault();
    //get the value from the form
    let inputDate = e.target[0].value
    //change the date state
    this.setState({ date: inputDate })
  }

  render() {
    return (
      <div>
        <h1>NASA Image of the Day</h1>
        {/*pass changeDate function to the DateInput component*/}
        <DateInput changeDate={this.changeDate} />
        <Photo />
      </div>
    )
  }

}

export default App;

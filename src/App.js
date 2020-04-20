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
  
  componentDidMount() {
    //pass in API key
    fetch(`https://api.nasa.gov/planetary/apod?api_key=VvmpAJToKHWicld7I7gv2WJ0QxzhRBCh6PBfd9rY`)
      //convert response to JSON
      .then(res => res.json())
      //update state with the photo object we returned
      .then(res => this.setState({ image: res }))
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
        {/* pass image object down to the photo component */}
        <Photo image={this.state.image}/>
      </div>
    )
  }

}

export default App;

import React, {Component} from 'react';
import DateInput from './components/DateInput'
import Photo from './components/Photo'
import './App.css';

class App extends Component {
  //initialize state
  state = {
    date: "",
    imageData: ""
  }
  
  componentDidMount() {
    //pass in API key
    fetch(`https://api.nasa.gov/planetary/apod?api_key=VvmpAJToKHWicld7I7gv2WJ0QxzhRBCh6PBfd9rY`)
      //convert response to JSON
      .then(res => res.json())
      //update state with the photo object we returned
      .then(res => this.setState({ imageData: res }))
  }

  //run this function when form is submitted. Get the target value to get date
  changeDate = (e) => {
    //prevent default on form submit
    e.preventDefault();
    //get the value from the form
    let inputDate = e.target[0].value
    //change the date state
    this.setState({ date: inputDate })
    //get a new photo using the date
    this.fetchPhoto(inputDate)
  }

  //get new photo with a date parameter in query. Call when form is submitted
  fetchPhoto = (date) => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=VvmpAJToKHWicld7I7gv2WJ0QxzhRBCh6PBfd9rY`)
      //convert response to JSON  
      .then(res => res.json())
      //update state with the photo object we returned
      .then(res => this.setState({imageData: res}))
  }

  render() {
    return (
      <div className="container">
        <img className="logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" />
        <h1 className="header">NASA Image of the Day</h1>
        {/*pass changeDate function to the DateInput component*/}
        <DateInput changeDate={this.changeDate} />
        {/* pass image object down to the photo component */}
        <Photo imageData={this.state.imageData}/>
      </div>
    )
  }

}

export default App;

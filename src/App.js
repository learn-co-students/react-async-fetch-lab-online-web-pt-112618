import React, { Component } from 'react';


export default class App extends Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
     .then(response => response.json())
     .then(data => {
       this.setState({
         peopleInSpace: data.people
       })
     })
 }


  render() {
    console.log(this.state)
    return(
      <div>
      Hello...
      {this.state.peopleInSpace.map(person => <h3> {person.name} </h3>)}
      </div>
    )
  };
}

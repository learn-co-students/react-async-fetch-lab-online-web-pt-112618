// create your App component here
import React, { Component } from 'react'


export default class App extends Component {

  componentDidMount(){
    let URL = "http://api.open-notify.org/astros.json"
    fetch(URL)
    
  }

  render(){
    return
  }
}

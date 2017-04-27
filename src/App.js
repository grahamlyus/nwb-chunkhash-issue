import { CONSTANT_1 } from './constants.js'
import './App.css'

import React from 'react'

let App = React.createClass({
  render() {
    return <div className="App">
      <div className="App-heading App-flex">
        <h2>Welcome to <span className="App-react">React</span></h2>
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={require('./react.svg')}/>
        <p>Edit <code>src/App.js</code> and save to hot reload your changes.</p>
      </div>
    </div>
  }
})

import('./split').then(module => {
  module.default()
})

console.log(CONSTANT_1)

export default App

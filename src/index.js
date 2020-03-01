import React from 'react'
import { render } from 'react-dom'
import "./assets/styles/style.css"
import logo from "./assets/images/react.png"

function App(){
  return (
    <div>
      <h1>Hello World From React!!!</h1>
      <img src={logo} alt="React" />
    </div>
  )
}

render(<App/>, document.getElementById('root'))

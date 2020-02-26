import React from 'react'
import { render } from 'react-dom'
import "./assets/styles/style.css"

function App(){
  return (
    <div>
      <h1>Hello World From React!!!</h1>
    </div>
  )
}

render(<App/>, document.getElementById('root'))

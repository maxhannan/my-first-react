import React, { Component } from 'react'

const Greeting = (props) => {
  const {greeting, names} = props
  return (
    <ul className = "list-inline">
      <h3>{greeting}</h3>
      {names.map(
        (name, i) => {
          return (
            <li>
              {`Student ${i + 1}: ${name}` + 
              ((i !== names.length -1) ?',  ':'!')}
            </li>
          )
        }
      )}
    </ul>
  )
}

export default Greeting
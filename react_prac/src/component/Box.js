import React from 'react'

const Box = (props) => {

console.log("props", props.name);
  return (
    <div className="box1">
        box1
        <p>{props.num}</p>
        <p>{props.name}</p>
    </div>
  )
}

export default Box


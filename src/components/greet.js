import React from "react"

const Greet = props => {
    return (
        <div>
            <h1>Hellooo {props.name}  You are {props.attribute}</h1>
            {props.children}
        </div>
)} 

 export default Greet
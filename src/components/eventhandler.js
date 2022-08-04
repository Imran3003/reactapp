import React from 'react'

function Eventhandler() {
    function click() {
        console.log("Button clicked")
    }
    
  return (
    <div>
      <button onClick={click}>ClickME</button>
    </div>
  )
}
export default Eventhandler
// import React, { Component } from 'react'

// class Eventhandler extends Component {
//     click() {
//       console.log("Class button clicked")
//   }
//   render() {
//     return (
//       <div>
//             <button onClick={this.click}>Click</button>
//       </div>
//     )
//   }
// }

// export default Eventhandler



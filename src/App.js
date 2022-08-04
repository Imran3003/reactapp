
import './App.css';
// import Greet from './components/greet';
import { Component } from 'react';
import Eventhandler from './components/eventhandler';
import EventBind from './components/EventBind';
// import Welcome from './components/welcome';
// import Hello from './components/hello';
// import Message from './components/state'
// import Setstate from './components/setstate';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Eventhandler></Eventhandler>
        <EventBind></EventBind>
        {/* <Greet name="Bhuvi" attribute="cute" >
        <button>Click me</button>
        </Greet> */}
          
        {/* // <Welcome name="papa" attribute="Handsome">
            // <p> Gundamma</p>
        // </Welcome>
        // <Hello></Hello> 
        // <Message></Message>
        // <Setstate></Setstate> */}
      </div>
    );
  }
}
export default App;

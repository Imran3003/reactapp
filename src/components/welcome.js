import { Component } from 'react';

class Welcome extends Component{
    render() {
        // return <h1> class comp</h1>
        return (
            <div>
                <h1>Hii {this.props.name}</h1>
                {this.props.children }
            
            </div>
)}  
}
export default Welcome 
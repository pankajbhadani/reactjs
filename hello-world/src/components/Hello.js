import React, { Component } from "react"

class Hello extends Component {

    // render(){
    //     return <div className='validate'><h1>Hello Pankaj: hello from regular jsx</h1></div>
    // }
    render(){
        return React.createElement('div',{className:'validate'},React.createElement('h1',{className:'validate'},'Hello, Pankaj. This is getting rendered using the React.createElement'))
    }
}
export default Hello
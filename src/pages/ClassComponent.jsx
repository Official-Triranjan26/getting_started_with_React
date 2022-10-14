import React from 'react';
import BaseHOC from '../hoc/BaseHoc';

class ClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"Triranjan",
            age:20
        }
        console.log("constructor :")
    }

    componentDidMount(){
        console.log("component Did Mount :")
        // setTimeout(() => {
        //     this.setState({name:"Ankur"})
        //   }, 1000)

    }

    componentDidUpdate(){
        console.log("componrnt did update :")
    }

    componentWillUnmount(){
        console.log("component will unmount :")
    }

    // shouldComponentUpdate() {
    //     return false;
    // }
    
    render(){

        console.log("render :")

        return(
            <div>
                <h1>This is a Class Component</h1>
                <p>My name is {this.state.name}</p>
                <p>My age is {this.state.age}</p>

                <button onClick={()=>this.setState({
                    ...this.state,
                    age:this.state.age+1
                })}>Click to increase ths age</button>

                <p>My name is {this.state.name}</p>
            </div>
        )
    }
}

export default BaseHOC(ClassComponent);
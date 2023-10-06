//lifecycle methods of a class component
//1. Initial Phase - defines the state and props values
//2. Mounting Phase - a.constructor() ->used to construct the class component
// b.getDerivedStateFromProps() -> used to get state and props value
//c. render() -> used to render the webpage
//d.componentDidMount()->used for side effects[i.e. HTTP request]


//3. Updating Phase
//a. getDerivedStateFromProps() -> used to get state and props value
//b. shouldComponentUpdate() -> used to declare whether component should be updated or not
//c. render() -> used to re-render the webpage
//d. getSnapshotBeforeUpdate() -> used to store the previous state and props values
//e. componentDidUpdate() -> used for side effects
//4. Unmounting phase
// a. componentWillUnmount() -> executed when a component is removed

import { Component } from "react";
import C3 from "./C3";

class C2 extends Component
{
    constructor()
    {
        super();
        console.log("I am constructor");
        this.state = {role:"Engineer",bool:true};
    }

    static getDerivedStateFromProps()
    {
        console.log("I am getDerivedStateFromProps method");
        return null;
    }

    componentDidMount()
    {
        console.log("I am componentDidMount method");
    }

    shouldComponentUpdate()
    {
        console.log("I am shouldComponentUpdate method");
        return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log("I am getSnapshotBeforeUpdate method");
        return null;
    }

    componentDidUpdate()
    {
        console.log("I am componentDidUpdate method");
    }

    render()
    {
        console.log("I am render method");
        return(
            <div>
                <h1>Lifecycle methods</h1>
                <h1>Role - {this.state.role}</h1>
                <button onClick={()=>{this.setState({role:"Doctor"})}}>Change role</button>
                {
                    (this.state.bool)?<C3/>:null
                }
                <button onClick={()=>{this.setState({bool: false})}}>Unmount</button>
            </div>
        )
    }
}

export default C2;

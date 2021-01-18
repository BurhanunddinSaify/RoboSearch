import React, { Component } from 'react'
import CardList from './Cardlist'
import { robots } from './robots'
import Searchbox from "./SearchBox";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            search: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({search : event.target.value})
    } 
    render() {
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return ( < div className = "tc" >
            <h1> RoboFriends </h1> 
            <Searchbox searchChange={this.onSearchChange} />
            <CardList robots = {filteredRobot}/>  
            </div>
        )
    }
}


export default App
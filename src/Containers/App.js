import React, { Component } from 'react';

import CardList from '../Components/CardList';

import SearchBox from '../Components/SearchBox';

import './App.css';

import Scroll from '../Components/Scroll';



class App extends Component {

constructor() {

super()

this.state = {

robots: [],

Searchfield: ''

}

}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users => this.setState({ robots: users}));
}

onSearchChange = (event) => {

this.setState({ Searchfield: event.target.value})

}





render() {

const filteredRobots= this.state.robots.filter(robot => {

return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());

})

if(this.state.robots.length === 0) {
	return <h1 className='tc'>Loading....</h1>
} else {
      return (

         <div className = 'tc'>

             <h1 className='f1'> Robo Friends </h1>

             <SearchBox SearchChange={this.onSearchChange}/>
             <Scroll>
                <CardList robots = {filteredRobots} />
             </Scroll>
         </div>

      );

     }

   }
}



export default App;
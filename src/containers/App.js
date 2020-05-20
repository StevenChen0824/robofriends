import React, { Component } from 'react';

import './App.css';

import ErrorBoundary from './ErrorBoundary' 

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Button from '../components/Button';


class App extends Component {
  constructor() {
  	super();
  	this.state = {
  		robots : [],
  		searchfield : '',
      set : 'set1'
  	};
  };
  
  onSearchChange = (event) => {
  	this.setState( {searchfield: event.target.value }) 
  };

  onSetChange1 = (event) => {
    this.setState({set : ''})
  };

  onSetChange2 = (event) => {
    this.setState({set : 'set2'})
  };

  onSetChange3 = (event) => {
    this.setState({set : 'set3'})
  };

  onSetChange4 = (event) => {
    this.setState({set : 'set4'})
  };

  render() {
    const { robots, searchfield, set } = this.state;
  	const filteredRobots = robots.filter(robot => {
  			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  		  })
      return (
        <div className='tc'>
        	<h1 className='ttu f1 fw2 light-blue' style={{marginLeft: 'auto'}}>robofriends</h1>
        	<SearchBox searchChange={this.onSearchChange} />
          <div className='flex justify-end mb2'>
            <Button name={1} setChange={this.onSetChange1}/>
            <Button name={2} setChange={this.onSetChange2}/>
            <Button name={3} setChange={this.onSetChange3}/>
            <Button name={4} setChange={this.onSetChange4}/>
          </div>
        	<Scroll>
            <ErrorBoundary>
          	 <CardList robots={filteredRobots} set={set} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }

  componentDidMount() {
  	fetch('https://jsonplaceholder.typicode.com/users')
  		.then(res => res.json())
  		.then(users => this.setState({ robots: users }))
  }
}

export default App;

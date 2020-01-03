import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor () {
		super();

		this.state = {
			killers: [
        {
          name: 'Leatherface',
          id: 1,
        },
        {
          name: 'Jason',
          id: 2,
        },
        {
          name: 'Agness',
          id: 3,
        },
        {
          name: 'Freddy',
          id: 4,
        }
      ],
		};
	}
	render () {
		return (
			<div className='App'>
        {
          this.state.killers.map(killer => <h1 key = {killer.id}>{killer.name}</h1>)
        }
			</div>
		);
	}
}
export default App;

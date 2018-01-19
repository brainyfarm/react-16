import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: "Olawale"
      },

      {
        name: "Bayonle",
      }
    ]
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {
          name: event.target.value
        },
  
        {
          name: "Bayonle Emmanuel",
        }
      ]
    });
  }


  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        {
          name: newName
        },
  
        {
          name: "Bayonle Emmanuel",
        }
      ]
    });
    }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    const allPersons = this.state.persons.map((person, index) => {
      return <Person 
      name = { person.name } 
      clicked = { this.switchNameHandler }
      changed = { this.nameChangedHandler }
      key = { index }
      
    />
    });
    return (
      <div className="App">
        <h1>
          Welcome to my React App
        </h1>
        <button 
        onClick= { this.switchNameHandler.bind(this, 'Tolulope') }
        style= { style }
        > Switch Name </button>
        <button onClick={ () => this.switchNameHandler('Akin') }> Switch Again </button>

         { allPersons }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "This works now"));
  }
}

export default App;
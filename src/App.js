import React, { Component } from 'react'
import './App.css';
import Radium, {StyleRoot } from 'radium';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Kelvin", age: 30 },
      { id: "vasdf1", name: "Simon", age: 21 },
      { id: "asdf11", name: "Stephanie", age: 26 },
    ],
    otherState: 'some value here',
    showPerson: false
  };

  nameChangeHandler = (e, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

   const person  = {
     ...this.state.person[personIndex]
   };
   person.name = e.target.value;
   const persons = [...this.state.persons]
   persons[personIndex] = person;
  this.setState({persons:persons});
  }

  togglePersonHandler = ()=>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
  }
  };

  let persons = null;
  if(this.state.showPerson){
    persons = (
      <div>
        {this.state.persons.map((person, index)=>{
          return <Person
          click = {()=>this.deletePersonHandler(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          change = {(e)=>this.nameChangeHandler(e, person.id)} 
          />
        
        })};
      </div>
    )
  }

    return <div></div>;
  }
}

export default App;
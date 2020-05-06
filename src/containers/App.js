import React, { Component } from "react";
import  classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/CockPit/CockPit';
import withClass from '../components/Hoc/withClass';
import Auxi from '../components/Hoc/Auxi';


class App extends Component {

  constructor(props){
    super()
    console.log('[App] constructor')
  }
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0

  };

  static getDerivedStateFromProps(props, state){
   console.log('[App js] getDerivedStateFromProps', props)
       return state;
  }

   componentDidMount(){
     console.log('[App js ] componentDidMount')
   }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState,props)=>{
     return {
       persons: persons,
      changeCounter: this.state.changeCounter+1 
    };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };


  render() {
    console.log('[App js] rendering')
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}
        />
        </div>
      );
    }

    return (
      <Auxi>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Auxi>
    );
    
  }
}

export default withClass(App, classes.App);

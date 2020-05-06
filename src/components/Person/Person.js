import React, {Component} from 'react';
import classes from './Person.css'
import withClass from '../Hoc/withClass';
import propTypes from "prop-types";

class Person extends Component{
  componentDidMount(){
    this.inputElement.focus()
  }
  render(){
    console.log("[App js] person");
    return (
      <React.Fragment>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={(inputEl)=>{this.inputElement=inputEl}}
          onChange={this.props.changed}
          value={this.props.value}
        />
      </React.Fragment>
    );  

  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func,
};

export default withClass(Person,classes.Person);
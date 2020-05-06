import React, {Component} from 'react';
import classes from './Person.css'
import withClass from '../Hoc/withClass';


class Person extends Component{
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
          onChange={this.props.changed}
          value={this.props.value}
        />
      </React.Fragment>
    );  

  }

}
export default withClass(Person,classes.Person);
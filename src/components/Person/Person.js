import React, {Component, Fragment} from 'react';
import './Person.css'
import Aux from '../Hoc/Auxi';
class Person extends Component{
  render(){
    console.log("[App js] person");
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.value}
        />
      </Fragment>
    );  

  }

}
export default Person;
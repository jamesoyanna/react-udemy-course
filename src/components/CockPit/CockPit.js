import React, {useEffect} from 'react';
import classes from './Cockpit.css';
//import useEffect from 'react';

const Cockpit = (props)=>{

  useEffect(()=>{
    console.log('cockpit.js useeffect')

    setTimeout(()=>{
      alert('Save data to cloud')
    },1000);
    return ()=>{
    console.log('clean up work in useEffect')
  }
  }, [])


  const assignedClasses = [];
  let btnClass = "";
  if(props.showPersons){
     btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.bold);
  }
    return (
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join('')}>
          This is really working!
        </p>
        <button className={btnClass} onClick={props.clicked}>
          Toggle Persons
        </button>
      </div>
    );
}

export default Cockpit;
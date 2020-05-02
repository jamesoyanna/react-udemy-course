import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid 3px rgb(130, 11, 160);
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
        width: 450px;
`;


const Person = (props)=>{
   
    return (
      <StyleDiv>
        <p onClick={props.click}>
          I am {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </StyleDiv>
    );
}
export default Person;
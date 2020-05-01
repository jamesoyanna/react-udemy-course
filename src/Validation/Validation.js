import React from 'react'

 const Validation = (props)=> {
   let validationMessage = <h2>Text long enough</h2>
      if(props.inputLength >= 5){
        validationMessage = <h2>text to long</h2>
      }
    return (
      <div>
       {validationMessage}
      </div>
    );
}

export default Validation;
import React, {Component} from 'react';

class ErrorBoundry extends Component{
  
    state = {
        hasError: false,
        errorMeaage: ''
    }


    componenentDidCatch = (error, info)=>{
     this.setState({hasError: true, errorMeaage: error})
    }
    render(){
          if(this.state.hasError){
          return <h1>{this.state.errorMeaage}</h1>;
          }else{
              return this.props.children
          }
        
    }
}

export default ErrorBoundry;
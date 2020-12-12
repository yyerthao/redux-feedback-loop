import React, { Component } from 'react';
import { connect } from "react-redux";

class ThankYou extends Component{

  state = {
      feedback: {
          feels: '',
          understanding: '',
          support: '',
          comments: ''
      }
  }
  
returnHome = (event) => {
    this.props.dispatch({type: 'NEW_FEEDBACK'})
    this.props.history.push('/');

}


    render(){
        return(
            <>
            <h1>Thank you for your feedback!</h1>
            <button onClick={(event) => this.returnHome(event)}>NEXT</button>
            </>
        )
    }
}


export default connect()(ThankYou);
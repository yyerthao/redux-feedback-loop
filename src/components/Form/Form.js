import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';


class Form extends Component{

  // created state, feels array is empty right now
  state = {
      feels: []
  }

  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding feels', this.state.feels);
      this.props.dispatch({type: 'GET_FEEDBACK', payload: this.state.feels})
      this.props.history.push('/understanding');
  }

  handleChange = (event) => {
      this.setState({
          feels: event.target.value
      })
  }


    render(){
        return(
            <>
            <h1>How goes the feels today?</h1>
            <p><i>On a scale of 1-10, 1 being not good and 10 being great.</i></p>
            <form>
                <input type="number" placeholder="Insert emotion here"
                    value={this.feels} 
                    onChange={this.handleChange}>
                </input>
                    &nbsp;
                <button onClick={(event) => this.handleSubmit(event)}>NEXT</button>
            </form>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Form);
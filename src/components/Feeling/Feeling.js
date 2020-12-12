import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
// import Understanding from '../Understanding/Understanding';


class Form extends Component{

  // created state, feedback array is empty right now
  state = {
      feedback: {
          feels: '', 
          understanding: '', 
          support: '', 
          comments: ''}
  }

// handleSubmit function to handle user's input and send it to redux
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding feels', this.state.feels);
      this.props.dispatch({type: 'FEELINGS', payload: this.state.feels})
      this.props.history.push('/understanding');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
          feedback: event.target.value
      })
  }

    render(){
        return(
            <>
            <h1>How goes the feedback today?</h1>
            <p><i>On a scale of 1 through 10, 1 being not good and 10 being great.</i></p>
            <form>
                <input 
                    className="inputForms"
                    type="number" placeholder="Insert emotion here"
                    value={this.feedback} 
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
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component{

  state = {
      feedback: {
          feels: '',
          understanding: '',
          support: '',
          comments: ''
      }
  }

// handleSubmit function to handle user's input and send it to redux
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding understanding', this.state.understanding);
      this.props.dispatch({type:'UNDERSTANDING', payload: this.state.understanding})
      this.props.history.push('/support');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
          understanding: event.target.value
      })
  }

    render(){
        return(
            <>
            <h1>How well did you understand today's material?</h1>
            <p><i>On a scale of 1-10, 1 being not good and 10 being great.</i></p>
            <form>
                <input type="number" placeholder="Insert emotion here"
                    value={this.understanding} 
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
export default connect(putStateOnProps)(Understanding);
import React, { Component } from 'react';
import { connect } from "react-redux";

class Comments extends Component{
  state = {
      comments: []
  }

// handleSubmit function to handle user's input and send it to redux
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding feels', this.state.comments);
      this.props.dispatch({type: 'GET_FEEDBACK', payload: this.state.comments})
      this.props.history.push('/understanding');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
          comments: event.target.value
      })
  }

    render(){
        return(
            <>
            <h1>How goes the comments today?</h1>
            <p><i>On a scale of 1-10, 1 being not good and 10 being great.</i></p>
            <form>
                <input type="number" placeholder="Insert emotion here"
                    value={this.comments} 
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
export default connect(putStateOnProps)(Comments);
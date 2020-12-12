import React, { Component } from 'react';
import { connect } from "react-redux";
import './Comments.css';

class Comments extends Component{
  state = {
      comments: []
  }

// handleSubmit function to handle user's input and send it to redux
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding comments', this.state.comments);
      this.props.dispatch({type: 'COMMENTS', payload: this.state.comments})
      this.props.history.push('/');
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
            <h1>Please provide any comments you have about today.</h1>
            <form>
                {/* <textarea rows="5" cols="80" id="TITLE">
                </textarea> */}
                <br></br>
                    <textarea rows="5" cols="80" id="TITLE"className="textboxid" type="text" placeholder="Insert emotion here"
                        value={this.comments} 
                        onChange={this.handleChange}>
                    </textarea>
                    &nbsp;
                <button onClick={(event) => this.handleSubmit(event)}>NEXT</button>
            </form>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Comments);
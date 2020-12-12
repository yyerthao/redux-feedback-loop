import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
// Material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import '../App/App.css';

const styles = theme => ({
    button: {
        margin: theme.spacing(),
    },
    input: {
        display: 'none',
    },
    textField: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
        width: 200,
  },
});


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
      this.props.dispatch({type: 'FEELINGS', payload: this.state.feedback})
      this.props.history.push('/understanding');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
          feedback: event.target.value
      })
  }

    render(){
          const classes = this.props;
        return(
            <>
            <h1>How goes the feels today?</h1>
            <p><i>On a scale of 1 through 10, 1 being not good and 10 being great,
                tell us how you're feeling.</i></p>
            <form>
                <TextField 
                    id="standard-feelings"
                    abel="feelings*"
                    required
                    min="1"
                    max="10"
                    className="inputForms"
                    type="number" 
                    placeholder="Insert rating here"
                    value={this.feedback} 
                    onChange={this.handleChange}>
                </TextField>
                    &nbsp;
                 <Button
                    onClick={(event) => this.handleSubmit(event)} 
                    variant="contained" 
                    className={classes.button}>
                        Next
                </Button>
                {/* <button onClick={(event) => this.handleSubmit(event)}>NEXT</button> */}
            </form>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Form));
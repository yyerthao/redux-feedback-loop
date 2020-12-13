import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
// Material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../Feeling/Feeling.css';

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
    feeling: 0
 }

// handleSubmit function to handle user's input and send it to redux
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding feeling', this.state.feeling);
      this.props.dispatch({type: 'ADD_FEELINGS', payload: this.state})
      this.props.history.push('/understanding');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
          feeling: event.target.value
      })
  }

    render(){
          const classes = this.props;
        return(
            <>
            <h1>How goes the feeling today?</h1>
            <p><i>On a scale of 1 through 10, 1 being not good and 10 being great,
                tell us how you're feeling.</i></p>
            <form>
                <TextField 
                    required
                    min = "1"
                    max = "10"
                    type="number" 
                    placeholder="Insert rating here"
                    value={this.feeling} 
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
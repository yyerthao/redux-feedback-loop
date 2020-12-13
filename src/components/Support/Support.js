import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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


class Support extends Component{

 state = {
    support: 0
 }

// handleSubmit function to handle user's input and send it to redux
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding support', this.state.support);
      this.props.dispatch({type: 'SUPPORT', payload: this.state})
      this.props.history.push('/comments');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
    // this sets a new state 
      this.setState({
        support: event.target.value
      })
  }

    render(){
          const classes = this.props;
        return(
            <>
            <h1>How goes the support today?</h1>
            <p><i>On a scale of 1-10, 1 being not good and 10 being great.</i></p>
            <form>
                <TextField 
                    required
                    min = "1"
                    max = "10"
                    type="number" 
                    placeholder="Insert rating here"
                    value={this.support} 
                    onChange={this.handleChange}>
                </TextField>
                    &nbsp;
                 <Button
                    onClick={(event) => this.handleSubmit(event)} 
                    variant="contained" 
                    className={classes.button}>
                        Next
                </Button>
            </form>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Support));
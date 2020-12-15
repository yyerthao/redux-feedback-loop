import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
            <h2>Did you feel supported today?</h2>
            <p><i>On a scale of 1 to 5, 1 being not good and 5 being great.</i></p>
            <form onSubmit={this.handleSubmit}>
                <input type="radio" id="1" name="selection" value="1"
                    checked={this.state.support === "1"}
                    onChange={this.handleChange}
                    required="required"/>
                <label htmlFor="1">One</label>

                <input type="radio" id="2" name="selection" value="2"
                    checked={this.state.support === "2"}
                    onChange={this.handleChange}/>
                <label htmlFor="2">Two</label>

                <input type="radio" id="3" name="selection" value="3"
                    checked={this.state.support === "3"}
                    onChange={this.handleChange}/>
                <label htmlFor="3">Three</label>

                <input type="radio" id="4" name="selection" value="4"
                    checked={this.state.support === "4"}
                    onChange={this.handleChange}/>
                <label htmlFor="4">Four</label>

                <input type="radio" id="5" name="selection" value="5"
                    checked={this.state.support === "5"}
                    onChange={this.handleChange}/>
                <label htmlFor="5">Five</label>
                <br></br>
                <br></br>
                    &nbsp;
                 <Button
                    type="submit"
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
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
// Material-ui
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  }
});


class Form extends Component{

  // created state, feedback array is empty right now
 state = {
    feeling: 0,
 }

// handleSubmit function to handle user's input values and send it to redux store
  handleSubmit = (event) => {
      event.preventDefault();
      console.log('Adding feeling', this.state.feeling);
      this.props.dispatch({type: 'FEELINGS', payload: this.state})
      this.props.history.push('/understanding');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
            feeling: event.target.value
      })
  }

    render(){
          const {classes} = this.props;
        return(
            <>
            <h1>How goes the feels today?</h1>
            <p><i>On a scale of 1 to 5, 1 being not good and 5 being great,
                tell us how you're feeling.</i></p>
            <form onSubmit={this.handleSubmit}>
                <input type="radio" id="1" name="selection" value="1"
                    checked={this.state.feeling === "1"}
                    onChange={this.handleChange}
                    required="required"/>
                <label htmlFor="1">One</label>

                <input type="radio" id="2" name="selection" value="2"
                    checked={this.state.feeling === "2"}
                    onChange={this.handleChange}/>
                <label htmlFor="2">Two</label>

                <input type="radio" id="3" name="selection" value="3"
                    checked={this.state.feeling === "3"}
                    onChange={this.handleChange}/>
                <label htmlFor="3">Three</label>

                <input type="radio" id="4" name="selection" value="4"
                    checked={this.state.feeling === "4"}
                    onChange={this.handleChange}/>
                <label htmlFor="4">Four</label>

                <input type="radio" id="5" name="selection" value="5"
                    checked={this.state.feeling === "5"}
                    onChange={this.handleChange}/>
                <label htmlFor="5">Five</label>
                
                
                <br></br>
                <br></br>
                 <Button
                    type="submit"
                    value="submit"
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
export default connect(putStateOnProps)(withStyles(styles)(Form));
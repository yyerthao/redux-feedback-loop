import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ThankYou.css';

const styles = theme => ({
    buttonThanks: {
        margin: theme.spacing(),
    },
    input: {
        display: 'none',
    },
});


class ThankYou extends Component{
  
// brings user back to home
returnHome = (event) => {
    this.props.dispatch({type: 'NEW_FEEDBACK'})
    this.props.history.push('/');

}


    render(){
        const classes = this.props;
        return(
            <>
            <h1 className="ThankYouHeaderOne">Thank you for your feedback!</h1>
                <Button
                    onClick={(event) => this.returnHome(event)} 
                    variant="contained" 
                    className={classes.buttonThanks}>
                        Add New Feedback
                </Button>
            </>
        )
    }
}


export default connect()(withStyles(styles)(ThankYou));
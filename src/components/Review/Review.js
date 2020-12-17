import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Review.css';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        width: 150,
    },
  root: {
          width: '100%',
          marginTop: theme.spacing(),
          overflowX: 'auto',
      },
      table: {
          minWidth: 700,
      },

});


class Review extends Component{

state = {
    collectedFeedback: {
        feeling: this.props.feelingsReducer.feeling,
        understanding: this.props.understandReducer.understanding,
        support: this.props.supportReducer.support,
        comments: this.props.commentsReducer.comments
    }
}

// brings user to thank you view
thankYou = (event) => {
    this.props.dispatch({type: 'NEW_FEEDBACK'})
    this.props.history.push('/thankyou');

}

// brings user back to home page to add new feedback
// will dispatch to reducer NEW_FEEDBACK to clear saved array info
restartFeedback = (event) => {
    this.props.dispatch({type: 'NEW_FEEDBACK'})
    this.props.history.push('/');
}

handleSubmit = (event) => {
  event.preventDefault();
  // TODO - axios request to server to add feedback
    axios.post('/feedback', this.state.collectedFeedback)
    .then((response) => {
        console.log(' ---------------- POST WORKING', response)
    }).catch((err) => {
        console.log('POST NOT WORKING', err);
        alert('POST did not work, try again.');
    });
    this.props.history.push('/thankyou');
} // end handleSubmit 

    render(){
        const { classes, feelingsReducer, understandReducer, supportReducer, commentsReducer} =this.props;
        return(
            <>
            <div className="review-div">
                <h2>Review Your Feedback</h2>
                <Table className="mui-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        {/* <TableCell>Comments</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{feelingsReducer.feeling}</TableCell>
                        <TableCell>{understandReducer.understanding}</TableCell>
                        <TableCell>{supportReducer.support}</TableCell>
                        {/* <TableCell>{commentsReducer.comments}</TableCell> */}
                    </TableRow>
                </TableBody>
                </Table>
                <div className="comments-div">
                    <h2>Comments:</h2>
                    <p>{commentsReducer.comments}</p>
                </div>
                
                 <Button
                    onClick={(event) => this.restartFeedback(event)}
                    variant="contained" 
                    className={classes.button}>
                        Restart Feedback
                </Button>
                &nbsp;
                &nbsp;
                 <Button
                    onClick={(event) => this.handleSubmit(event)}
                    variant="contained" 
                    className={classes.button}>
                        Submit Review
                </Button>
                <br></br>
            </div>
            </>
        )
    }  
}


// left side is taco 
// accessing each individual reducer 
const putStateOnProps = (reduxState) => ({
    feelingsReducer: reduxState.feelingsReducer,
    understandReducer: reduxState.understandReducer,
    supportReducer: reduxState.supportReducer,
    commentsReducer: reduxState.commentsReducer,
});

// connect with method puts redux onto props
// connect(putStateOnProps) 
export default connect(putStateOnProps)(withStyles(styles)(Review));


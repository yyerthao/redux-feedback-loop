import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import './Review.css';
import axios from 'axios';

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

handleSubmit = (event) => {
  event.preventDefault();
  // TODO - axios request to server to add book
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
        const {feelingsReducer, understandReducer, supportReducer, commentsReducer} =this.props;
        // const classes = this.props;
        return(
            <>
            <div>
                <h1>Review Your Feedback</h1>

                <p>Feeling: {feelingsReducer.feeling}</p>
                <p>Understanding: {understandReducer.understanding}</p>
                <p>Support: {supportReducer.support}</p>
                <p>Comments: {commentsReducer.comments}</p>
                 <button
                    onClick={(event) => this.handleSubmit(event)}>
                    {/* //  variant="contained" 
                    //  className={classes.button} */}
                        Next
                </button>
                <br></br>
            </div>
            </>
        )
    }  
}


const putStateOnProps = (reduxState) => ({
    feelingsReducer: reduxState.feelingsReducer,
    understandReducer: reduxState.understandReducer,
    supportReducer: reduxState.supportReducer,
    commentsReducer: reduxState.commentsReducer,
});

export default connect(putStateOnProps)(withStyles(styles)(Review));



/* {this.state.reduxState.feedBackReducer.map((feed, i) => {
    return (
     //    getting product passed through ProductListItem
     //    product is a regular prop, not using redux directly
     <ul>
        <li key={i}>{this.props.feed.feels}</li>
        <li key={i}>{this.props.feed.understanding}</li>
        <li key={i}>{this.props.feed.support}</li>
        <li key={i}>{this.props.feed.comments}</li>
     </ul>
    );
})}  */
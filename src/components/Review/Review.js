import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

// brings user to thank you view
thankYou = (event) => {
    this.props.dispatch({type: 'NEW_FEEDBACK'})
    this.props.history.push('/thankyou');

}

  handleOnClick = () => {
      console.log('ReduxState object: ', this.props.reduxState);
      axios({
              method: 'POST',
              url: '/feedback',
              data: this.props.reduxState,
          })
          .then((response) => {
              console.log('response', response);
              console.log('response.data', response.data);
              this.props.history.push('/thankyou');
          })
          .catch((err) => {
              console.error(err);
          });
  };


    render(){
        const classes = this.props;
        return(
            <>
            <div>
                <h1>Review Your Feedback</h1>

                 <Button
                    onClick={(event) => this.thankYou(event)} 
                    variant="contained" 
                    className={classes.button}>
                        Next
                </Button>
            </div>
            </>
        )
    }
}


const putStateOnProps = (reduxState) => ({reduxState});

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
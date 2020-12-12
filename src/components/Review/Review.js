import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
      feedback: {
          feels: '',
          understanding: '',
          support: '',
          comments: ''
      }
  }


componentDidMount(){
    this.getFeed();
}

getFeed = () => {
    axios({
        method: 'GET',
        url: '/feedback'
    }).then((response) => {
        console.log('back from GET:', response.data);
        this.setState({
            feedBack: response.data
        })
    }).catch((err) => {
        console.log(err);
        alert('problem with GET request');
    }) // end axios
} // end getFeed

returnHome = (event) => {
    this.props.dispatch({type: 'NEW_FEEDBACK'})
    this.props.history.push('/');

}



    render(){
        const classes = this.props;
        return(
            <>
            <div>
                <h1>Review Your Feedback</h1>
                   {/* {this.state.reduxState.feedBackReducer.map((feed, i) => {
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
                   })}  */}
                 <Button
                    onClick={(event) => this.returnHome(event)} 
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
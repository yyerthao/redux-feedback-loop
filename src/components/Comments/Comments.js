import React, { Component } from 'react';
import { connect } from "react-redux";
import './Comments.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import axios from 'axios';

const styles = theme => ({
    button: {
        margin: theme.spacing(),
    },
    input: {
        display: 'none',
    },
});

class Comments extends Component{

state = {
    comments: ''
}

// handleSubmit function to handle user's input and send it to redux
  returnHome = (event) => {
      event.preventDefault();
      console.log('Adding comments', this.state.comments);
      this.props.dispatch({type: 'COMMENTS', payload: this.state})
      this.props.history.push('/review');
  }

  // handleChange function to handle event of input fields incoming change
  handleChange = (event) => {
      this.setState({
          comments: event.target.value
      })
  }

  

// componentDidMount(){
//     this.getFeed();
// }

// getFeed = () => {
//     axios({
//         method: 'GET',
//         url: '/feedback'
//     }).then((response) => {
//         console.log('back from GET:', response.data);
//         this.setState({
//             feedBack: response.data
//         })
//     }).catch((err) => {
//         console.log(err);
//         alert('problem with GET request');
//     }) // end axios
// } // end getFeed

//      addFeed = (event) => {
//         event.preventDefault();
//         console.log('Adding feedback', this.state.feedback);
//         console.log('Adding comments', this.state.comments);
//         this.props.dispatch({type: 'COMMENTS', payload: this.state.comments})
//         this.props.history.push('/review');
//        axios.post('/feedback', {
//                name: this.state.feedback
//            })
//            .then((response) => {
//                console.log('back from POST', response.data);
//                this.getFeed();
//                this.setState({
//                    feedback: '',
//                })
//            })

//    }


    render(){
        const classes = this.props;
        return(
            <>
            <h1>Please provide comments about today.</h1>
            <form>
                <br></br>
                {/* added textarea instead of input in order to create a larger text box */}
                    <textarea 
                        rows="5" 
                        cols="80" 
                        id="TITLE"
                        className="textboxid" 
                        type="text" 
                        placeholder="Insert comments here"
                        value={this.comments} 
                        onChange={this.handleChange}>
                    </textarea>
                    &nbsp;
                    <br></br>
                <Button
                    onClick={(event) => this.returnHome(event)} 
                    variant="contained" 
                    className={classes.button}>
                        Start Over
                </Button>
                &nbsp;
                &nbsp;
                <Button 
                    onClick={(event) => this.returnHome(event)}
                    variant="contained"
                    className={classes.button}>
                        Complete Feed Back
                </Button>
                {/* <button onClick={(event) => this.handleSubmit(event)}>NEXT</button> */}
            </form>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Comments));
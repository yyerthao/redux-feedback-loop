import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Home.css'

const styles = theme => ({
    buttonThanks: {
        margin: theme.spacing(),
    },
    input: {
        display: 'none',
    },
});

class Home extends Component{

startFeedBack = (event) => {
    console.log('You  may enter the dungeon to feed the birds, oops I mean master instructors.');
    this.props.history.push('/feeling');
}

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>It's your turn to feed the feedbackers</h2>
                    <Button
                        onClick={(event) => this.startFeedBack(event)} 
                        variant="contained" 
                        className={classes.button}>
                            Click to feed
                    </Button>
                <footer><p><i>"Delivering and receiving feedback is a skill"</i></p> 
                    <p><i> - quote from a photo from gapingvoid</i></p></footer>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Home));
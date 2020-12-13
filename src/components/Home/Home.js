import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
            <h3>delivery and receiving feedback, is a skill</h3>
            <h4>@gapingvoid</h4>
                <Button
                    onClick={(event) => this.startFeedBack(event)} 
                    variant="contained" 
                    className={classes.button}>
                        Feed the feed!
                </Button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(withStyles(styles)(Home));
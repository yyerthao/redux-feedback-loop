import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Review from '../Review/Review';

import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom'; 

class App extends Component {

  
  // refreshFeed = () => {
  //   // just like $.ajax()
  //   axios({
  //     method: 'GET',
  //     url: '/feedback'
  //   }).then((response) => {
  //     console.log('back from GET:', response.data);
  //     // dispatch array results 
  //     this.props.dispatch({
  //       type: 'GET_FEEDBACK',
  //       payload: response.data
  //     })
  //   }).catch((err) => {
  //     console.log(err);
  //     alert('problem with GET request');
  //   }) // end axios
  // } // end refreshFeed
  
  

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feed the feed!</h1>
          {/* <h2><i>Help us help you!</i></h2> */}
        </header>
        <div className="inner-div">
        <br></br>
        <Router>
          {/* Will remove visible links soon, leaving for testing purposes */}
          {/* <Link to="/">Home</Link>&nbsp;
          <Link to="/understanding">Understanding</Link>&nbsp;
          <Link to="/support">Support</Link>&nbsp;
        <Link to="/comments">Comments</Link> */}
          <br/>
          {/* setting / as first view for feedback to collect feelings */}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/feeling" component={Feeling}></Route>
          <Route exact path="/understanding" component={Understanding}></Route>
          <Route exact path="/support" component={Support}></Route>
          <Route exact path="/comments" component={Comments}></Route>
          <Route exact path="/thankyou" component={ThankYou}></Route>
          <Route exact path="/review" component={Review}></Route>
        </Router>
        </div>
      </div>
    );
  }
}


const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(App);
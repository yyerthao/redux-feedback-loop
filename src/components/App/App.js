import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Form from '../Form/Form';
import Understanding from '../Understanding/Understanding';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom'; 

class App extends Component {


  // componentDidMount fires up right away upon DOM loaded
  // runs get function to run axios get call to server right away
  // to ensure our array gets filled with necessary data
  componentDidMount(){
    console.log('---------- DOM READY TO GO ----------')
    // this.refreshFeed();
  }
  
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
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <br/>
          {/* setting / as first view for feedback to collect feelings */}
          <Route exact path="/" component={Form}></Route>
          <Route path="/understanding" component={Understanding}></Route>
          {/* <Route path="/support" component={}></Route>
          <Route path="/comments" component={}></Route> */}
        </Router>
      </div>
    );
  }
}


const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(App);
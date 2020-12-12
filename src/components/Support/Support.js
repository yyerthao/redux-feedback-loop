import React, { Component } from 'react';
import { connect } from "react-redux";
class Support extends Component{
    render(){
        return(
            <>
            <h1>Hello from support page</h1>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Support);
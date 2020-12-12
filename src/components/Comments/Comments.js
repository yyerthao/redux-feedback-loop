import React, { Component } from 'react';
import { connect } from "react-redux";

class Comments extends Component{
    render(){
        return(
            <>
            <h1>Hello from Comments</h1>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({reduxState});
export default connect(putStateOnProps)(Comments);
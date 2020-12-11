import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
            <>
            <h1>How goes the feels today?</h1>
            <p><i>On a scale of 1-10, 1 being not good and 10 being great.</i></p>
            <input type="number" placeholder="Insert emotion here"></input>&nbsp;
            <button>NEXT</button>
            </>
        )
    }
}

export default Form;
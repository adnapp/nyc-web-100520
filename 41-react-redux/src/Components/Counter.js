import React from "react"
import {connect} from 'react-redux'

function Counter(props){
    console.log("Counter Props: ", props)
    return <h4>Counter: {props.counter}</h4>
}

// mapStateToProps
function msp(state){
    console.log("map state: ", state.counter)
    return {counter: state.counter}
}

export default connect(msp)(Counter)
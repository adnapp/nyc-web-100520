import {combineReducers} from 'redux'
// responsible for managing our state
// it always returns a new state object 

const defaultState = {
    counter: 0,
    user: null
}

function counterReducer(prevState = defaultState.counter, action){
    console.log("here")
    switch (action.type) {
        case "INCREMENT_COUNTER" :
            console.log("Reducer Action", action) 
            console.log("Reducer Prev State", prevState) 
            return ++prevState       
            break;  
        default:
            return prevState
    }
}

function userReducer(prevState = defaultState.user, action){
    return {}
}

// pure functions 

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

export default rootReducer
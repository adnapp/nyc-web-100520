import {combineReducers} from 'redux'

const defaultState = {
    counter: 0,
    user: null,
    blogs: []
}

function counterReducer(prevState = defaultState.counter, action){
    switch (action.type) {
        case "INCREMENT_COUNTER" :
            console.log("Reducer Action", action) 
            console.log("Reducer Prev State", prevState) 
            return ++prevState       
        case "DECREMENT_COUNTER" :
            return --prevState       
        default:
            return prevState
    }
}

function userReducer(prevState = defaultState.user, action){
    switch (action.type) {
        case "LOGIN":
            return {user: "user in here"}    
        default:
            return prevState
    }
}

function blogsReducer(prevState = defaultState.blogs, action){
    switch (action.type) {
        case "FETCH_BLOGS":
            return action.payload   
            case "POST_BLOG":
            console.log("In API Reducer: ", action)
            return [...prevState, action.payload]   
            case "UPDATE_BLOG":
            console.log("In API Reducer: ", action)
            return [...prevState, action.payload]   
        default:
            return prevState
    }
}

// pure functions 

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    blogs: blogsReducer
})

export default rootReducer
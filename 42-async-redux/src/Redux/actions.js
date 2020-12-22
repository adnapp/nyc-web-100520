
// action creators => {type: "" }
// functions that return actions

import { INCREMENT, FETCH_BLOGS, POST_BLOG } from "./actionTypes";

export function incrementCounter(){
    return {type: INCREMENT }
}

export function fetchBlogs(){
    // let action
    // setTimeout(()=>{fetch.then.then(action = data)})

    // return {type: "", action}
    console.log("in fetch Action Creator")
    return function(dispatch, getState){
        fetch("http://localhost:5000/blogs")
        .then(resp=>resp.json())
        .then(arrayOfBlogs => {

            dispatch({type: FETCH_BLOGS, payload: arrayOfBlogs})
        })
        .catch(console.log)
    }
}

export function postBlog(newBlogObject){
    console.log("in fetch Action Creator")
    return function(dispatch, getState){
        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(newBlogObject)
        })
        .then(resp=>resp.json())
        .then(blogObject => dispatch({type: POST_BLOG , payload: blogObject}))
        .catch(console.log)
    }
}

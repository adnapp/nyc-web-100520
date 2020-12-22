import React from 'react'
import {connect} from 'react-redux'
import {postBlog} from '../Redux/actions'

class CreateForm extends React.Component{

    state = {
        title: "",
        image:"",
        author: "",
        url: ""
    }

    inputChangeHandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e)=>{
        e.preventDefault()
         this.props.addBlog(this.state)
         this.setState({title: "", image:"", author:"", url:""})
    }
    render(){
        console.log("rendering")
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                type="text" 
                placeholder="title"
                name="title" 
                value={this.state.title}
                onChange={this.inputChangeHandler}
                />

                <input 
                type="text" 
                name="image" 
                placeholder="image" 
                value={this.state.image} 
                onChange={this.inputChangeHandler}

                />

                <input 
                type="text" 
                name="author" 
                placeholder="author" 
                value={this.state.author} 
                onChange={this.inputChangeHandler}

                />

                <input 
                type="text" 
                name="url" 
                placeholder="url" 
                value={this.state.url} 
                onChange={this.inputChangeHandler}

                />

                <button>Add Blog</button>
            </form>
            )
    }
}

function mdp(dispatch){
    return {addBlog: (newBlogObject) => dispatch(postBlog(newBlogObject))}
}

export default connect(null, mdp)(CreateForm)
import React from 'react'

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
    
    localSubmitHandler = (e)=>{
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render(){
        console.log("rendering")
        return (
            <form onSubmit={this.localSubmitHandler}>
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

export default CreateForm
import React from 'react'

class EditForm extends React.Component{
    state={
        title: this.props.defaultValue
    }
    localChangeHandler = (e)=>{
        this.setState({title: e.target.value})
    }

    localSubmitHandler = (e)=>{
        e.preventDefault()
        this.props.resetTitle()
        this.props.submitHandler(this.props.blogId, this.state)
        this.setState({title: ""})
    }

    render(){
        return(
            <form onSubmit={this.localSubmitHandler}>
                <input type="text" value={this.state.title} onChange={this.localChangeHandler}/>
                <button>Update</button>
            </form>
        )
    }
}

export default EditForm
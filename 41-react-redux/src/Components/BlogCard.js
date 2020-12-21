import React, {Component} from 'react'
import {connect} from 'react-redux'
import {incrementCounter} from '../Redux/actions'
import EditForm from './EditForm'

// props => {blogObject: {}}

class BlogCard extends Component{
    // pre-es6
    // constructor(props){
    //     super(props)
    //     this.state = {test: this.props}
    // }

    // es6
 
    state = {
        counter: 0,
        beenClicked: false,
        titleBeenClicked: false
    }

    // thunk => delay execution of a function 


    moreDetailsClickHandler = ()=>{
        console.log("clicking")
        this.setState((prevState)=> ({beenClicked: !prevState.beenClicked}))
    }

    titleClickHandler = ()=>{
        this.setState({titleBeenClicked: !this.state.titleBeenClicked})
    }

    renderMoreDetails = () =>{
        const {blogObject} = this.props
        if(this.state.beenClicked){
            return <h4>By: {blogObject.author}</h4>
        }
    }

    localAddSavedBlog = ()=>{
        this.props.addSavedBlog(this.props.blogObject)
    }

    resetTitle = ()=>{
        this.setState({titleBeenClicked: false})
    }

    incrementClickHandler = ()=>{
        this.props.increment()
    }

    render(){
        const {blogObject, increment} = this.props
        return(
            <div>
            {this.state.titleBeenClicked ? 
            
            <EditForm defaultValue={blogObject.title} blogId={blogObject.id} submitHandler={this.props.editSubmitHandler} resetTitle={this.resetTitle}/>  
            :
            <h5 onClick={this.titleClickHandler}>{blogObject.title}</h5>
            }


            <img alt="Blog" className="" style={{ maxWidth: "70vw", maxHeight: "20vh" }} src={blogObject.image} onClick={this.incrementClickHandler}/>


            {this.renderMoreDetails()}
            <button onClick={this.localAddSavedBlog}>Save</button>
            <button>Visit</button>
            <button onClick={this.moreDetailsClickHandler}>{this.state.beenClicked ? "Less Details":"More Details"}</button>
        </div>
        )
    }
}

function mdp(dispatch){
    console.log("map Dispatch", dispatch)
    return {increment: () => dispatch(incrementCounter())}
}

export default connect(null, mdp)(BlogCard)
import React, {Component} from 'react'

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
        beenClicked: false
    }

    // thunk => delay execution of a function 


    moreDetailsClickHandler = ()=>{
        console.log("clicking")
        this.setState((prevState)=> ({beenClicked: !prevState.beenClicked}))
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

    render(){

        const {blogObject} = this.props
        return(
            <div>
            <h5>{blogObject.title}</h5>
            <img alt="Blog" className="" style={{ maxWidth: "70vw", maxHeight: "20vh" }} src={blogObject.image} />
            {this.renderMoreDetails()}
            <button onClick={this.localAddSavedBlog}>Save</button>
            <button>Visit</button>
            <button onClick={this.moreDetailsClickHandler}>{this.state.beenClicked ? "Less Details":"More Details"}</button>
        </div>
        )
    }
}


// condition ? true return : false return 

// function BlogCard(props) {
//     const { blogObject } = props
//     return (
//         <div>
//             <h5>{blogObject.title}</h5>
//             <img alt="Blog" className="" style={{ maxWidth: "70vw", maxHeight: "20vh" }} src={blogObject.image} />
//             <h4>Counter: 0</h4>
//             <button>Save</button>
//             <button>Visit</button>
//         </div>
//     )
// }

export default BlogCard
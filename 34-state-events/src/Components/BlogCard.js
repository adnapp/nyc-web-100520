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
        counter: 0
    }

    // thunk => delay execution of a function 
    incrementCounter = () => {
        console.log("clicking", this.state.counter)
        // this.setState({counter: this.state.counter + 1})
        this.setState((prevState)=> ({counter: prevState.counter + 1}))
    }

    render(){
        console.log("State in Card: ", this.state)
        const {blogObject} = this.props
        return(
            <div>
            <h5>{blogObject.title}</h5>
            <img alt="Blog" className="" style={{ maxWidth: "70vw", maxHeight: "20vh" }} src={blogObject.image} />
            <h4>Counter: {this.state.counter}</h4>
            <button onClick={this.incrementCounter}>Save</button>
            <button>Visit</button>
        </div>
        )
    }
}



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
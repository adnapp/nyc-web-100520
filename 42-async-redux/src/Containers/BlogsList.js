import React from 'react'
import {connect} from 'react-redux'
import BlogCard from '../Components/BlogCard'
import CreateForm from '../Components/CreateForm'
import SearchForm from '../Components/SearchForm'
import { fetchBlogs, postBlog } from '../Redux/actions'

class BlogsList extends React.Component {

    state={
        searchTerm: ""
        }

    componentDidMount(){
       this.props.getBlogs()
    }

    // promises 
    // codecademy promises javascript 
    // async componentDidMount(){
    //     const response = await fetch("http://localhost:5000/blogs")
    //     const arrayofBlogs = await response.json()
    //     this.setState({apiResponse: arrayofBlogs})
    // }

    filteredArrayOfBlogCards = () => {
        let filteredArray = this.props.blogs.filter(blogEl => blogEl.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

        return filteredArray.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} addSavedBlog={this.props.addSavedBlog} editSubmitHandler={this.editSubmitHandler}/>)
    }


    editSubmitHandler = (blogId, blogTitle)=>{

        console.log("Inside of Edit")

        fetch(`http://localhost:5000/blogs/${blogId}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(blogTitle)
        })
        .then(resp=>resp.json())
        .then(updatedBlogObject => {
            let newArray = [...this.props.blogs]
            // find the location of the old object inside the array
            const idx = newArray.findIndex(blogEl => blogEl.id === updatedBlogObject.id)

            // replace the old object with the new object at that exact location 
            newArray[idx] = updatedBlogObject

            this.setState({apiResponse: newArray})


        })
        .catch(console.log)
    }

    searchChangeHandler = (e) => {
        this.setState({searchTerm: e.target.value })
    }

    render() {
        return (
            <>
                <CreateForm />

                <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler}/>

                {this.filteredArrayOfBlogCards()}
            </>
        )
    }
}

function msp(state){
    return {blogs: state.blogs}
}


// INVOKING VS DEFINING 


function mdp(dispatch){
    return {
        getBlogs: () => dispatch(fetchBlogs())
    }
}

export default connect(msp, mdp)(BlogsList)
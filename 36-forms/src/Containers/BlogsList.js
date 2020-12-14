import React from 'react'
import apiResponse from '../fakeAPI'
import BlogCard from '../Components/BlogCard'
import CreateForm from '../Components/CreateForm'
import SearchForm from '../Components/SearchForm'

class BlogsList extends React.Component {

    state={
        apiResponse,
        searchTerm: "test"
    }

    filteredArrayOfBlogCards = () => {
        let filteredArray = this.state.apiResponse.filter(blogEl => blogEl.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

        // "title".includes("") => true

        return filteredArray.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} addSavedBlog={this.props.addSavedBlog}/>)
    }

    createSubmitHandler = (newBlogObject)=>{
        console.log("object in submit handler", newBlogObject)
        this.setState({apiResponse: [newBlogObject, ...this.state.apiResponse]})
    }

    searchChangeHandler = (e) => {
        this.setState({searchTerm: e.target.value })
    }

    render() {
        return (
            <>
                <CreateForm submitHandler={this.createSubmitHandler}/>

                <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler}/>

                {this.filteredArrayOfBlogCards()}
            </>
        )
    }
}

export default BlogsList
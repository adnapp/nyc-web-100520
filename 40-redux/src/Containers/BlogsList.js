import React from 'react'
import BlogCard from '../Components/BlogCard'
import CreateForm from '../Components/CreateForm'
import SearchForm from '../Components/SearchForm'

class BlogsList extends React.Component {

    state={
        apiResponse: [],
        searchTerm: "",
        }

    componentDidMount(){
        fetch("http://localhost:5000/blogs")
        .then(resp=>resp.json())
        .then(arrayOfBlogs => this.setState({apiResponse: arrayOfBlogs}))
        .catch(console.log)

    }

    // promises 
    // codecademy promises javascript 
    // async componentDidMount(){
    //     const response = await fetch("http://localhost:5000/blogs")
    //     const arrayofBlogs = await response.json()
    //     this.setState({apiResponse: arrayofBlogs})
    // }

    filteredArrayOfBlogCards = () => {
        let filteredArray = this.state.apiResponse.filter(blogEl => blogEl.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

        return filteredArray.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} addSavedBlog={this.props.addSavedBlog} editSubmitHandler={this.editSubmitHandler}/>)
    }

    createSubmitHandler = (newBlogObject)=>{
        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(newBlogObject)
        })
        .then(resp=>resp.json())
        .then(blogObject => {
            this.setState({apiResponse: [...this.state.apiResponse, blogObject]})
        })
        .catch(console.log)
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
            let newArray = [...this.state.apiResponse]
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
                <CreateForm submitHandler={this.createSubmitHandler}/>

                <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler}/>

                {this.filteredArrayOfBlogCards()}
            </>
        )
    }
}

export default BlogsList
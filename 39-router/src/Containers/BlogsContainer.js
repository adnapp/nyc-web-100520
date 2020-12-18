import React from 'react'
import {Route, Switch} from 'react-router-dom'
import BlogCard from '../Components/BlogCard'
import CreateForm from '../Components/CreateForm'
import SearchForm from '../Components/SearchForm'
import SavedBlogs from './SavedBlogs'

class BlogsContainer extends React.Component {

    state={
        apiResponse: [],
        searchTerm: "",
        savedBlogs: []
        }

    componentDidMount(){
        fetch("http://localhost:5000/blogs")
        .then(resp=>resp.json())
        .then(arrayOfBlogs => this.setState({apiResponse: arrayOfBlogs}))
        .catch(console.log)

    }

    addSavedBlog = (blogObject)=>{
        console.log("Inside of App click handler", blogObject)

        // Why spread operator?

        this.setState({savedBlogs: [...this.state.savedBlogs, blogObject]})

  }

    filteredArrayOfBlogCards = () => {
        let filteredArray = this.state.apiResponse.filter(blogEl => blogEl.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

        return filteredArray.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} addSavedBlog={this.addSavedBlog} editSubmitHandler={this.editSubmitHandler}/>)
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
            this.setState({apiResponse: [...this.state.apiResponse, blogObject]}, () => this.props.history.push(`/blogs/${blogObject.id}`))

            // console.log("Props in BlogsContainer", this.props)
            

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
            <Switch>
                <Route path="/blogs/saved" render={()=> <SavedBlogs savedBlogs={this.state.savedBlogs}/>} />

                <Route path="/blogs/new" render={(routerProps)=>  <CreateForm submitHandler={this.createSubmitHandler}/>} />

                <Route path="/blogs/:id" render={(routerProps)=> {
                    const blogId = parseInt(routerProps.match.params.id)

                    const foundBlog = this.state.apiResponse.find(blogEl => blogEl.id === blogId)
                        
                    let blogCard

                    if(foundBlog){
                        blogCard = <BlogCard blogObject={foundBlog} addSavedBlog={this.addSavedBlog} editSubmitHandler={this.editSubmitHandler}/>
                    }else{
                        blogCard = <h1>Loading</h1>
                    }



                    return blogCard
                }} />

                <Route path="/blogs" render={()=> {
                    return (
                        <>
                            <SearchForm searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler}/>

                            {this.filteredArrayOfBlogCards()}
                        </>
                    )
                }} />

            </Switch>
               

                
            </>
        )
    }
}

export default BlogsContainer
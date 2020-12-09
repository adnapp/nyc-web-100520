import React from 'react'
import apiResponse from '../fakeAPI'
import BlogCard from '../Components/BlogCard'
class BlogsList extends React.Component {


    // grab our api response
    // iterate through the array
    // create a Blog Card for each element in the array
    // if we return an array of jsx elements React will iterate and mount each of those elements

    // this? 

    arrayOfBlogCards = () => {
        return apiResponse.map(blogEl => <BlogCard blogObject={blogEl} />)
    }

    render() {
        // this will return an array of Blog Cards
        // If given an array of jsx element, react will print each element
        return (
            <>
                {this.arrayOfBlogCards()}
            </>
        )
    }
}

export default BlogsList
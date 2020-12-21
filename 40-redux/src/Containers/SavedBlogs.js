import React from 'react'
import BlogCard from '../Components/BlogCard'

function SavedBlogs(props){

    function renderBlogCards(){
        return props.savedBlogs.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} clickHandler={"?"}/>)
    }

    return(
        <>
            {renderBlogCards()}
        </>
    )
}


export default SavedBlogs
import React from 'react'
import BlogCard from '../Components/BlogCard'

function SavedBlogs(props){

    function renderBlogCards(){
        return props.savedBlogs.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} clickHandler={"?"}/>)
    }

    return(
        <>
        <h1>Saved Blogs</h1>
            {/* {renderBlogCards()} */}
        </>
    )
}


export default SavedBlogs
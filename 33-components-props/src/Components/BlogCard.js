import React from 'react'

// props => {blogObject: {}}
function BlogCard(props) {
    const { blogObject } = props
    return (
        <div>
            <h5>{blogObject.title}</h5>
            <img alt="Blog" className="" style={{ maxWidth: "70vw", maxHeight: "20vh" }} src={blogObject.image} />
            <button>Save</button>
            <button>Visit</button>
        </div>
    )
}

export default BlogCard
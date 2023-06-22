import React from 'react'

function BlogDetails(props) {
    const {title, content} = props
  return (
    <div className='blog-box'>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default BlogDetails
import React from 'react'

export const TextPost = (props) => {
    const { post } = props
    return (
        <div className="textPost-text">
            <article>{post.text}</article>
            <div className="textPost-comments">
            <a href="#" id={post.id}>Show details</a>
            <a href="#" >Comments: {post.comments.length}</a>
            </div>
        </div>
    )
}
// onClick={showPosts}
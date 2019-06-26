import React from 'react'

export const TextPost = (props) => {
    const { post } = props
    return (
        <div className="textPost-text">
            <article>{post.text}</article>
            <div className="textPost-comments">
                <p>Comments:{post.comments.length}</p>
            </div>
        </div>
    )
}
import React from 'react'

export const ImagePost = (props) => {
    const { post } = props
    return (
        <div className="imagePost-image">
            <img src={post.imageUrl} />
            <div className="imagePost-comments">
                <a href="#" id={post.id}>Show details</a>
                <a href="#" >Comments: {post.comments.length}</a>
            </div>
        </div>
    )
}
// onClick={showPosts}
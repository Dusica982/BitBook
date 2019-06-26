import React from 'react'
// import './VideoPost.css'

export const VideoPost = (props) => {
    const { post } = props
    return (
        <div className="videoPost-player embed-responsive embed-responsive-16by9">
            <iframe id="existing-iframe-example"
                className="embed-responsive-item"
                allowfullscreen
                width="500" height="800"
                src={`${post.videoUrl}`}
                frameBorder="0"
            ></iframe>
            <div className="videoPost-comments">
                <p>Comments:{post.comments.length}</p>
            </div>
        </div>
    )
}

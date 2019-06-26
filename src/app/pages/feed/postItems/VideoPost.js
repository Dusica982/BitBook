import React from 'react'
// import Link from 'react-router-dom';

export const VideoPost = (props) => {
    const { post } = props;

    return (
        <>
            <div className="videoPost-player embed-responsive embed-responsive-16by9">
                <iframe id="existing-iframe-example"
                    className="embed-responsive-item"
                    width="500" height="800"
                    src={`${post.videoUrl}`}
                    frameBorder="0"
                ></iframe>
            </div>
            <div className="videoPost-comments">
                <a href="#" onClick={this.showPosts}>Comments: {post.comments.length}</a>
            </div>
        </>
    )
}

// {{console.log(post)}}

import React from 'react'
import { showPostDetail } from '../../../../services/fetchPosts';
import { PostDetails } from '../postItems/PostDetails';

// import { PostDetails } from '../../../../entities/PostDetails';
// import Link from 'react-router-dom';

export const VideoPost = (props) => {
    const { post } = props;

    const showPosts = (e) => {
        const uniqPostId = e.target.id;

        showPostDetail(uniqPostId)
            .then((data) => <PostDetails postDetails={data} />)
    }

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
                <a href="#" id={post.id} onClick={showPosts}>Show details</a>
                <a href="#" >Comments: {post.comments.length}</a>
            </div>
        </>
    )
}

// {{console.log(post)}}

import React from 'react'
import { showPostDetail } from '../../../../services/fetchPosts';
import { PostDetails } from '../postItems/PostDetails';

export class VideoPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postDetails: null,
        }
    }

    showPosts = (e) => {
        const uniqPostId = e.target.id;

        showPostDetail(uniqPostId)
            .then((data) => this.setState({ postDetails: data }))
    }
    render() {
        return (
            <>
                <div className="videoPost-player embed-responsive embed-responsive-16by9">
                    <iframe id="existing-iframe-example"
                        className="embed-responsive-item"
                        width="500" height="800"
                        src={`${this.props.post.videoUrl}`}
                        frameBorder="0"
                    ></iframe>
                </div>
                <div className="videoPost-comments">
                    {(this.state.postDetails !== null)
                        ? <PostDetails postDetails={this.state.postDetails} />
                        : <a href={`#video${this.props.post.id}`} id={this.props.post.id} onClick={this.showPosts}>Show details</a>}
                   
                    <a href="#" >Comments: {this.props.post.comments.length}</a>
                </div>
            </>
        )
    }
}

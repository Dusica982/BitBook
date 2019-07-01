import React from 'react'
import { showPostDetail } from '../../../../services/fetchPosts';
import { PostDetails } from '../postItems/PostDetails';

export class ImagePost extends React.Component {
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
            <div className="imagePost-box">
                <div className="imagePost-image">
                    <img src={this.props.post.imageUrl} />
                </div>
                <div className="imagePost-details">
                    {(this.state.postDetails !== null)
                        ? <PostDetails postDetails={this.state.postDetails} />
                        : <a href={`#image${this.props.post.id}`} id={this.props.post.id} onClick={this.showPosts}>Show details</a>}

                    <a href="#" >Comments: {this.props.post.comments.length}</a>
                </div>
            </div>
        )
    }
}

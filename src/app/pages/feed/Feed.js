import React from 'react';
import { fetchPosts } from '../../../services/fetchPosts';
import { PostItem } from './posts/PostItem';
import './Feed.css';

export class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    loadPosts = () => {
        fetchPosts()
            .then(posts => {
                this.setState({ posts })
                return posts
            })
    }

    componentDidMount() {
        this.loadPosts()

    }

    render() {
        const { posts } = this.state;
        return (
            <>
                <div className="containerFeed">
                    {posts.map((post, i) => <PostItem post={post} key={i} />)}
                </div>
            </>
        )
    }
}
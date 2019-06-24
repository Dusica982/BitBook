import React from 'react';
import VideoPost from './VideoPost';
import TextPost from './TextPost';
import ImagePost from './ImagePost';

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <VideoPost />
                <TextPost />
                <ImagePost />
            </div>
        )
    }

}

export default Feed;
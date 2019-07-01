import React from 'react';
import { VideoPost } from '../postItems/VideoPost';
import { ImagePost } from '../postItems/ImagePost';
import { TextPost } from '../postItems/TextPost';

export const PostItem = (props) => {
    const { post } = props;
    if (post.type === 'video') {
        return <VideoPost post={post} id={post.id}/>
    } if (post.type === 'image') {
        return <ImagePost post={post} id={post.id}/>
    } else {
        return <TextPost post={post} id={post.id}/>
    }
}
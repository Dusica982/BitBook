import React from 'react';
import { PostDetail } from '../../../../entities/PostDetail';

export const PostDetails = (props) => {
    const { postDetails } = props;

    if (postDetails.type === 'video') {
        return (
            <div>
{console.log(postDetails.id)}

                {`${postDetails.id}, ${postDetails.sid}, ${postDetails.userId}, ${postDetails.createdAt}, ${postDetails.updatedAt}, ${postDetails.type}, ${postDetails.videoUrl}`}
            </div>
        )
    } if (postDetails.type === 'image') {
        return new PostDetail(postDetails.id, postDetails.sid, postDetails.userId, postDetails.createdAt, postDetails.updatedAt, postDetails.type, postDetails.imageUrl)
    } else {
        return new PostDetail(postDetails.id, postDetails.sid, postDetails.userId, postDetails.createdAt, postDetails.updatedAt, postDetails.type, postDetails.text)
    }
}

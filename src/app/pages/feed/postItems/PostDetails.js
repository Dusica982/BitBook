import React from 'react';

export const PostDetails = (props) => {
    const { postDetails } = props;

    if (postDetails.type === 'video') {
        return (
            <ul className="post-details" id={`video${postDetails.id}`}>
                <li>Post ID: {postDetails.id}</li>
                <li>Post sid: {postDetails.sid}</li>
                <li> Post userID: {postDetails.userId}</li>
                <li>Created at: {postDetails.createdAt}</li>
                <li>Type of post: {postDetails.type}</li>
                <li>Video url: <a href={`${postDetails.videoUrl}`}>{postDetails.videoUrl}</a></li>
            </ul>
        )
    } else if (postDetails.type === 'image') {
        return (
            <ul className="post-details" id={`image${postDetails.id}`}>
                <li>Post ID: {postDetails.id}</li>
                <li>Post sid: {postDetails.sid}</li>
                <li> Post userID: {postDetails.userId}</li>
                <li>Created at: {postDetails.createdAt}</li>
                <li>Updated at: {postDetails.updatedAt}</li>
                <li>Type of post: {postDetails.type}</li>
                <li>Video url: <a href={`${postDetails.videoUrl}`}>{postDetails.videoUrl}</a></li>
            </ul>
        )
    } else {
        return (
            <div className="" id={`text${postDetails.id}`}>
                <ul className="post-details">
                    <li>Post ID: {postDetails.id}</li>
                    <li>Post sid: {postDetails.sid}</li>
                    <li> Post userID: {postDetails.userId}</li>
                    <li>Created at: {postDetails.createdAt}</li>
                    <li>Type of post: {postDetails.type}</li>
                </ul>
            </div>
        )
    }
}
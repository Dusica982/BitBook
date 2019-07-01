import { Post } from '../entities/Post'
import { Comments } from '../entities/Comments';

export const fetchPosts = () => {
    return fetch((`https://book-api.hypetech.xyz/v1/posts?_embed=comments`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const posts = data.map((post) => {
                const comments = post.comments.map((comment) => {
                    return new Comments(comment)
                })
                return new Post(post, comments)
            })
            return posts
        })
}

export const showPostDetail = (userId) => {
    return fetch((`https://book-api.hypetech.xyz/v1/posts/${userId}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
        },
    })
        .then((response) => response.json())
}
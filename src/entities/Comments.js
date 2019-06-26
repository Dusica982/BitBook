export class Comments {
    constructor(commentObj) {
        this.id = commentObj.id;
        this.postId = commentObj.postId;
        this.userId = commentObj.userId;
        this.body = commentObj.body;
    }
}
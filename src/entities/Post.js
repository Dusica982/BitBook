export class Post {
    constructor(postObj) {
        this.id = postObj.id;
        this.createdAt = postObj.createdAt;
        this.isPublic = postObj.isPublic;
        this.sid = postObj.sid;
        this.type = postObj.type;
        this.userId = postObj.userId;
        this.videoUrl = postObj.videoUrl;
        this.imageUrl = postObj.imageUrl;
        this.text = postObj.text;
        this.comments = postObj.comments;
    }
}


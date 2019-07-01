export class PostDetail {
    constructor(id, sid, userId, createdAt, updatedAt, type, imageUrl, videoUrl, text) {
        this.id = id;
        this.sid = sid;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.type = type;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
        this.text = text;
    }
}
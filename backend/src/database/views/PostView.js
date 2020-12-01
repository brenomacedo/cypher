const { RenderComments } = require("./CommentView")
const { RenderUserPublic } = require("./UserView")

exports.RenderCreatedPost = post => {
    const { id, type, description, url, userId, createdAt } = post
    return { id, type, description, url: type !== "TEXT" ? url : undefined, userId, createdAt }
}

exports.RenderPost = post => {
    const { id, type, description, url, userId, createdAt } = post
    return { id, type, description, url: type !== "TEXT" ? url : undefined, userId, createdAt,
    user: RenderUserPublic(post.user) }
}

exports.RenderPosts = posts => {
    return posts.map(post => {
        const { id, type, description, url, userId, createdAt } = post
        return { id, type, description, url: type !== "TEXT" ? url : undefined, userId, createdAt,
        user: RenderUserPublic(post.user),
        comments: RenderComments(post.comment) }
    })
}
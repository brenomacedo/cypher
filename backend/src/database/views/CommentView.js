const { RenderResponses } = require("./ResponseView")
const { RenderUserPublic } = require("./UserView")

exports.RenderCreatedComment = comment => {
    const { id, content, postId, userId, createdAt } = comment
    return { id, content, postId, userId, createdAt }
}

exports.RenderComments = comments => {
    return comments.map(comment => {
        const { id, content, postId, userId, createdAt } = comment
        return { id, content, postId, userId, createdAt,
        responses: RenderResponses(comment.response),
        user: RenderUserPublic(comment.user) }
    })
}
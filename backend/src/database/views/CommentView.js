const { RenderResponses } = require("./ResponseView")

exports.RenderCreatedComment = comment => {
    const { id, content, postId, createdAt } = comment
    return { id, content, postId, createdAt }
}

exports.RenderComments = comments => {
    return comments.map(comment => {
        const { id, content, postId, createdAt } = comment
        return { id, content, postId, createdAt,
        responses: RenderResponses(comment.response) }
    })
}
const { RenderUserPublic } = require("./UserView")

exports.RenderCreatedResponse = response => {
    const { id, content, commentId, userId, createdAt } = response
    return { id, content, commentId, userId, createdAt }
}

exports.RenderResponses = responses => {
    return responses.map(response => {
        const { id, content, commentId, userId, createdAt, user } = response
        return { id, content, commentId, userId, createdAt,
        user: RenderUserPublic(user) }
    })
}
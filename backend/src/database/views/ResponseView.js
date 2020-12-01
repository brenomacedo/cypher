exports.RenderCreatedResponse = response => {
    const { id, content, postId, createdAt } = response
    return { id, content, postId, createdAt }
}

exports.RenderResponses = responses => {
    return responses.map(response => {
        const { id, content, postId, createdAt } = response
        return { id, content, postId, createdAt }
    })
}
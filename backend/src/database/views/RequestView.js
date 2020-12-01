exports.RenderRequest = request => {
    const { id, from, to, status, createdAt, updatedAt } = request
    return {
        id, from, to, status, createdAt, updatedAt
    }
}

exports.RenderRequests = requests => {
    return requests.map(request => {
        const { id, from, to, status, createdAt, updatedAt } = request
        return {
            id, from, to, status, createdAt, updatedAt
        }
    })
}
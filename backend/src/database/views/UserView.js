exports.RenderUser = user => {
    return {
        id: user.id,
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        description: user.description,
        avatar: user.avatar,
        banner: user.banner,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}

exports.RenderUsers = users => {
    return users.map(user => {
        return {
            id: user.id,
            uuid: user.uuid,
            name: user.name,
            email: user.email,
            description: user.description,
            avatar: user.avatar,
            banner: user.banner,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    })
}
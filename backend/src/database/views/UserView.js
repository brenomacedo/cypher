const { RenderFriends } = require("./FriendView")
const { RenderRequests } = require("./RequestView")

exports.RenderUser = user => {
    const { id, uuid, name, email, description, avatar, banner, createdAt, updatedAt } = user
    return { id, uuid, name, email, description, avatar, banner, createdAt, updatedAt,
    requests: RenderRequests(user.request),
    friends: RenderFriends(user.friends) }
}

exports.RenderUsers = users => {
    return users.map(user => {
        const { id, uuid, name, description, avatar, banner } = user
        return { id, uuid, name, description, avatar, banner,
        requests: RenderRequests(user.request),
        friends: RenderFriends(user.friends) }
    })
}

exports.RenderUserPublic = user => {
    const { id, uuid, name, description, avatar, banner } = user
    return { id, uuid, name, description, avatar, banner }
}

exports.RenderUsersPublic = users => {
    return users.map(user => {
        const { id, uuid, name, description, avatar, banner } = user
        return { id, uuid, name, description, avatar, banner }
    })
}

exports.RenderCreatedUser = user => {
    const { id, uuid, name, description, avatar, banner, email, createdAt, updatedAt } = user
    return { id, uuid, name, description, avatar, banner, email, createdAt, updatedAt,
        requests: [],
        friends: [] }
}
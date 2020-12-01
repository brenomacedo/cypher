exports.RenderFriends = friends => {
    return friends.map(friend => {
        const { id, uuid, name, description, banner, avatar } = friend
        return { id, uuid, name, description, banner, avatar }
    })
}
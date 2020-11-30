const state = {
    isAuth: undefined,
    token: undefined,
    id: undefined,
    uuid: undefined,
    name: undefined,
    description: undefined,
    avatar: undefined,
    banner: undefined,
    createdAt: undefined,
    updatedAt: undefined
}

const getters = {
    isAuth: state => state.isAuth,
    user: state => {
        const { id, uuid, name, description, avatar, banner, createdAt, updatedAt, token } = state
        return { id, uuid, name, description, avatar, banner, createdAt, updatedAt, token }
    }
}

const actions = {
    setIsAuth: ({ commit }, isAuth) => commit('setIsAuth', isAuth),
    setUser: ({ commit }, user) => commit('setUser', user)
}

const mutations = {
    setIsAuth: (state, isAuth) => {
        state.isAuth = isAuth
    },
    setUser: (state, user) => {
        state.id = user.id
        state.name = user.name
        state.description = user.description
        state.avatar = user.avatar
        state.banner = user.banner
        state.createdAt = user.createdAt
        state.updatedAt = user.updatedAt
        state.token = user.token
    }
}

export default { state, actions, getters, mutations }
import api from '../../api'

const state = {
    posts: []
}

const getters = {
    getPosts: state => state.posts
}

const actions = {
    initializePosts: async ({ commit }) => {
        const { data } = await api.get('/post')
        commit('addPosts', data)
    },
    addPost: ({ commit }, post) => {
        commit('addPost', post)
    }
}

const mutations = {
    addPost: (state, post) => {
        state.posts = [post, ...state.posts]
    },
    addPosts: (state, posts) => {
        state.posts = [...posts, ...state.posts]
    }
}

export default { state, getters, actions, mutations }
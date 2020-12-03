<template>
    <div class="container">
        <sidebar :windowW="windowW" />
        <div class="content">
            <div @click="test" class="add-friend">
                <font-awesome icon="user-friends" class="add-friend-icon" />Add friends
            </div>
            <div class="top-communities">
                <p>Top communities!</p>
                <div class="top-communities-list">
                    <topcommunity />
                    <topcommunity />
                    <topcommunity />
                    <topcommunity />
                    <topcommunity />
                    <topcommunity />
                </div>
            </div>
            <div v-for="post in posts" :key="post.id" class="posts">
                <textpost v-if="post.type === 'TEXT'" :post="post" />
                <imagepost v-else-if="post.type === 'IMAGE'" :post="post" />
                <videopost v-else-if="post.type === 'VIDEO'" :post="post" />
            </div>
        </div>
        <leftsidebar :windowW="windowW" />
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'
import leftsidebar from '../components/LeftSideBar'
import topcommunity from '../components/TopCommunity'
import textpost from '../components/TextPost'
import imagepost from '../components/ImagePost'
import videopost from '../components/VideoPost'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "profile",
    components: {
        sidebar, leftsidebar, topcommunity, textpost, imagepost, videopost
    },
    data() {
        return {
            windowW: window.innerWidth
        }
    },
    created() {
        window.addEventListener('resize', () => {
            this.windowW = window.innerWidth
        })

        this.initializePosts()
    },
    computed: {
        ...mapGetters(['user', 'posts'])
    },
    methods: {
        test: function() {
        },
        ...mapActions(['initializePosts'])
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
}

.content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 600px);
}

.add-friend {
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    cursor: pointer;
    padding: 10px;
    border: 1px solid var(--selected);
    border-radius: 12px;
    width: 135px;
    font-family: var(--roboto);
    background-color: white;
    transition: background-color 0.2s;
    border-bottom: 4px solid var(--selected);
    color: var(--bg-color);
}

.add-friend:hover {
    background-color: var(--selected);
}

.add-friend-icon {
    color: var(--bg-color);
}

.top-communities {
    padding-left: 10px;
}

.top-communities-list {
    display: flex;
    width: auto;
    padding: 10px;
    overflow-x: auto;
}

.top-communities p {
    color: var(--bg-color);
    font-family: var(--roboto);
    font-size: 18px;
    margin-bottom: 20px;
}

.posts {
    margin-top: 30px;
}

@media (max-width: 1200px) {
    .content {
        width: 100%;
    }
};
</style>
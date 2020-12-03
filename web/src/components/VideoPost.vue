<template>
    <div class="video-post-container">
        <div class="video-post-author">
            <img :src="post.user.avatar" class="video-post-author-pic" />
            <div class="video-post-author-name">
                {{ post.user.name }}
            </div>
            <div class="video-post-created-at">
                {{ date }}
            </div>
        </div>
        <div class="video-post-description">
            {{ post.description }}
        </div>
        <div class="video-post-video">
            <video v-on:timeupdate="progress" ref="video" class="video-post-player"
            :src="post.url" loop></video>
        </div>
        <div class="progress-bar-container">
            <div class="controller">
                <font-awesome v-if="paused" icon="play" @click="play" />
                <font-awesome v-if="!paused" icon="pause" @click="pause" />
            </div>
            <div class="progress-bar">
                <div class="progress" :style="{ width: `${videoProgress*100}%` }"></div>
            </div>
        </div>
        <div class="options">
            <font-awesome icon="thumbs-up" class="video-post-like" />
            <span>Like</span>
        </div>
        <comments />
    </div>
</template>

<script>
import comments from '../components/Comments'
import renderDate from '../utils/renderDate'

export default {
    name: "videopost",
    components: {
        comments
    },
    data() {
        return {
            videoProgress: 0,
            paused: true
        }
    },
    props: {
        post: Object
    },
    methods: {
        play: function() {
            this.paused = false
            this.$refs.video.play()
        },
        pause: function() {
            this.paused = true
            this.$refs.video.pause()
        },
        progress: function () {
            this.videoProgress = this.$refs.video.currentTime / this.$refs.video.duration
        }
    },
    computed: {
        date: function () {
            return renderDate(this.post.createdAt)
        }
    }
}
</script>

<style scoped>
.video-post-container {
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    margin-top: 20px;
}

.video-post-author {
    display: flex;
    align-items: center;
}

.video-post-author-pic {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-color: var(--underwater);
}

.video-post-author-name {
    color: var(--underwater);
    font-family: var(--roboto);
    margin-left: 10px;
}

.video-post-created-at {
    flex: 1;
    text-align: end;
    font-family: var(--roboto);
    color: var(--underwater);
    font-size: 12px;
}

.video-post-description {
    margin-top: 15px;
    color: var(--underwater);
    font-family: var(--roboto);
}

.video-post-like {
    color: var(--seablue);
    margin-right: 10px;
    transition: 0.3s;
}

.options {
    padding: 10px;
    border: 1px solid var(--seablue);
    font-family: var(--roboto);
    color: var(--seablue);
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
}

.options:hover {
    background-color: var(--seablue);
    color: white;
}

.options:hover > .video-post-like {
    color: white;
}

.video-post-video {
    height: 500px;
    margin: 20px 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--shadow-disabled);
}

.play {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: var(--underwater);
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-post-player {
    width: 100%;
    height: 100%;
}

.progress-bar-container {
    display: flex;
    align-items: center;
}

.progress-bar {
    background-color: var(--shadow-disabled);
    flex: 1;
    margin-left: 10px;
    height: 7px;
    border-radius: 5px;
}

.controller {
    cursor: pointer;
}

.progress {
    height: 100%;
    border-radius: 5px;
    background-color: blue;
}
</style>
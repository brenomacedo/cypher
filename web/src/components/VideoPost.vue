<template>
    <div class="video-post-container">
        <div class="video-post-author">
            <div class="video-post-author-pic">

            </div>
            <div class="video-post-author-name">
                Breno Macêdo de Brito
            </div>
            <div class="video-post-created-at">
                ola
            </div>
        </div>
        <div class="video-post-description">
            Lorem ipsum dolor sit amet
        </div>
        <div class="video-post-video">
            <div class="play">
                <font-awesome icon="play" color="white" />
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

export default {
    name: "videopost",
    components: {
        comments
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
    background-image: url('../assets/images/rain.png');
    margin: 20px 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>
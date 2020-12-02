<template>
    <div class="text-post-container">
        <div class="text-post-author">
            <img :src="post.user.avatar" class="text-post-author-pic" />
            <div class="text-post-author-name">
                {{ post.user.name }}
            </div>
            <div class="text-post-created-at">
                {{ date }}
            </div>
        </div>
        <div class="text-post-description">
            {{ post.description }}
        </div>
        <div class="options">
            <font-awesome icon="thumbs-up" class="text-post-like"/>
            <span>Like</span>
        </div>
        <comments :commentsArray="post.comments" />
    </div>
</template>

<script>
import comments from '../components/Comments'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/pt-br'

export default {
    name: "textpost",
    components: {
        comments
    },
    props: {
        post: Object
    },
    computed: {
        date: function () {
            dayjs.extend(timezone)
            dayjs.extend(utc)

            const createdDate = dayjs(this.post.createdAt).tz("America/Sao_Paulo").format('DD/MM/YYYY H:M:ss')

            return createdDate
        }
    }
}
</script>

<style scoped>
.text-post-container {
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    margin-top: 20px;
}

.text-post-author {
    display: flex;
    align-items: center;
}

.text-post-author-pic {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-color: var(--underwater);
}

.text-post-author-name {
    color: var(--underwater);
    font-family: var(--roboto);
    margin-left: 10px;
}

.text-post-created-at {
    flex: 1;
    text-align: end;
    font-family: var(--roboto);
    color: var(--underwater);
    font-size: 12px;
}

.text-post-description {
    margin-top: 15px;
    color: var(--underwater);
    font-family: var(--roboto);
}

.text-post-like {
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

.options:hover > .text-post-like {
    color: white;
}
</style>
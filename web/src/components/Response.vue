<template>
    <div class="response">
        <div class="author">
            <img :src="response.user.avatar" class="author-pic" />
            <div class="author-name">{{ response.user.name }}</div>
            <div class="text-post-created-at">{{ date }}</div>
        </div>
        <div class="description">
            {{ response.content }}
        </div>
    </div>
</template>

<script>
import renderDate from '../utils/renderDate'


export default {
    name: "response",
    props: {
        response: Object
    },
    computed: {
        date: function () {
            return renderDate(this.response.createdAt)
        }
    }
}
</script>

<style scoped>
.response {
    width: 100%;
    height: 100px;
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
}

.author {
    display: flex;
    align-items: center;
}

.author-pic {
    width: 25px;
    height: 25px;
    border-radius: 7px;
    background-color: var(--underwater);
}

.author-name {
    font-family: var(--roboto);
    margin-left: 10px;
    color: var(--underwater);
}

.description {
    font-family: var(--roboto);
    margin-top: 10px;
}

.text-post-created-at {
    flex: 1;
    text-align: end;
    font-family: var(--roboto);
    color: var(--underwater);
    font-size: 12px;
}
</style>
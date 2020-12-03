<template>
    <div class="comment">
        <div class="author">
            <img :src="comment.user.avatar" class="author-pic" />
            <div class="author-name">{{ comment.user.name }}</div>
            <div class="text-post-created-at">
                {{ date }}
            </div>
        </div>
        <div class="description">
            {{ comment.content }}
        </div>
        <div v-for="response in comment.responses" :key="response.id" class="responses">
            <response :response="response" />
        </div>
        <div class="make-response">
            <input placeholder="answer this comment" type="text">
            <div class="res-button">
                <font-awesome icon="search" color="white" class="search-icon" />
            </div>
        </div>
    </div>
</template>

<script>
import response from '../components/Response'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/pt-br'

export default {
    name: "comment",
    components: {
        response
    },
    props: {
        comment: Object
    },
    computed: {
        date: function() {
            dayjs.extend(timezone)
            dayjs.extend(utc)

            const createdDate = dayjs(this.comment.createdAt).tz("America/Sao_Paulo").format('DD/MM/YYYY H:M:ss')

            return createdDate
        }
    }
}
</script>

<style scoped>
.comment {
    width: 100%;
    background-color: var(--selected);
    border-radius: 16px;
    padding: 20px;
}

.author {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.author-pic {
    width: 35px;
    height: 35px;
    background-color: var(--underwater);
    border-radius: 8px;
}

.author-name {
    margin-left: 10px;
    color: var(--underwater);
    font-family: var(--roboto);
}

.description {
    margin-top: 10px;
    font-family: var(--roboto);
}

.responses {
    margin-top: 10px;
}

.make-response {
    display: flex;
}

.make-response input {
    flex: 1;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: var(--roboto);
    padding-left: 4px;
}

.res-button {
    min-width: 25px;
    height: 25px;
    border-radius: 15px;
    background-color: var(--underwater);
    cursor: pointer;
    border-bottom: 4px solid var(--green);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
}

.search-icon {
    font-size: 10px;
}

.text-post-created-at {
    flex: 1;
    text-align: end;
    font-family: var(--roboto);
    color: var(--underwater);
    font-size: 12px;
}
</style>
<template>
    <div class="comments">
        <p>Comments</p>
        <div class="comments-list">
            <comment />
        </div>
        <div class="res-comment">
            <input placeholder="comment this post" type="text">
            <div class="comment-button">
                <font-awesome icon="search" class="search-icon" color="white" />
            </div>
        </div>
    </div>
</template>

<script>
import comment from '../components/Comment'

export default {
    name: "comments",
    components: {
        comment
    }
}
</script>

<style scoped>
.comments {
    margin-top: 20px;
}

.comments p {
    font-family: var(--roboto);
}

.comments-list {
    margin: 10px 0;
}

.res-comment {
    display: flex;
}

.res-comment input {
    flex: 1;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: var(--roboto);
    padding-left: 4px;
}

.comment-button {
    width: 25px;
    height: 25px;
    border-bottom: 4px solid var(--green);
    border-radius: 15px;
    background-color: var(--underwater);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
}

.search-icon {
    font-size: 10px;
}
</style>
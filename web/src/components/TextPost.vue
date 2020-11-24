<template>
    <div class="text-post-container">
        <div class="text-post-author">
            <div class="text-post-author-pic">

            </div>
            <div class="text-post-author-name">
                Breno Macêdo de Brito
            </div>
            <div class="text-post-created-at">
                ola
            </div>
        </div>
        <div class="text-post-description">
            Lorem ipsum dolor sit amet
        </div>
        <div class="options">
            <font-awesome icon="thumbs-up" class="text-post-like"/>
            <span>Like</span>
        </div>
        <comments />
    </div>
</template>

<script>
import comments from '../components/Comments'

export default {
    name: "textpost",
    components: {
        comments
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
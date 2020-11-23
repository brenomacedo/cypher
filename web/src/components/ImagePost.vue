<template>
    <div class="image-post-container">
        <div class="image-post-author">
            <div class="image-post-author-pic">

            </div>
            <div class="image-post-author-name">
                Breno Macêdo de Brito
            </div>
            <div class="image-post-created-at">
                ola
            </div>
        </div>
        <div class="image-post-description">
            Lorem ipsum dolor sit amet
        </div>
        <div class="image-post-image"></div>
        <div class="options">
            <font-awesome icon="thumbs-up" class="image-post-like"/>
            <span>Like</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "imagepost"
}
</script>

<style scoped>
.image-post-container {
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    margin-top: 20px;
}

.image-post-author {
    display: flex;
    align-items: center;
}

.image-post-author-pic {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-color: var(--underwater);
}

.image-post-author-name {
    color: var(--underwater);
    font-family: var(--roboto);
    margin-left: 10px;
}

.image-post-created-at {
    flex: 1;
    text-align: end;
    font-family: var(--roboto);
    color: var(--underwater);
    font-size: 12px;
}

.image-post-description {
    margin-top: 15px;
    color: var(--underwater);
    font-family: var(--roboto);
}

.image-post-like {
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

.options:hover > .image-post-like {
    color: white;
}

.image-post-image {
    height: 500px;
    background-image: url('../assets/images/rain.png');
    margin: 20px 0;
    border-radius: 20px;
}
</style>
<template>
    <div class="response">
        <div class="author">
            <div class="author-pic"></div>
            <div class="author-name">Breno Macedo</div>
        </div>
        <div class="description">
            Eae
        </div>
    </div>
</template>

<script>
export default {
    name: "response"
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
</style>
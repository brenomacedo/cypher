<template>
    <div class="friend">
        <div class="friend-pic"></div>
        <div class="friend-name">Breno Macêdo</div>
    </div>
</template>

<script>
export default {
    name: "friend"
}
</script>

<style>
.friend {
    height: 60px;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
}

.friend:hover {
    background-color: var(--selected);
}

.friend-pic {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-color: var(--underwater);
}

.friend-name {
    font-family: var(--roboto);
    font-size: 15px;
    padding-left: 10px;
}
</style>
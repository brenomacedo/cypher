<template>
    <div class="friend-searched">
        <div class="friend-searched-info">
            <div class="friend-searched-pic"></div>
            <div class="friend-searched-name">Breno Macêdo</div>
        </div>
        <div class="options">
            <div class="send-req">Request Friend</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "friendsearch"
}
</script>

<style>
.friend-searched {
    height: 60px;
    background-color: white;
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding-left: 12.5px;
    justify-content: space-between;
    margin-bottom: 10px;
}

.friend-searched-info {
    display: flex;
    align-items: center;
}

.friend-searched-pic {
    width: 35px;
    height: 35px;
    border-radius: 8px;
    background-color: var(--underwater);
}

.friend-searched-name {
    margin-left: 10px;
    font-family: var(--roboto);
}

.options {
    margin-right: 12.5px;
    display: flex;
}

.send-req {
    width: 200px;
    height: 35px;
    color: white;
    background-color: var(--seablue);
    border-bottom: 5px solid var(--dark-seablue);
    border-radius: 8px;
    font-family: var(--roboto);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}

.send-req:hover {
    border-bottom: 0;
}

@media (max-width: 615px) {
    .send-req {
        width: 100px;
        font-size: 12px;
    }

    .friend-searched-name {
        font-size: 12px;
    }
}
</style>
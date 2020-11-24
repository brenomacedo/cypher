<template>
    <div class="friend-searched">
        <div class="friend-searched-info">
            <div class="friend-searched-pic"></div>
            <div class="friend-searched-name">Breno Macêdo</div>
        </div>
        <div class="options">
            <div class="accept">Accept</div>
            <div class="deny">Deny</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "friendrequest"
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

.accept {
    width: 100px;
    height: 35px;
    color: white;
    background-color: var(--green);
    border-bottom: 5px solid var(--dark-green);
    border-radius: 8px;
    font-family: var(--roboto);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    transition: 0.3s;
}

.accept:hover {
    border-bottom: 0;
}

.deny {
    width: 100px;
    height: 35px;
    color: white;
    background-color: var(--red);
    border-bottom: 5px solid var(--dark-red);
    border-radius: 8px;
    font-family: var(--roboto);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
}

.deny:hover {
    border-bottom: 0;
}

@media (max-width: 615px) {
    .accept {
        width: 50px;
        font-size: 12px;
    }

    .deny {
        width: 50px;
        font-size: 12px;
    }

    .friend-searched-name {
        font-size: 12px;
    }
}
</style>
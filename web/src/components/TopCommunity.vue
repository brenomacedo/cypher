<template>
    <div class="top-community">
        <div class="top-community-pic"></div>
        <div class="top-community-name">
            <h2>Hello world!</h2>
            <span>Enter here!</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-community {
    min-width: 140px;
    height: 170px;
    border-radius: 16px;
    border-bottom: 6px solid #ccc;
    display: flex;
    flex-direction: column;
    background-color: var(--lightblue);
    cursor: pointer;
    transition: transform 0.2s;
    margin-right: 15px;
}

.top-community:hover {
    transform: scale(1.05);
}

.top-community-pic {
    height: 85px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background-color: lightblue;
}

.top-community-name {
    color: white;
    font-family: var(--roboto);
    height: 85px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.top-community-name h2 {
    color: white;
    font-family: var(--roboto);
    font-size: 18px;
}

.top-community-name span {
    color: white;
    font-family: var(--roboto);
    font-size: 12px;

}
</style>
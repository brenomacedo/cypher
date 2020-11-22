<template>
    <div class="communitie">
        <div class="communitie-pic">

        </div>
        <div class="communitie-name">
            VueJS
        </div>
        <div class="communitie-description">
            VueJS community unofficial community :P
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.communitie {
    width: 250px;
    height: 150px;
    background-color: white;
    border-radius: 30px;
    border-bottom: 6px solid #ccc;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    right: 0;
    transition: 0.3s;
}

.communitie-pic {
    width: 35px;
    height: 35px;
    background-color: var(--underwater);
    border-radius: 10px;
}

.communitie-name {
    color: var(--underwater);
    font-size: 20px;
    font-family: var(--roboto);
}

.communitie-description {
    color: var(--green);
    font-size: 12px;
    font-family: var(--roboto);
}
</style>
<template>
    <div class="container">
        <p>Your communities</p>
        <div class="communities">
            <communitie />
        </div>
        <div class="search-communities">
            <input placeholder="Search an communitie" type="text">
            <button>
                <font-awesome icon="search" color="white" class="search"/>
            </button>
        </div>
    </div>
</template>

<script>
import communitie from './Communitie'

export default {
    name: "leftsidebar",
    components: {
        communitie
    }
}
</script>

<style scoped>
.container {
    height: 100vh;
    width: 300px;
    border-top-left-radius: 30px;
    background: var(--light-yellow);
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container p {
    color: var(--underwater);
    font-size: 20px;
    font-family: var(--roboto);
    padding-left: 25px;
}

.communities {
    padding: 20px 0;
    flex: 1;
    overflow: auto;
}
.search-communities {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.search-communities input {
    width: var(100% - 50px);
    border-radius: 30px;
    height: 35px;
    border: 1px solid #ccc;
    font-family: var(--roboto);
    font-size: 18px;
    outline: none;
    padding-left: 15px;
}

.search-communities button {
    width: 35px;
    height: 35px;
    border-radius: 18px;
    border: 1px solid #ccc;
    background-color: var(--underwater);
    cursor: pointer;
    transition: 0.5s;
}

.search-communities button:hover {
    background-color: var(--green);
}
</style>
<template>
    <div class="container">
        <sidebar :windowW="windowW" />
        <div class="search-friends">
            <div class="search-bar">
                <input placeholder="Search friends" type="text">
                <div class="search-button">
                    <font-awesome icon="search" color="white" />
                </div>
            </div>
            <div class="friends-list">
                <friendsearched />
                <friendsearched />
                <friendsearched />
                <friendsearched />
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'
import friendsearched from '../components/FriendSearched'

export default {
    name: "searchfriends",
    components: {
        sidebar, friendsearched
    },
    data() {
        return {
            windowW: window.innerWidth
        }
    },
    created() {
        window.addEventListener('resize', () => {
            this.windowW = window.innerWidth
        })
    }
}
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: flex-end;
}

.search-friends {
    width: calc(100% - 300px);
    padding: 20px;
}

.search-bar {
    width: 100%;
    display: flex;
}

.search-bar input {
    flex: 1;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    padding-left: 8px;
    font-family: var(--roboto);
    font-size: 18px;
}

.search-bar .search-button {
    width: 35px;
    height: 35px;
    background-color: var(--seablue);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border-bottom: 5px solid var(--dark-seablue);
    margin-left: 15px;
    cursor: pointer;
}

.friends-list {
    margin-top: 30px;
}

@media (max-width: 1200px) {
    .container {
        justify-content: center;
    }

    .search-friends {
        width: 100%;
    }

    .search-bar {
        width: 100%;
    }
}
</style>
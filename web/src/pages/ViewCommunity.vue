<template>
    <div class="viewcommunity-container">
        <sidebar :windowW="windowW" />
        <div class="viewcommunity-banner"></div>
        <div class="viewcommunity">
            <div class="viewcommunity-info">
                <div class="viewcommunity-pic"></div>
                <div class="options">
                    <div class="viewcommunity-name">Breno Macêdo de Brito</div>
                    <div class="follow">
                        <font-awesome icon="plus" class="follow-icon" />
                        Follow
                    </div>
                </div>
            </div>
            <textpost />
        </div>
        <leftsidebar :windowW="windowW" />
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'
import leftsidebar from '../components/LeftSideBar'
import textpost from '../components/TextPost'

export default {
    name: "viewcommunity",
    components: {
        sidebar, leftsidebar, textpost
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

<style scoped>
.viewcommunity-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.viewcommunity-banner {
    width: 100%;
    height: 200px;
    background-image: url('../assets/images/form-side-bg.png');
}

.viewcommunity {
    display: flex;
    width: calc(100% - 700px);
    flex-direction: column;
}

.viewcommunity-pic {
    max-width: 80px;
    max-height: 80px;
    min-width: 80px;
    min-height: 80px;
    border-radius: 50px;
    background-color: red;
}

.viewcommunity-name {
    color: white;
    -webkit-text-stroke: 1px black;
    font-family: var(--roboto);
    font-size: 25px;
    margin-left: 10px;
    position: relative;
    bottom: 15px;
    right: 5px;
    z-index: 0;
}

.viewcommunity-info {
    display: flex;
    position: relative;
    bottom: 40px;
    z-index: 0;
}

.options {
    margin: 10px;
    margin-top: 20px;
}

.follow {
    color: var(--bg-color);
    background-color: white;
    width: 100px;
    border: 1px solid var(--bg-color);
    border-radius: 8px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--roboto);
    cursor: pointer;
    transition: 0.3s;
}

.follow:hover {
    background-color: var(--bg-color);
    color: white;
}

.follow-icon {
    margin-right: 5px;
}

@media (max-width: 1200px) {
    .viewcommunity {
        padding: 0 20px;
        width: 100%;
    }
}
</style>
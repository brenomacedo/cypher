<template>
    <div class="container">
        <sidebar :windowW="windowW" />
        <div class="content">
        </div>
        <leftsidebar :windowW="windowW" />
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'
import leftsidebar from '../components/LeftSideBar'

export default {
    name: "profile",
    components: {
        sidebar, leftsidebar
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
.container {
    min-height: 100vh;
    display: flex;
}

.content {
    flex: 1;
}
</style>
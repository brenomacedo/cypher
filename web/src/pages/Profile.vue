<template>
    <div class="container">
        <sidebar />
        <div class="content">

        </div>
        <leftsidebar />
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'
import leftsidebar from '../components/LeftSideBar'

export default {
    name: "profile",
    components: {
        sidebar, leftsidebar
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
<template>
    <div class="container">
        <sidebar />
        <div class="content">

        </div>
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'

export default {
    name: "profile",
    components: {
        sidebar
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
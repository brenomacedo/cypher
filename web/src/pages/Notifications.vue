<template>
    <div class="container">
        <sidebar :windowW="windowW" />
        <div class="notifications">
            <h1>Notifications</h1>
            <div class="notifications-list">
                <friendrequest />
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'
import friendrequest from '../components/FriendRequest'

export default {
    name: "notifications",
    components: {
        sidebar, friendrequest
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
    justify-content: flex-end;
}

.notifications {
    width: calc(100% - 300px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--roboto);
}

.notifications-list {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
}

@media (max-width: 1200px) {
    .container {
        justify-content: center;
    }

    .notifications {
        width: 100%;
    }
}
</style>
<template>
    <div>
        <div :class="{'side-bar': true, hided: !show}">
            <div class="navigation">
                <div v-if="showClose" @click="toggleActive" class="close">
                    <font-awesome icon="times" color="black" />
                </div>
                <div class="home icon active">
                    <font-awesome icon="home" color="white" />
                </div>
                <div class="friends icon">
                    <font-awesome icon="user-friends" color="white" />
                </div>
                <div class="notifications icon">
                    <div class="notifications-ball"></div>
                    <font-awesome icon="bell" color="white" />
                </div>
            </div>
            <div class="friend-list">
                <p>Friend list</p>
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
                <friend />
            </div>
            <div class="profile">
                <div class="profile-card">
                    <div class="profile-info">
                        <img :src="user.avatar" class="profile-pic" />
                        <div class="profile-name">{{ user.name }}</div>
                    </div>
                    <div class="config icon">
                        <font-awesome icon="cog" color="white" class="config-icon" />
                    </div>
                </div>
            </div>
        </div>
        <div @click="toggleActive" v-if="!show" class="active-bar">
            <font-awesome icon="users" color="black" />
        </div>
    </div>
</template>

<script>
import friend from './Friend'
import { mapGetters } from 'vuex'

export default {
    name: "sidebar",
    components: {
        friend
    },
    props: {
        windowW: Number
    },
    computed: {
        show: function() {
            return (this.windowW >= 1200) || this.active
        },
        showClose: function() {
            return this.windowW <= 1200
        },
        ...mapGetters(['user'])
    },
    methods: {
        toggleActive: function() {
            this.active = !this.active
        }
    },
    data() {
        return {
            active: false
        }
    }
}
</script>

<style scoped>
.side-bar {
    height: 100vh;
    width: 300px;
    background-color: white;
    border-top-right-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #ccc;
    left: 0;
    position: fixed;
    transition: left 0.3s;
    z-index: 1;
}

.navigation {
    width: 100%;
    height: 130px;
    background-image: url('../assets/images/rain.png');
    border-top-right-radius: 30px;
    background-size: cover;
    background-position: center;
    padding: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.icon {
    margin-left: 20px;
    position: relative;
    cursor: pointer;
}

.active {
    padding-bottom: 3px;
    border-bottom: 3px solid var(--red);
}

.notifications-ball {
    position: absolute;
    top: -2px;
    right: -3px;
    width: 7px;
    height: 7px;
    background-color: var(--red);
    border-radius: 3px;
}

.profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 150px;
    border-top: 1px solid #ccc;
}

.profile-card {
    width: 100%;
    height: 70%;
    background-color: var(--light-red);
    border-radius: 20px;
    border-bottom: 6px solid var(--red);
    position: relative;
    left: 15px;
    -webkit-box-shadow: 3px 10px 23px -11px #000000; 
    box-shadow: 3px 10px 23px -11px #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.profile-info .profile-pic {
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 10px;
}

.profile-info .profile-name {
    color: white;
    font-family: var(--roboto);
    margin-top: 10px;
}

.friend-list {
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.friend-list p {
    text-align: center;
    font-family: var(--roboto);
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}

.hided {
    position: absolute;
    left: -330px;
}

.active-bar {
    width: 35px;
    height: 35px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border-bottom: 3px solid var(--lightblue);
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    left: 20px;
}

.close {
    width: 35px;
    height: 35px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border-bottom: 3px solid var(--lightblue);
    cursor: pointer;
    margin-bottom: 10px;
}
</style>
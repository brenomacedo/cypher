<template>
    <div>
        <div :class="{container: true, hided: !show}">
            <div v-if="showClose" @click="toggleActive" class="close">
                <font-awesome icon="times" color="black" />
            </div>
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
        <div @click="toggleActive" v-if="!show" class="active-bar">
            <font-awesome icon="users" color="black" />
        </div>
    </div>
</template>

<script>
import communitie from './Communitie'

export default {
    name: "leftsidebar",
    components: {
        communitie
    },
    props: {
        windowW: Number
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        show: function () {
            return (this.windowW >= 1200) || this.active
        },
        showClose: function () {
            return this.windowW <= 1200
        }
    },
    methods: {
        toggleActive: function () {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
.container {
    height: 100vh;
    min-height: 540px;
    width: 300px;
    border-top-left-radius: 30px;
    background: var(--light-yellow);
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: right 0.3s;
    right: 0;
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

.hided {
    position: absolute;
    right: -300px;
}

.active-bar {
    width: 35px;
    height: 35px;
    background-color: var(--light-yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border-bottom: 3px solid var(--light-red);
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 20px;
}

.close {
    width: 35px;
    height: 35px;
    background-color: var(--red);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border-bottom: 3px solid var(--light-red);
    cursor: pointer;
    margin-bottom: 10px;
}
</style>
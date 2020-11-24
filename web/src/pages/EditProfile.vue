<template>
    <div class="container">
        <sidebar :windowW="windowW" />
        <div class="edit-profile">
            <div class="profile-images">
                <div class="profile-banner"></div>
                <div class="profile-pic"></div>
            </div>
            <input placeholder="Your name" type="text">
            <input placeholder="Your description" type="text">
            <input placeholder="Your new password" type="password">
            <input placeholder="Your password" type="password">
            <button>
                <div class="real-button">SAVE CHANGES</div>
                <div class="shadow-button"></div>
            </button>
        </div>
    </div>
</template>

<script>
import sidebar from '../components/Sidebar'

export default {
    name: "editprofile",
    components: {
        sidebar
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

.edit-profile {
    width: calc(100% - 300px);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-images {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-banner {
    width: 100%;
    height: 150px;
    background-image: url('../assets/images/form-side-bg.png');
    border-radius: 16px;
    border: 1px solid #ccc;
}

.profile-pic {
    width: 150px;
    height: 150px;
    background-image: url('../assets/images/rain.png');
    background-size: cover;
    background-position: center;
    border-radius: 75px;
    border: 1px solid #ccc;
    position: relative;
    bottom: 75px;
}

.edit-profile input {
    width: 400px;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    margin-bottom: 8px;
    padding-left: 8px;
    font-family: var(--roboto);
}

.edit-profile button {
    border: 0;
    background-color: transparent;
    position: relative;
    top: 5px;
}

.edit-profile button:hover > .real-button {
    bottom: 0;
}

.edit-profile button .shadow-button {
    background-color: var(--underwater);
    width: 400px;
    height: 35px;
    border-radius: 8px;
}

.edit-profile button .real-button {
    background-color: var(--lightblue);
    width: 400px;
    height: 35px;
    border-radius: 8px;
    position: absolute;
    left: 0;
    bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: var(--roboto);
    cursor: pointer;
    transition: 0.3s;
}

@media (max-width: 1200px) {
    .container {
        justify-content: center;
    }

    .edit-profile {
        width: 100%;
    }
}

@media (max-width: 400px) {
    .profile-pic {
        width: 100px;
        height: 100px;
        bottom: 50px;
    }

    .edit-profile input {
        width: 260px;
    }

    .edit-profile button .real-button {
        background-color: var(--lightblue);
        width: 260px;
        height: 35px;
        border-radius: 8px;
    }

    .edit-profile button .shadow-button {
        background-color: var(--underwater);
        width: 260px;
        height: 35px;
        border-radius: 8px;
    }
}
</style>
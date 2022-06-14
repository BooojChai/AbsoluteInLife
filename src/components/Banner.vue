<template>
    <div class="banner">
        <transition name="title-trans">
            <div class="title" v-if="title.show">{{title.text}}</div>
        </transition>
        <transition name="my-word-trans">
            <div class="my-word" v-if="myWord.show">{{myWord.text}}</div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: {
                text: "Hi There,",
                show: false
            },
            myWord: {
                text: "To find the absolute in your life.",
                show: false
            }
        }
    },
    methods: {
        startUp() {
            this.title.show = true
            setTimeout(() => {
                this.myWord.show = true
            }, 1000);
        }
    },
    mounted() {
        this.startUp()
    }
}
</script>

<style>
    .banner {
        position: relative;
        width: 100%;
        height: 260px;
        background-image: linear-gradient(to top, #121212, rgba(18, 18, 18, 0)), url(../assets/xj2.jpg);
        background-size: cover;
        background-position: 0 -260px;
        color: #DFDFDF;
    }

    .banner .title {
        font-family: "Oswald-Regular";
        padding-top: 48px;
        text-align: center;
        font-size: 70px;
    }

    .banner .title-trans-enter-active,
    .banner .title-trans-leave-active {
        transition: all 1s;
    }

    .banner .title-trans-enter,
    .banner .title-trans-leave-to {
        padding-top: 33px;
        opacity: 0;
    }

    .banner .my-word {
        font-size: 24px;
        text-align: center;
    }

    .banner .my-word-trans-enter-active,
    .banner .title-trans-leave-active {
        transition: all 1s;
    }

    .banner .my-word-trans-enter,
    .banner .my-word-trans-leave-to {
        opacity: 0;
    }
</style>
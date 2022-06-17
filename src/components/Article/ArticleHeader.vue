<template>
    <div class="header">
        <transition name="icon-trans" appear>
            <div class="iconfont icon-FanHui" @click="$router.back()"></div>
        </transition>
        <div class="wrapper">
            <transition name="title-trans" appear>
                <div class="title">{{title}}</div>
            </transition>
            <transition name="my-word-trans" appear>
                <div class="my-word" v-if="myWord.show">{{myWord.text}}</div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Hi Article,"
        },
        mark: {
            type: String,
            default: "To find the absolute in your life.",
        }
    },
    data() {
        return {
            myWord: {
                show: false,
                text: this.mark
            }
        }
    },
    methods: {
        startUp() {
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

<style lang="less" scoped>
    .header {
        height: 200px;
        color: #DFDFDF;
        opacity: .8;
        padding-left: 10px;

        .icon-FanHui {
            position: fixed;
            top: 30px;
            left: 30px;
            font-size: 40px;
        }

        .icon-trans-enter {
            opacity: 0;
        }

        .icon-trans-enter-active {
            transition: all 5s;
        }

        .title {
            font-family: "Oswald-Regular";
            padding-top: 48px;
            text-align: left;
            font-size: 45px;
        }

        .title-trans-enter {
            padding-top: 33px;
            opacity: 0;
        }

        .title-trans-enter-active {
            transition: all 2s;
        }

        .my-word {
            font-size: 20px;
            text-align: left;
        }

        .my-word-trans-enter-active {
            transition: all 4s;
        }

        .my-word-trans-enter {
            opacity: 0;
        }
    }
</style>
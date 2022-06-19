<template>
    <div class="header">
        <transition name="icon-trans" appear>
            <div class="iconfont icon-FanHui" @click="$router.back()"></div>
        </transition>
        <div class="wrapper">
            <transition name="title-trans" appear>
                <div class="title">{{title}}</div>
            </transition>
            <div class="item">
                <transition name="my-word-trans">
                    <div class="my-word" v-show="myWord.show">{{myWord.text}}</div>
                </transition>
                <transition name="my-word-trans">
                    <div class="my-item" v-show="myItem.show">{{myItem.text}}</div>
                </transition>
            </div>
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
        },
        item: {
            type: String,
            default: "Item. 01",
        }
    },
    data() {
        return {
            myWord: {
                show: false,
                text: this.mark
            },
            myItem: {
                show: false,
                text: this.item
            }
        }
    },
    methods: {
        startUp() {
            setTimeout(() => {
                this.myWord.show = true
            }, 500);
            setTimeout(() => {
                this.myItem.show = true
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
        height: 190px;
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

        .item {
            display: flex;
            justify-content: space-between;

            .my-word {
                font-size: 20px;
                text-align: left;
                opacity: .85;
            }

            .my-item {
                font-size: 20px;
                text-align: left;
                margin-right: 10px;
                opacity: .85;
            }

            .my-word-trans-enter-active {
                transition: all 4s;
            }

            .my-word-trans-enter {
                opacity: 0;
            }
        }
    }
</style>
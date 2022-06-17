<template>
    <div class="card" @mouseover="handleMouse">
        <img :src="backgroundImage" alt="">
        <CardTitle :content="title"></CardTitle>
            <collapse-transition>
                <div class="content" v-show="isActive">
                    <slot></slot>
                </div>
            </collapse-transition>
        <CardFooter :content="footer"></CardFooter>
    </div>
</template>

<script>
import CardTitle from "./CardTitle.vue"
import CardFooter from "./CardFooter.vue"
import collapseTransition from "../../plugin/collapse"

export default {
    data() {
        return {
            isActive: false
        }
    },
    props: {
        isDefaultActive: {
            type: Boolean,
            default: false
        },
        cardName: {
            type: String,
            required: true
        },
        title: {
            icon: "icon-zhiding",
            text:  "It's title text"
        },
        footer: {
            left: "This is footer left",
            right: 'This is footer right'
        },
        backgroundImage: {
            type: String
        }
    },
    components: {
        CardTitle,
        CardFooter,
        collapseTransition
    },
    methods: {
        handleMouse() {
            this.$eventbus.$emit('switchCard', this.cardName)
        }
    },
    beforeMount() {
        this.isActive = this.isDefaultActive
    },
    mounted() {
        this.$eventbus.$on('switchCard',(cardName)=>{
            if (cardName === this.cardName) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        })
    },
    beforeDestroy() {
        this.$eventbus.$off('switchCard')
    },
}
</script>

<style lang="less">
    .card {
        position: relative;
        padding: 20px 30px 10px 30px;
        border-radius: 10px;
        border: #161616 1px solid;
        background-size: cover;
        overflow: hidden;
        margin-bottom: 20px;

        img {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            opacity: .2;
            z-index: -1;
        }

        .content {
            font-size: 18px;
            line-height: 1.625;
            font-weight: 500;

            p,
            div,
            img {
                padding: 6px 0;
            }

            li {
                padding-left: 20px;
            }

            li:hover a {
                color: #B7452f;
            }
        }
    }
</style>
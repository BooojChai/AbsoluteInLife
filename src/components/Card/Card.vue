<template>
    <div class="card">
        <img :src="backgroundImage" alt="">
        <CardTitle :text="title"></CardTitle>
        <slot></slot>
        <CardFooter :text="footer"></CardFooter>
    </div>
</template>

<script>
import CardTitle from "./CardTitle.vue"
import CardFooter from "./CardFooter.vue"

export default {
    props: {
        title: {
            type: String,
            default: "This is title"
        },
        footer: {
            type: Object,
            default: function () {
                return {
                    left: "This is footer left",
                    right: 'This is footer right'
                }
            }
        },
        backgroundImage: {
            type: String
        }
    },
    components: {
        CardTitle,
        CardFooter
    }
}
</script>

<style lang="less" scoped>
    .card {
        position: relative;
        padding: 20px;
        padding-left: 30px;
        border-radius: 10px;
        border: #161616 1px solid;
        background-size: cover;
        overflow: hidden;

        img {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            opacity: .2;
            z-index: -1;
        }

        .content {
            margin: 20px 0;
            font-size: 18px;
            line-height: 1.625;
            font-weight: 500;

            p,
            div,
            img {
                margin-bottom: 12px;
            }

            .p_ending {
                border-top: 1px dashed #777;
                margin-top: 10px;
                padding-top: 10px;
            }

            img {
                width: 100%;
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
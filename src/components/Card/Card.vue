<template>
    <div class="card">
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
    },
    components: {
        CardTitle,
        CardFooter
    }
}
</script>

<style lang="less" scoped>
    .card {
        padding: 20px;
        padding-left: 30px;
        background-color: #181818;
        border-radius: 10px;

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
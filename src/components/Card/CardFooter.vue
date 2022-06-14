<template>
    <div class="card-footer">
    <div class="left">
        <span class="iconfont icon-riqi"></span>
        <span>{{text.left}}</span>
    </div>

    <div class="right">{{text.right}}</div>
</div>
</template>

<script>
export default {
    props: {
        text: {
            left: {
                type: String,
                default: "It's footer left"
            },
            right: {
                type: String,
                default: "It's footer right"
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .card-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        span {
            margin-right: 5px;
        }

        .right {
            font-weight: 700;
        }
    }
</style>
<template>
    <div class="card-footer">
    <div class="left">
        <span class="iconfont icon-riqi"></span>
        <span>{{content.left}}</span>
    </div>

    <div class="right">{{content.right}}</div>
</div>
</template>

<script>
export default {
    props: {
        content: {
            left: "This is footer left",
            right: 'This is footer right'
        },
    }
}
</script>

<style lang="less" scoped>
    .card-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        line-height: 40px;

        span {
            margin-right: 5px;
        }

        .right {
            font-weight: 700;
        }
    }
</style>
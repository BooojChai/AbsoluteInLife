<template>
    <div class="card-title">
        <span class="iconfont icon-zhiding"></span>
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "It's title text"
        }
    }
}
</script>

<style lang="less" scoped>
    .card-title {
        color: #AFAFAF;;
        font-size: 30px;

        span {
            margin-right: 20px;
        }

        .icon-zhiding {
            font-size: inherit;
        }
    }

    .card-title:hover {
        color: #B7452f;
    }
</style>
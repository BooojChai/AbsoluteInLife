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

<style>
    .card-title {
        color: #CFCFCF;
        font-size: 30px;
    }

    .card-title span {
        margin-right: 20px;
    }

    .card-title .icon-zhiding {
        font-size: inherit;
    }

    .card-title:hover {
        color: #B7452f;
    }
</style>
<template>
    <div class="card-title">
        <span class="iconfont" :class="content.icon" :style="{fontSize: 'inherit'}"></span>
        <span>{{content.text}}</span>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            icon:  "icon-zhiding",
            text: "It's title text"
        }
    }
}
</script>

<style lang="less" scoped>
    .card-title {
        color: #AFAFAF;
        font-size: 30px;

        span {
            margin-right: 20px;
        }
    }

    .card-title:hover {
        color: #B7452f;
    }
</style>
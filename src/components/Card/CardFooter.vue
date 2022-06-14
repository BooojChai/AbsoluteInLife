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

<style>
    .card-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .card-footer span {
        margin-right: 5px;
    }

    .card-footer .right {
        font-weight: 700;
    }
</style>
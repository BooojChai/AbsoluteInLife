<template>
    <div class="footer" v-pre>
        <div class="saywhat">
            虽然前方拥堵，但您仍在最优道路上。
        </div>
        <div class="power">
            Powered By <a href="https://cn.vuejs.org" target="_blank">Vue.js</a> | Theme Refer <span>Archer</span>
        </div>
        <div class="ending">
            欢迎再来：）
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .footer {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .power span, a {
      color: #f7452f;
    }

    .ending {
      font-size: 14px;
    }
  }
</style>
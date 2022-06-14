<template>
  <div id="app">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <!-- <HomePage/> -->
  </div>
</template>

<script>
//import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  // components: {
  //   HomePage
  // }
}
</script>

<style>
  @font-face {
    font-family: "Oswald-Regular";
    src: url(./assets/font/Oswald-Regular.ttf);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #777;
  }

  /* 清除浮动 */
  .clearfix:before,
  .clearfix:after {
    content: '';
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }

  /* 清除默认样式的代码 */
  /* 去除常见标签默认的 margin 和 padding */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  input {
    margin: 0;
    padding: 0;
  }

  /* 內减模式 */
  * {
    box-sizing: border-box;
  }

  /* 设置网页统一的字体大小、行高、字体系列相关属性 */
  body {
    font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    color: #777;
  }

  /* 去除列表默认样式 */
  ul,
  ol {
    list-style: none;
  }

  /* 去除默认的倾斜效果 */
  em,
  i {
    font-style: normal;
  }

  /* 去除a标签默认下划线，并设置默认文字颜色 */
  a {
    text-decoration: none;
    color: #777;
  }

  /* 设置img的垂直对齐方式为居中对齐，去除img默认下间隙 */
  img {
    vertical-align: middle;
  }

  /* 去除input默认样式 */
  input {
    border: none;
    outline: none;
    color: #777;
  }

  /* 左浮动 */
  .fl {
    float: left;
  }

  /* 右浮动 */
  .fr {
    float: right;
  }

  /* 双伪元素清除法 */
  .clearfix::before,
  .clearfix::after {
    content: "";
    display: table;
  }

  .clearfix::after {
    clear: both;
  }

  * {
    font-family: "Oswald-Regular", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
  }

  body {
    background-color: #121212;
  }

  .red {
    color: #B7452f;
  }

  .wrapper {
    width: 1040px;
    margin: 0 auto;
  }
</style>

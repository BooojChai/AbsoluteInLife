<template>
    <div class="tech">
        <Card :cardName="'Card-01'" :isDefaultActive="'true'" :title="{icon:'icon-zhiding',text:'01. 用50行代码实现手风琴菜单'}" :footer="{left:'To Be Done',right:'# H5/CSS/JavaScript/Vue'}" :backgroundImage="require('./Article/Page/assets/ABG3.jpg')" :targetArticle="'TechArticle-01'">
            <p>
                软核技术分享的第一篇文章，准备从我的<strong>技术栈顶</strong>出发，介绍一下如何手撸一个上方的手风琴菜单组件。
            </p>

            <p>
                借助强大的<strong class="red">flex布局</strong>，我们可以结合原生CSS与Vue的<strong class="red">条件渲染</strong>属性，用低代码量实现这个<strong>数据可配，即插即用</strong>的手风琴菜单组件，同时还具有不错的渲染性能。
            </p>

            <p>
                <strong class="red">Here we go!</strong>
            </p>
        </Card>
    </div>
</template>

<script>
/* Cards */
import Card from './Card/Card.vue'

export default {
    components: {
        Card
    }
}
</script>
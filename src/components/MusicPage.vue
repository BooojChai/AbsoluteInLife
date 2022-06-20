<template>
    <div class="music">
        <Card :cardName="'Card-01'" :isDefaultActive="'true'" :title="{icon:'icon-zhiding',text:'01. 记录2022元旦微软苏州Office乐队排练'}" :footer="{left:'2022/6/19',right:'#一拍即合，一见如故'}" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')" :targetArticle="'MusicArticle-01'">
            <p>未命名乐队<strong class="red">首聚</strong>，生涩却有趣。</p>
            <p>终于排到心心念念已久的<strong>草东</strong>，过了一把主唱的瘾。最终三首歌的呈现并不完美，但足够<strong class="red">值得纪念</strong>。</p>
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
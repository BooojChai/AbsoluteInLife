<template>
    <div class="music">
        <Card :cardName="'Card-01'" :title="{icon:'icon-zhiding',text:'01. 记录2022元旦微软苏州Office乐队排练'}" :footer="{left:'2022/6/19',right:'#正在Coding'}" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')" :targetArticle="'MusicArticle-01'">
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
<template>
    <div class="tech">
        <Card :cardName="'Card-01'" :title="{icon:'icon-zhiding',text:'Technology Science. 板块建设中'}" :footer="{left:'2022/06/18',right:'#正在Coding'}" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')" :targetArticle="'TechPage'">
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
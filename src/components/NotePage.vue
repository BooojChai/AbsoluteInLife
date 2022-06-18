<template>
    <div class="note">
        <Card :cardName="'Card-01'" :title="{icon:'icon-zhiding',text:'Informal Essay. 板块建设中'}" :footer="{left:'To Be Done',right:'#正在Coding'}" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')" :targetArticle="'NotePage'">
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
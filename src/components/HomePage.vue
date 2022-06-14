<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper">
            <Profile/>
            <div class="cards">
                <Card1/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Banner from './Banner.vue'
import Profile from './Profile.vue'
import Footer from './Footer.vue'

/* Cards */
import Card1 from './Card/Card-1.vue'

export default {
    components: {
        Banner,
        Profile,
        Footer,

        /* Cards */
        Card1
    }
}
</script>

<style lang="less" scoped>
.homepage .main {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;

    .cards {
        flex: 1;
        margin-left: 20px;
        padding: 0 10px;
    }
}
</style>
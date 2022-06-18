<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper">
            <Profile/>
            <div class="core-content">
                <Menu/>
                <div class="cards">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Banner from './Banner.vue'
import Profile from './Profile.vue'
import Footer from './Footer.vue'
import Menu from './Menu.vue'

export default {
    components: {
        Banner,
        Profile,
        Footer,
        Menu
    }
}
</script>

<style lang="less" scoped>
.homepage .main {
    display: flex;
    margin-top: 10px;
    margin-bottom: 30px;

    .core-content {
        flex: 1;
        margin-left: 20px;

        .cards {
            margin-top: 20px;
            padding: 0 10px;
        }
    }
}
</style>
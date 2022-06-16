<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper">
            <Profile/>
            <div class="cards">
                <Card :title="'01. 关于这里，关于我'" :footer="{left:'2022/06/06',right:'#第一篇文章'}" @click.native="navigateToArticle('/Article-01')">
                    <div class="content" v-pre>
                        <p>嗨，你好。</p>

                        <p>我是Bojun，一名<strong
                                class="red">微软中国</strong>的软件工程师，主业是<strong>Android客户端开发</strong>，目前正向<strong>大前端开发</strong>转型。如你所见，这里是我的前端始发站。<br>
                        </p>

                        <p>加入微软之前我曾就职于<strong class="red">三星电子</strong>和<strong
                                class="red">OPPO</strong>。在三星工作时，我所在的项目组创造了三连跪的传奇：做智能手机软件，做了半年<strong>业务线整个砍掉</strong>。
                            后来做智能手表应用开发，做了一年半<strong>业务线整体迁出中国</strong>。最后做智能手环框架，在看到起色时<strong>项目黄了</strong>，我也离职并加入OPPO，从零开始接触Android，先后浅尝了<strong>系统优化和游戏优化</strong>的滋味，最终误打误撞做起了系统开放能力，成为<strong>ColorOS生态建设</strong>的浇水工。
                        </p>

                        <div>目前我就职于微软中国，正在为<strong class="red">Bing Search</strong>和<strong class="red">Microsoft
                                Start</strong>两款移动端产品添砖加瓦。
                        </div>
                    </div>
                </Card>
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
import Card from './Card/Card.vue'

export default {
    components: {
        Banner,
        Profile,
        Footer,

        /* Cards */
        Card
    },
    methods: {
        navigateToArticle(where) {
            console.log("aaa")
            this.$router.push(where)
        }
    },
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
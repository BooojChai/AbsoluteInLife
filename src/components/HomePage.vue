<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper">
            <Profile/>
            <div class="cards">
                <Card :title="'01. 关于这里，关于我'" :footer="{left:'2022/06/06',right:'#第一篇文章'}" @click.native="navigateToArticle('/Article-01')" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')">
                    <div class="content" v-pre>
                        <p>嗨，你好。</p>

                        <p>这里是Bojun，一名<strong
                                class="red"> 微软中国 </strong>的软件工程师，主业是<strong> Android客户端开发</strong>，目前正向<strong>大前端开发</strong>转型。如你所见，这里是我的前端始发站。<br>
                        </p>

                        <p>
                            我意识到自己的平凡，于是不断尝试在这个世界上留下我存在过的痕迹。<br>
                            而这里就是我最新鲜的一步脚印，会驻足许久的土壤。
                        </p>
                    </div>
                </Card>

                <Card :title="'02. 双非一本程序员的大厂之路（上）'" :footer="{left:'2022/06/16',right:'#正在Coding'}" @click.native="navigateToArticle('/')" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')">
                    <div class="content" v-pre>
                        <p>工作六年以来，我已经待过<strong class="red"> 四家公司 </strong>，如果给他们从1到4编个号，那么按照<strong class="red">公司属性</strong>做分类，他们分别是：<br>
                            <strong>01. 中型民营私企、02. 一线电子厂外企、03. 大型民营私企、04. 世界一流外企；</strong><br>
                            按照我所从事的 <strong class="red">产品类型</strong> 分类，他们分别是：<br>
                            <strong>01. 嵌入式通信软件、02. 穿戴设备软件/框架、03. Android系统与应用、04. 基于混合框架的移动端应用；</strong><br>
                            按照我使用的 <strong class="red">技术栈与编程语言</strong> 分类，他们分别是：<br>
                            <strong>01. DVB/C/C++、02. Tizen OS/C/C++、03. Android/C++/Java、04. Android/Vue/React/Kotlin/JS；</strong><br>
                        </p>
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
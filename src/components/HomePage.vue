<template>
    <div class="homepage">
        <Banner/>
        <div class="main wrapper">
            <Profile/>
            <div class="cards">
                <Card :cardName="'Card-01'" :title="{icon:'icon-zhiding',text:'01. 关于这里，关于我'}" :footer="{left:'2022/06/06',right:'#第一篇文章'}" @click.native="navigateToArticle('/Article-01')" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')">
                    <p>嗨，你好。</p>

                    <p>这里是Bojun，一名<strong
                            class="red"> 微软中国 </strong>的软件工程师，主业是<strong> Android客户端开发</strong>，目前正向<strong>大前端开发</strong>转型。如你所见，这里是我的前端始发站。<br>
                    </p>

                    <p>
                        我意识到自己的平凡，于是不断尝试在这个世界上留下我存在过的痕迹。<br>
                        而这里就是我最新鲜的一步脚印，会驻足许久的土壤。
                    </p>
                </Card>

                <Card :cardName="'Card-02'" :isDefaultActive="true" :title="{icon:'icon-10kejichuangxin-keji',text:'02. 双非一本程序员的大厂之路（上）'}" :footer="{left:'2022/06/16',right:'#正在Coding'}" @click.native="navigateToArticle('/')" :backgroundImage="require('./Article/Page/assets/ABG3.jpg')">
                    <div class="content" v-pre>
                        <p>2016年，我从苏南某座小城的某所双非一本大学通信工程专业毕业，一晃已工作六年，而微软已经是我呆过的<strong class="red">第四家公司</strong>。按照公司属性给我的前东家和东家们做个分类，他们分别是：<br>
                            <strong>中型民营私企、一线电子厂外企、大型民营私企、世界一流外企。</strong>
                        </p>
                        <p>
                            在每一家公司<strong>使用的技术栈，负责的产品类型</strong>也完全不同，而在职期间的体验与经历更是云泥之别，有如过山车一般跌宕起伏。
                        </p>
                        <p>
                            接下来我会分成上下两篇来回首自己的职业生涯路径，寻找来路上<strong class="red">遗失的宝藏，错过的风景。</strong>
                        </p>
                        <p>
                            这不是就业指南，也尽量少做观点输出。<br>
                            如果你能从中得到点什么，那就太棒了。
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
<template>
    <div class="article" @mousewheel="$cancelScroll()">
        <Header :title="'关于这里，关于我。'" :mark="'然后呢，一起走吧。'" :item="'Professional Career. 01'"/>
        <div class="main wrapper">
            <div class="content" v-pre>
                <h2>嗨，你好。</h2>

                <p>这里是Bojun，一名<strong><a class="red" href="https://www.microsoft.com/zh-cn/ard/default.aspx" target="_blank"> 微软中国 </a></strong>的软件工程师，主业是<strong> Android客户端开发 </strong>, 目前正在 <strong>HTML->CSS->AJAX->VUE/REACT->NODE</strong> 的路径上打怪升级，努力向<strong>大前端开发</strong>转型。如你所见，这里是我的前端始发站。<br>
                </p>

                <p>加入微软之前我曾就职于<strong class="red"> 三星电子 </strong>和<strong
                        class="red"> OPPO </strong>。在三星工作时，我所在的项目组创造了三连跪的传奇：做智能手机软件，做了半年<strong>业务线整个砍掉</strong>。
                    后来做智能手表应用开发，做了一年半<strong>业务线整体迁出中国</strong>。最后做智能手环框架，在看到起色时<strong>项目黄了</strong>，我也离职并加入OPPO，从零开始接触Android，先后浅尝了<strong>系统优化和游戏优化</strong>的滋味，最终误打误撞做起了系统开放能力，成为<strong>ColorOS生态建设</strong>的浇水工。
                </p>

                <div>目前我就职于微软中国，正在为<strong class="red"> Bing Search </strong>和<strong class="red"> Microsoft
                        Start </strong>两款移动端产品添砖加瓦。你可以在这些地方找到我的足迹：<br>
                    <li><a href="https://www.samsung.com/nz/support/mobile-devices/daily-briefing-feature-samsung-galaxy-watch/"
                            target="_blank">Daily Briefing - Samsung Galaxy Watch</a></li>
                    <li><a href="https://open.oppomobile.com/new/introduction?page_name=hyperboost"
                            target="_blank">Hyper Boost SDK - OPPO Open Capability</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.microsoft.bing&hl=en_US&gl=US"
                            target="_blank">Bing Search - Microsoft App</a></li>
                </div>

                <div>
                    除开吃饭的本领，我还有以下成分：
                    <li><strong>会点乐器</strong>，在不同的业余乐队担任过吉他手/鼓手/贝斯手，也自己写歌，发表过几首纯个人表达的吉他弹唱曲。
                        教过<strong>100个小朋友</strong>打鼓，教过大朋友尤克里里，教过大学吉他社的团课；
                    </li>
                    <li><strong>精力不足但最喜欢做的事是“动脑子”</strong>，譬如喜欢推理小说，悬疑电影，譬如狼人杀的游戏年限和工龄一样长；</li>
                    <li><strong>多年脊柱疾病患者</strong>，久病成医，现在<strong>会看MRI和X光的片子</strong>，永远走在自我康复的道路上；</li>
                    <li>曾经差点淹死在马来西亚的海里。</li>
                </div>

                <p>我的第一篇正式文章，标题准备定为<strong class="red">一个双非一本程序员的大厂之路</strong>，聊一聊我这样一个来自普通高校的普通学渣，摸爬滚打的职业生涯路径。
                    至于以后这里要写些什么，可能是随笔，可能是软核技术分享，可能是音乐电影分享，管它呢，再说吧。</p>

                <div class="ending">
                    <img src="./assets/kk.jpg" alt="">
                    <p><strong>我意识到自己的平凡，于是不断尝试在这个世界上留下我存在过的痕迹。<br>
                        而这里就是我最新鲜的一步脚印，会驻足许久的土壤。</strong></p>
                </div>
            </div>
            <CardFooter :content="{left:'2022/06/06',right:'#然后呢，一起走吧。'}"/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '../ArticleHeader.vue'
import Footer from '../../Footer.vue'
import CardFooter from '../../Card/CardFooter.vue'

export default {
    components: {
        Header,
        Footer,
        CardFooter
    },
    mounted() {
        this.$scrollTo()
    },
}
</script>

<style lang="less" scoped>
.article {
    background-image: url(./assets/ABG2.jpg);
    background-size: cover;

    .main {
        backdrop-filter: blur(8px);
        background-color: rgba(24,24,24,.5);
        border-radius: 10px;
        margin-bottom: 30px;
        padding: 30px 40px 20px 40px;

        .content {
            font-size: 18px;
            line-height: 1.625;
            font-weight: 500;

            * {
                margin-bottom: 12px;
            }

            li {
                margin-top: 5px;
                margin-bottom: 5px;
            }

            .ending {
                border-top: 1px solid;
                border-image: linear-gradient(to right, rgba(100,100,100,.5), rgba(100,100,100,.1)) 1;
                margin-top: 30px;
                padding-top: 20px;
            }

            img {
                width: 60%;
                display: table-cell;
                vertical-align: middle;
                text-align: center;
            }

            li {
                padding-left: 20px;
            }

            li:hover a {
                color: #B7452f;
            }
        }
    }
}
</style>
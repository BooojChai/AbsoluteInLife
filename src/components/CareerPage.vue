<template>
    <div class="career">
        <Card :cardName="'Card-01'" :title="{icon:'icon-zhiding',text:'01. 关于这里，关于我'}" :footer="{left:'2022/06/06',right:'#然后呢，一起走吧'}" :backgroundImage="require('./Article/Page/assets/ABG2.jpg')" :targetArticle="'Article-01'">
            <p>嗨，你好。</p>

            <p>这里是Bojun，一名<strong
                    class="red"> 微软中国 </strong>的软件工程师，主业是<strong> Android客户端开发</strong>，目前正向<strong>大前端开发</strong>转型。如你所见，这里是我的前端始发站。<br>
            </p>

            <p>
                我意识到自己的平凡，于是不断尝试在这个世界上留下我存在过的痕迹。<br>
                而这里就是我最新鲜的一步脚印，会驻足许久的土壤。
            </p>
        </Card>

        <Card :cardName="'Card-02'" :title="{icon:'icon-10kejichuangxin-keji',text:'02. 双非一本程序员的大厂之路（一）'}" :footer="{left:'2022/06/17',right:'#雷霆雨露，皆是礼物'}" :backgroundImage="require('./Article/Page/assets/ABG3.jpg')" :targetArticle="'Article-02'">
            <div class="content" v-pre>
                <p>2016年，我从苏南某座小城的某所双非一本大学通信工程专业毕业，一晃已工作六年，而微软已经是我呆过的<strong class="red">第四家公司</strong>。按照公司属性给我的前东家和东家们做个分类，他们分别是：<br>
                    <strong>中型民营私企、一线电子厂外企、大型民营私企、世界一流外企。</strong>
                </p>
                <p>
                    在每一家公司<strong>使用的技术栈，负责的产品类型</strong>也完全不同，而在职期间的体验与经历更是<strong>云泥之别，有如过山车一般跌宕起伏。</strong>
                </p>
                <p>
                    接下来我会分成起·承·转·合四个篇章来回首自己的职业生涯路径，寻找来路上<strong class="red">遗失的宝藏，错过的风景。</strong>
                </p>
                <p>
                    这不是就业指南，也尽量少做观点输出。<br>
                    如果你能从中得到点什么，那就太棒了。
                </p>
            </div>
        </Card>

        <Card :cardName="'Card-03'" :isDefaultActive="true" :title="{icon:'icon-S_round',text:'03. 双非一本程序员的大厂之路（二）'}" :footer="{left:'2022/06/18',right:'#任意门，通向世界'}" :backgroundImage="require('./Article/Page/assets/ss.png')" :targetArticle="'Article-03'">
            <div class="content" v-pre>
                <p>
                    三星是典型的<strong class="red">外企风格</strong>：</p>
                <p> 待遇一般，但具有<strong>性价比</strong>。
                    不提倡加班，<strong>按小时支付加班费</strong>。
                    <strong>弹性工作时间</strong>，下午1点之前打卡即可。
                    工作量不大，<strong>有充足的时间提升自己</strong>。
                </p>
                <p>
                    这里虽然是我的第二家公司，但却是我<strong>真正意义上职业生涯的起点。</strong>
                </p>
                <p>
                    <strong class="red">扬帆，启航。</strong>
                </p>
            </div>
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
<template>
    <div class="article" @mousewheel="$cancelScroll()">
        <Header :title="'用50行代码实现手风琴菜单'" :mark="'H5/CSS/JavaScript/Vue'" :item="'Technology & Science. 01'"/>
        <div class="main wrapper">
            <div class="content">
                <p class="tips">* 希望阅读这篇文章的你，已经学习了HTML/CSS/JS/DOM & BOM的基础知识，并了解Vue的基础语法。</p>
                <h1>观察它</h1>
                <p>网上手风琴菜单一搜一大堆，但没有找到心仪的样式，且普遍不适用于Vue的大框架，于是乎决定<strong class="red">自己动手，从零撸起。</strong></p>
                <p>先有请今天的<strong>主角登场</strong>，组件化之后的模块，即插即用，很是方便：）</p>
                <div class="menu">
                    <Menu :isDemo="true"></Menu>
                </div>
                <div>
                    观察一番后，发现这个拥有<strong>多个单元</strong>的横向菜单有着如下<strong>外貌特征：</strong>
                    <li>当<strong>鼠标进入</strong>某个单元时，该单元<strong class="red">长度伸展</strong>，且携带过渡效果；</li>
                    <li>当鼠标进入某个单元时，其他单元<strong class="red">恢复为等长</strong>，且携带过渡效果；</li>
                    <li>当单元伸展时，右下角有一行汉字由左向右<strong class="red">淡入</strong>，恢复时淡出；</li>
                    <li>当单元长度变化时，单元的<strong>背景图片同样有伸缩效果；</strong></li>
                </div>

                <h1>剖析它</h1>
                <h2>制定布局</h2>
                <p>面对这样的需求，通常的做法是用<strong>一个div盒子，里面放N个li</strong>，为每个li指定相同的宽度。在鼠标悬停状态下，利用CSS<strong>类选择器</strong>的 <strong class="red">:hover</strong>属性，调整当前li的宽度，恢复其他li的宽度。</p>
                <p>为了实现组件化的需求，我们希望菜单的<strong class="red">总宽度是自适应</strong>的，并且菜单中单元的数量可以<strong>根据指定输入数据而生成</strong>，这也意味着<strong class="red">每个单元的宽度</strong><strong>也需要自适应。</strong>因此，采用<strong>绝对宽度是不可取的</strong>，我们可以借助强大的<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank">flex布局</a>来实现单元们的动态分布与对齐。</p>
                <p>flex布局是一种<strong class="red">一维布局模型</strong>，在父盒子开启了flex布局后，可以<strong>通过指定给子元素指定 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#flex_%E5%85%83%E7%B4%A0%E4%B8%8A%E7%9A%84%E5%B1%9E%E6%80%A7" target="_blank">flex-grow 元素属性</a>，来决定子元素的尺寸在整体布局中所占权重。</strong>来看看官方对于该属性的说明：</p>
                <img src="./assets/flexgrow.png" :style="{width:'70%'}" alt="">
                <p>借助flex布局的这一特点，我们可以通过<strong>改变鼠标进入单元的flex-grow权重，在其他单元等长的情况下，使选中单元伸长。</strong></p>

                <h2>变化与过渡</h2>
                <p>在我的设计思路里，当鼠标进入单元时，该单元会伸长，当鼠标离开该单元时，<strong>如果没有进入其他单元，那当前单元的伸长状态是不变化的。</strong></p>
                <p>因此，<strong>使用CSS中的静态hover属性是无法满足需求的</strong>，用hover控制的标签在鼠标离开后就会解除对应样式，我们需要监听每个单元的鼠标进入事件<strong class="red">@mouseover</strong>来控制样式的改变。具体的做法是，在每个单元上用Vue的 <strong class="red">v-bind:class </strong>标签绑定一个动态样式，在鼠标进入时，激活该样式，调整当前单元的flex-grow权重为2（其他等长单元的两倍）。</p>
                <p>每个选中单元的变化的宽度，是<strong class="red">从有到有</strong>的，可以使用原生CSS的<strong class="red">transaction属性</strong>指定过渡时长，即可实现平滑的过渡效果。另一个有变化与过渡效果的是每个单元右下角的汉字。这个文本是使用<strong>绝对定位</strong>定在每个单元的右下角，会随着单元宽度缩小而位移并消失，这种变化是<strong class="red">从无到有</strong>的。</p>
                <p>对于<strong>从无到有</strong>的过渡效果，推荐使用Vue封装的<a href="https://cn.vuejs.org/v2/guide/transitions.html#ad" target="_blank"> transaction组件</a>配合<a href="https://cn.vuejs.org/v2/guide/conditional.html#v-show" target="_blank"> 条件渲染</a>，通过指定汉字文本<strong>隐藏时透明且向左位移</strong>，在鼠标进入事件发生时改变条件渲染绑定值，即可实现过渡效果。这里我调整的属性是padding，更规范的写法可能是采用transform，或者改变绝对定位的right值甚至改变margin都是可以的。</p>

                <h1>实现它</h1>
                <h2>HTML部分</h2>
                <img src="./assets/html1.png" alt="">
                <p>其中items里保存着<strong>每个单元的数据以及激活状态标志位</strong>，利用v-for标签遍历items长度，动态生成菜单中的单元。</p>

                <h2>JS部分</h2>
                <img src="./assets/js1.png" :style="{width:'70%'}" alt="">
                <p>每个item里的isActive标志位用于改变该单元的激活状态，在handleMouseOver方法中采用<strong>排他思想</strong>，集中处理了每个单元的isActive标志位。你还可以在这里做一点必要的业务逻辑。</p>

                <h2>CSS部分（less语法）</h2>
                <img src="./assets/css1.png" :style="{width:'70%'}" alt="">

                <p><strong>整体看下来，除去用户数据和定制样式，实现这个手风琴菜单的核心代码不超过50行。</strong><br>
                <a href="https://github.com/BooojChai/AbsoluteInLife/blob/main/src/components/Menu.vue" target='_blank'>点击这里查看完整代码</a>
                </p>
                <p>最后还有一个<strong class="red">小彩蛋</strong>：背景图片的过渡效果是怎么实现的？<br>
                其实，我<strong>只添加了一行代码</strong>，它就自然发生了。至于原理，留给你去挖掘和发散吧：）</p>

                <div class="ending">
                    第一篇技术分享，虽然有点小白，但迈出第一步便是最重要的意义。<br>
                    不积跬步，无以至千里。
                </div>
            </div>
            <CardFooter :content="{left:'2022/06/20',right:'# H5/CSS/JavaScript/Vue'}"/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '../ArticleHeader.vue'
import Footer from '../../Footer.vue'
import CardFooter from '../../Card/CardFooter.vue'
import Menu from '../../Menu.vue'

export default {
    components: {
        Header,
        Footer,
        CardFooter,
        Menu
    },
    mounted() {
        this.$scrollTo()
    },
}
</script>

<style lang="less" scoped>
.article {
    background-image: url(./assets/ABG3.jpg);
    background-size: 100%;

    .main {
        backdrop-filter: blur(8px);
        background-color: rgba(24,24,24,.5);
        border-radius: 10px;
        margin-bottom: 30px;
        padding: 30px 40px 30px 50px;

        .content {
            font-size: 18px;
            line-height: 1.625;
            font-weight: 500;

            * {
                margin-bottom: 12px;
            }

            img {
                width: 100%;
            }

            .tips {
                opacity: .7;
                font-size: 16px;
            }

            .menu {
                width: 90%;
                line-height: 1.4;
            }

            li {
                margin-top: 5px;
                margin-bottom: 5px;
                padding-left: 15px;
            }

            h1,h2,h3 {
                color: #A0A0A0
            }

            a {
                color: #B7452f;
                font-weight: 700;
                border-bottom: 1px solid rgba(183, 69, 47, .7);
                transition: all .1s;
            }

            a:hover {
                border-bottom: 2px solid rgba(183, 69, 47, 1);
            }

            .ending {
                border-top: 1px solid;
                border-image: linear-gradient(to right, rgba(100,100,100,.5), rgba(100,100,100,.1)) 1;
                margin-top: 30px;
                padding-top: 20px;
                font-style: 700;
            }
        }
    }
}
</style>
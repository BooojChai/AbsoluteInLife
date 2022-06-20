<template>
    <div class="article" @mousewheel="$cancelScroll()">
        <Header :title="'用50行代码实现手风琴菜单'" :mark="'H5/CSS/JavaScript/Vue'" :item="'Technology & Science. 01'"/>
        <div class="main wrapper">
            <div class="content">
                <p class="tips">* 希望阅读这篇文章的你，已经学习了HTML/CSS/JS/DOM & BOM的基础知识，并了解Vue的基础语法。</p>
                <h1>观察它</h1>
                <p>网上手风琴菜单一搜一大堆，但没有找到心仪的样式，且普遍不适用于Vue的大框架，于是乎决定<strong class="red">自己动手，从零撸起。</strong></p>
                <p>先有请今天的主角登场，组件化之后的模块，即插即用，很是方便：）</p>
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
                <h2>布局</h2>
                <p>面对这样的需求，通常的做法是用<strong>一个div盒子，里面放N个li</strong>，为每个li指定相同的宽度。在鼠标悬停状态下，利用CSS<strong>类选择器</strong>的 <strong class="red">:hover</strong>属性，调整当前li的宽度，恢复其他li的宽度。</p>
                <p>但为了实现组件化的需求，我们希望菜单的<strong class="red">总宽度是自适应</strong>的，并且菜单中单元的数量可以<strong>根据指定输入数据而生成</strong>，这也意味着<strong class="red">每个单元的宽度</strong><strong>也需要自适应。</strong></p>
                <p>因此，绝对宽度的指定是不可取的，我们可以借助强大的<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"><strong>flex布局</strong></a>来实现单元们的动态分布与对齐。</p>
                <p>flex布局是一种<strong class="red">一维布局模型</strong>，在父盒子开启了flex布局后，可以<strong>通过指定给子元素指定flex值，来决定子元素的尺寸在整体布局中所占权重</strong></p>
            </div>
            <CardFooter :content="{left:'2022/06/19',right:'# H5/CSS/JavaScript/Vue'}"/>
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

                a {
                    border-bottom: 2px solid #777777;
                }

                a:hover {
                    border-bottom: 2px solid #B7452f;
                }

                img {
                    width: 60%;
                    margin: 15px;
                }
            }
        }
    }
}
</style>
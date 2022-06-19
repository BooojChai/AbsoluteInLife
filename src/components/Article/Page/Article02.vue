<template>
    <div class="article" @mousewheel="$cancelScroll()">
        <Header :title="'双非一本程序员的大厂之路（一）'" :mark="'雷霆雨露，皆是礼物。'" :item="'Professional Career. 02'"/>
        <div class="main wrapper">
            <div class="content">
                <h1>起. 那家小公司</h1>

                <h2>加入它</h2>

                <p>2015年秋天的某个中午，在苏南某座小城里，有几个20出头的小伙子正在学校后门的小馆子里把酒言欢，庆祝<strong>他们的乐队找到了新的地盘——一间位于学校食堂四楼的排练室</strong>，而我正是其中最扰民的那个鼓手。结束了乐队聚餐，回到宿舍已是中午1点50分，酒精带来的困意让人招架不住，刚准备躺下闭眼秒睡，室友老朱对着我吼了一嗓子：</p>

                <p class="red"><strong>“2点有XX电子的宣讲会，去不去？”</strong></p>

                <p>如果把我的职业生涯串成一条链表，老朱这一嗓子相当于<strong class="red">new了头节点</strong>，<strong>所有的故事即将沿着它而展开。</strong></p>

                <p>彼时的我正值大四秋招的黄金时间段，却<strong>一场招聘会都没有参加过</strong>，对找工作这件事还没有什么概念，加上刚喝了酒困意正浓，现在我实在想不出当时要去参加那场宣讲会的理由，但彼时的Bojun有他的想法，就是<strong>鬼使神差的去了</strong>。宣讲会的流程大概是公司介绍+现场笔试，每人一张大概四页的试卷，包含100分的编程题和20分的智力题。拿到试卷的我当时就傻了眼：编程题的几道大题，和我上个月刚参加过的<strong>全国计算机二级C++考试</strong>的编程题，<strong class="red">一字不差，一模一样</strong>。</p>

                <p>最终我凭借惊人的记忆力，以总分98分的好成绩成为了我们专业去参加那场宣讲会的<strong>十人之中唯一拿到面试机会的同学</strong>，而我的学分绩点在这十人中排位<strong class="red">倒数第一</strong>。随后的面试，Offer，签三方合同，一切发生得出乎意料般顺利，我几乎成为了专业里最早躺平的同学——<strong>一份年薪7.5万的工作</strong>对于那时的我们已然是相当丰厚的待遇。</p>

                <p>谁曾想，这般顺利，这般被其他同学所羡慕的工作，却差点<strong>浇灭了我刚刚燃起的职业生涯火苗。</strong></p>

                <h2>服务它</h2>

                <p>以现在的视野来回望这家小公司，会发现许多太过于<strong class="red">不可思议</strong>，对<strong>一名软件工程师</strong>更是绝对<strong class="red">不可接受</strong>的点：</p>

                <div>
                    <li><strong>所有人的电脑访问不了公网</strong>，整个部门只有两台网速在100kb/s左右的所谓<strong>“上网机”</strong>，用于和销售、客户进行邮件沟通，而上网机往往还需要排队使用。这意味着，绝大部分时间里，你是在<strong class="red">单机工作</strong>，没有任何上网查阅资料，学习技术，<strong>Ctrl C+V</strong>的机会；</li>
                    <li>这个公司所有的软件都没有license，<strong>全部是盗版</strong>。项目流程非常混乱，常常编一个安装包直接发给用户。<strong>没有任何架构文档，API参考文档，</strong>只有几个所谓支持工程师的邮箱地址，而发邮件还需要去“上网机”排队。这意味着，读源码，调API，Coding，<strong class="red">全靠猜</strong>；</li>
                    <li>部门里的新老员工比例大概是2：1，许多老员工需要经常在外地出差，入职后大概<strong>一个老员工要带3~4个新人</strong>，但老员工本身就业务繁忙，不太抽得出时间指导新人，加之<strong>不能上网，没有文档，信息闭塞</strong>，新人<strong class="red">工作体验极差</strong>。</li>
                </div>

                <p>在入职后的很长一段时间里，我都属于<strong>茫然无助的状态</strong>，记得有一次带我的老员工去出差，之前交待给我的任务<strong>完全摸不着头脑</strong>。想打电话问，却连问题都描述不清楚。想问部门里其他老员工，可大家都很忙，其他项目的源码不熟，难以开口。想查资料，对不起，没有文档，不能上网。于是我对着一台单击电脑<strong class="red">干瞪眼</strong>了两个星期，没有任何进展，也不敢看书，怕同事们看到认为我工作不饱和，更不敢求助领导，怕被认为能力差，水平低。</p>

                <p>当时我所做的是<strong>传统电视机顶盒的海外业务</strong>，每个项目就只有两个角色，一个销售在国外客户那里负责沟通需求，传达需求，反馈问题，一个研发人员在公司这头根据销售给的反馈修改代码，编安装包，直接发给销售给客户安装更新，<strong>没有项目经理，没有产品经理，没有出厂测试，项目流程极度扁平</strong>。因为时差、需求变更、销售的能力等因素，每个项目的战线都会拉得很长，而“标准化流程”系统里偏偏还有一个项目时长的限制，于是就是不停地<strong class="red">延期再延期</strong>，即使我每次都以最快速度响应了需求，还是免不了延期。</p>

                <p>过年之后，我领到了<strong>高达人民币2200元</strong>的年终奖，经过打听，比其他同届新人还<strong class="red">打了九折</strong>，可能是因为负责的项目总是延期，所以项目“绩效”比较差吧，而在非常有限的，和带我的老员工以及部长沟通合作的机会里，我也总是<strong>得到淡漠的对待，受到批评，因为写的代码有BUG而被嘲笑</strong>。这样糟糕的处境使我产生了强烈的<strong class="red">自我怀疑</strong>：是不是我太笨了，智商低情商差，胜任不了这份工作？想来应该不是，毕竟我也算“杀出重围”，被这家公司录用。既然不是太笨了，那应该就是能力不行，天生不适合干这一行，于是我陷于是否应该换一个工作类型的纠结当中——<strong>去XX机器人教少儿编程？去考个教师资格证？去琴行代课？回老家随便找个工作？</strong></p>

                <p>现在想来，当时的种种遭遇对于一个处于职场的新人程序员来说，是<strong class="red">无比残忍</strong>的：</p>

                <p><strong>我们来自普通高校，所以对一份上市公司平均月薪超过6k的工作趋之若鹜。</strong></p>

                <p><strong>我们来自小城，机会匮乏，视野局限，能去一座省会城市工作已经觉得自己足够幸运。</strong></p>

                <p><strong>我们初入职场，缺少对比，以为周遭的一切都是对的，只有自己是错的，所以不断从自己身上找问题。</strong></p>

                <p><strong>我对职业生涯的美好幻想，在这里被逐一击碎，散落一地，无从拾起。</strong></p>

                <h2>离开它</h2>

                <p><strong>如果说所有的黑暗都在等待一丝光亮，那我的同事JY就是那道光。</strong></p>

                <p>2017年春天的某个下午，JY走到我工位旁边悄声告诉我，下个月就见不到他了，他准备“<strong class="red">纵身一跃</strong>”。原来待不下去的新人远不止我一个，JY就是其中最早展开自救行动的那一个，彼时的他已经拿到了<strong>三星电子的Offer</strong>，正在走离职流程。从他的描述来看，待遇、工作环境、工作内容都得到了<strong>长足的提升</strong>。当时的我，对三星这样的大公司工作机会是完全不敢想象，但是在JY的怂恿和面经分享之下，我鼓起勇气编辑了尘封近两年的简历，在智联招聘上投递了三星电子的工作岗位，在“<strong>被HR查看3次</strong>“之后，<strong>失去下文，杳无音信。</strong></p>

                <p>转机发生在5月，已经入职三星一阵子的JY帮我内推了简历给HR，这让我重新得到了面试机会。而有了他的面试经验分享，内部推波助澜，我也有惊无险通过了机试、面试，最终成功于JY<strong>重新聚首</strong>。加入三星的具体情况会写在下一篇。</p>

                <p>儿童节的傍晚，正在强制加班的我收到了三星HR的Offer电话，简单沟通后，我回到工位，关掉电脑，在同事们诧异的眼光中离开了办公室，走出门后，我拿出手机给部长发了一条微信：</p>

                <p><strong class="red">“我先走了，明天提离职。”</strong></p>

                <div class="tonext" @click="$router.push({name:'Article-03'})"><strong>下集： 双非一本程序员的大厂之路（二）</strong></div>

                <div class="ending">
                    <img src="./assets/pl.jpg" alt="">
                    <p><strong>文章开头提到的排练室，陪我走完大学的尾巴。<br>
                       我们就这样，各自奔天涯。</strong></p>
                </div>
            </div>
            <CardFooter :content="{left:'2022/06/17',right:'#开端不易，且行且珍惜'}"/>
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
    background-image: url(./assets/ABG3.jpg);
    background-size: 100%;

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

            a {
                border-bottom: 1px solid rgba(183, 69, 47, .7);
                transition: all .1s;
            }

            a:hover {
                border-bottom: 2px solid rgba(183, 69, 47, 1);
            }

            li {
                margin-top: 5px;
                margin-bottom: 5px;
            }

            h1,h2 {
                color: #A0A0A0
            }

            h2 {
                margin-top: 20px;
            }

            .ending {
                border-top: 1px solid;
                border-image: linear-gradient(to right, rgba(100,100,100,.5), rgba(100,100,100,.1)) 1;
                margin-top: 30px;
                padding-top: 20px;
            }

            img {
                width: 60%;
            }

            li {
                padding-left: 20px;
            }

            li:hover a {
                color: #B7452f;
            }

            .tonext {
                margin-top: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
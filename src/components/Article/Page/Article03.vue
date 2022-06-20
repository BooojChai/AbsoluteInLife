<template>
    <div class="article" @mousewheel="$cancelScroll()">
        <Header :title="'双非一本程序员的大厂之路（二）'" :mark="'扬帆，启航。'" :item="'Professional Career. 03'"/>
        <div class="main wrapper">
            <div class="content" v-pre>
                <h1>承.  Samsung</h1>

                <h2>加入它</h2>

                <p>当一家<strong>国际知名大公司</strong>的工作经验出现在你的履历上，那它无论如何都不会是一个<strong>减分项</strong>。</p>

                <p>2017年的<a href="https://www.samsung.com/cn/" target="_blank"><strong class="red">三星电子</strong></a>，刚刚经历了Note 7 <a href="http://news.imobile.com.cn/articles/2016/1023/172347.shtml" target="_blank"><strong class="red">爆炸事件</strong></a>，在中国市场的销量与口碑每况愈下。但是在全球市场上，其各类终端产品出货量依然<strong>稳居前列</strong>，凭借从上游的半导体、手机芯片，再到中游屏幕、手机模组，直至下游手机、电视等产品的全链路产业链，在消费电子领域持续保持着近乎于<strong class="red">垄断级的地位</strong>。而“<strong>软件开发</strong>”有可能是这家消费电子巨头<strong>最孱弱的业务</strong>。</p>

                <p>在这样的时代背景下，相比于国内的互联网中大厂，手机大厂，三星中国的软件开发岗位<strong>招聘门槛</strong>是<strong class='red'>相对偏低</strong>的。而当时的我，是一个从普通高校毕业，在小公司工作了一年且几乎没学到什么技术的菜鸟程序员，<strong>急需一份大公司履历加持，一个大平台来进阶</strong>。以现在的视野来看，去三星是一个绝佳的，<strong class="red">扭转命运</strong>的机会。</p>

                <p>三星软件开发岗位的面试流程分为<strong>上机考试+面试</strong>两部分，其中机试是<strong class="red">重中之重</strong>，面试更像是走个流程。</p>

                <p>机试实际就是上机代码考试，考察内容是基础和中等算法，三星为不同工作年限的应聘者划定了考试难度等级：应届生以及毕业一年之内的应聘者，考试等级为Advance，其难度介于<a href="https://leetcode.cn/" target="_blank"><strong class="red">LeetCode</strong></a> Easy和Medium之间。毕业一年以上的社招应聘者，考试等级为Professional，难度介于Medium和Hard之间。</p>

                <p>当时毕业不到一年的我被划分在应届生的范畴，需要进行Advance级别代码考试，考试时长为3小时，编程语言为<strong>C/C++/Java可选</strong>，3小时内编写完代码并提交通过系统设计的5个input case则通过，一共有三次考试机会，通过方可进入面试。有了JY的先进经验，我早已得知Advance考试的算法范围为<strong>深度优先搜索DFS、广度优先搜索BFS，以及二分查找</strong>之中。那是我第一次接触算法，当时公司的不能上网，只有一个VC++ 6.0的IDE，于是我打听了JY考试的原题，同时在手机上搜一些经典算法题，然后在公司的单机电脑上手撕代码。</p>

                <p>最终我花费了<strong class="red">两次机会</strong>来通过Advance考试。第一次去考试的时候发生了一个小插曲，在考试进行到2.5小时的时候，我已经通过了4个case，正在调试第五个case的时候，不小心<strong class="red">一脚踢断</strong>了电脑主机的地插电源，而我又从头至尾没有注意过还有一个Save按钮，于是所有代码都丢掉了，剩下半小时也全然不够我重新编程调试，直接放弃掉了第一次考试。好在有了充分的准备，第二次考试有惊无险在两个小时左右提交通过，进入了面试后，三位面试官也没有难为只有十个月工作经验的我，只是我至今已经对那个我没有答上来的问题记忆犹新：</p>

                <p><strong>“ C++里的基类指针能不能指向派生类对象？”</strong></p>

                <h2>服务它</h2>

                <h3>成长</h3>

                <p>入职三星的第一个星期，在熟悉了公司环境，搭建好开发环境后，Team Leader丢给我一沓厚厚的<strong class="red">纯英文文档</strong>。</p>

                <p>后来我知道，这一沓文档是三星自主研发的<a href="https://www.tizen.org/" target="_blank"><strong class="red">Tizen OS</strong></a>所使用的EFL UI框架官方文档，是的，三星虽然是Android手机的销量冠军，但我所在的移动开发部负责的主要业务是基于Tizen OS的智能手机软件研发。Tizen是英特尔与三星共同研发的移动端操作系统，使用C/C++/C#开发，<strong>优点是功耗小、占内存低，可以有效节省硬件成本，缺点是除了官方文档之外，几乎没有任何参考资料，系统生态也相对封闭，少有三方开发者。</strong>当时的三星正面向全球时长，在手机/手表/电视等终端产品上<strong class="red">试水</strong>这个系统。</p>

                <p>我所在的项目组，负责的是Tizen智能手机桌面应用的研发，包括<strong>主屏幕，壁纸，锁屏，相册</strong>等。三星的软件研发有明确的项目周期，而我所在的三星中国研究所，对于项目前期的规划和预研是<strong class="red">没有主导权</strong>的，所以当部门接到项目时，这个项目就已经进入了"商品化"阶段，也就是根据UI/交互设计，开始Coding实现软件需求的阶段。而过了“商品化阶段”后，会有不定长的"维护期"，在维护期里偶尔会有一些时长BUG需要修改，大部分时间没什么必要业务，所以同事们都在搞一些兴趣小组，做一做<strong>预研课题，写专利，或者摸鱼。</strong></p>

                <p>在入职的时间点，正赶上了“商品化”阶段的结束，“维护期”阶段的开始，除了偶尔Team Leader分配几个BUG改一改，其他时间都没有工作安排，加之刚从前东家的阴影中走出来，便开始<strong class="red">放飞自我</strong>。很清楚地记得，在10月的一整个月里，<strong>我没有接到任何的工作安排</strong>，于是上班内容变成了微博、知乎冲浪，现在看来，这是<strong class="red">何等的浪费</strong>啊！</p>

                <p>这样的异常节奏持续到了11月底，部门接到通知，三星的Tizen手机业务线将<strong class="red">全部砍掉</strong>，我们大家，要一起去做手表了。在换了组，迁移了项目之后，我也进入了相对正常的，接近饱和的工作状态：解Bug，做需求，独立承接一些模块的开发，参与从零开始的架构设计。开发任务之外，写专利，参加兴趣小组，组织部门活动，生活过得精彩纷呈。2018年，我通过了Professional级别代码考试，并开始在部门内部担任算法培训组织者和讲师，从Coder到Instructor的转变，给了我更多的<strong>成就感与满足感</strong>。</p>

                <h3>变化</h3>

                <p>如果只能用一个词语来浓缩三星的工作体验，那么这个词一定是——<strong class='red'>变化</strong>。</p>

                <p>三星的前社长有句名言：<strong>“除了老婆孩子不变，其他一切都要变。"</strong>，这句看似夸张的口号实际上真真切切地投射在了三星员工的实际工作当中。为三星服务的两年又三个月，我经历了多次项目变更，座位变更，部门架构调整，老同事们都说每年做的东西都不一样，有些人觉得很有意思，很新鲜，有些人觉得不能长期深耕某个领域，不利于长期发展。总之，在三星，<strong class="red">唯一不变的，是变化。</strong></p>

                <p>2019年3月，我经历了进入公司以来<strong>最大的组织架构调整</strong>，移动开发部门被拆分，而我所在的可穿戴软件开发项目组，被整体迁移，和浏览器应用&引擎开发项目共同组件了一个新的部门。一时间，谣言四起，多方小道消息都指向可穿戴软件开发业务会近乎<strong class="red">全线迁出中国，</strong><strong>只保留一小部分必要的本地化需求人力。</strong></p>

                <p>果不其然，在6月完成了一轮商品化开发后，手表开发业务进入了<strong>停滞阶段</strong>——在三星，<strong class="red">项目停滞</strong>绝不是一件好事。我所在的三星中国研究所，本质上更像是韩国总部的外包，总部每年会制定好下一整年的项目计划和人力预算给到中国研究所。而项目停滞了，很可能意味着总部将不会再提供相应项目的人力预算。<strong>简单来说，我们有40个人做手表项目，如果这个项目明年要转走，那么这40个人要么换组到其他人力预算有缺口的项目组，要么被待业，或者解除劳动合同，很残酷，也很无奈。</strong></p>

                <p>7月，部门主管从韩国总部对口的部门拿到了三星手环的硬件，并配有一套非常稀烂的UI。这套UI是基于<a href="https://zhuanlan.zhihu.com/p/86861756" target="_blank"><strong class="red">RTOS</strong></a> (Real-Time Operation System)开发的，主管说手环是我们的demo项目，想要做出一番进展，<strong>争取到明年项目和人力预算。</strong></p>

                <h3>冲刺</h3>

                <p>手环的demo项目开始后，我加入了<strong>UI框架小组</strong>。把玩了设备，阅读了源码，我发现这个项目的UI框架是一个空壳——只有一些最基础的文字、图片组件，<strong>没有页面组件、没有事件分发、没有硬件交互能力</strong>。接手这样一个<strong class="red">烂摊子</strong>，实在不是一个容易的任务。</p>

                <p>较低的起点同时意味着较大的进步空间，薄弱的基础建设也意味着在上面耕耘的人们有了<strong class="red">Being a maker</strong>的机会。肩负艰巨任务，我开始<strong>一行不漏得阅读源码，下探到硬件驱动，图像渲染，深入底层原理，再从土地里生根发芽，封装了事件分发、页面管理、动画、滑动等手环的核心模块</strong>，对照着已经在欧洲上市的<a href="https://www.samsung.com/cn/watches/galaxy-fit/galaxy-fit2-black-bluetooth-sm-r220nzkachc/" target="_blank"><strong class="red">Galaxy Fit</strong></a>手环，在UI层面上，我们几乎一比一复刻了其主题功能界面，<strong>在流畅度和平顺性上甚至更胜一筹。</strong></p>

                <p>当我们拍下和Galaxy Fit的对比视频，发给韩国总部的项目Leader时，他的形容是“<strong class="red">Amazing! Wonderful!</strong> ”，并向我们索要了代码补丁。这是我在三星工作最有成就感的时刻，我猜想如果我们能继续<strong>打通传感器，蓝牙等模块，也许未来真的有机会商品化落地这个项目</strong>，而我们这些地基的<strong class="red">铸造者</strong>便会是引领项目的那群人。</p>

                <p>可是有些故事在开头时便注定了结尾。手环项目在部长去韩国总部的demo上并<strong>没有争取到项目和人力资源</strong>。9月，部长找到我们几个在手环项目上有所表现的同事，告诉我们接下来会把我们转移到别的项目组。</p>

                <p><strong>故事讲到这里，离开似乎变成了注定。</strong></p>

                <h2>离开它</h2>

                <p>在经历了<strong>三次项目破产</strong>，即将第四次切换项目组的时间点上，<strong>南京手机厂商圈子里发生了一件不小的事</strong>：</p>

                <p>Android阵营销量前三的<a href="https://oppo.com" target="_blank"><strong class="red">OPPO</strong></a>，在南京组建了研发中心，主营音视频&流媒体，<strong>系统优化与游戏优化</strong>，以及智能互联业务。而系统与游戏优化的部门负责人，正是我前移动开发部门的部长。虽然是老领导带队，但彼时的我<strong>没有半点Android开发经验</strong>，此时<strong class="red">那道光</strong>——JY同学再度登场了。进入三星之后，JY被分到了<strong>Android系统优化项目组</strong>，这是三星中国研究所为数不多的，能够和市场<strong class="red">主流技术</strong>对口的项目。再一次，在JY的推波助澜下，我的简历通过他的主管，被递到了老领导那里，最终<strong>拿到了Offer</strong>。加入OPPO的详情会写在下一篇。</p>

                <p><strong>两年又三个月的三星生涯，我有如下收获：</strong></p>

                <div>
                    <li>具备了中级工程师水平的<strong class="red">面向对象</strong>语言<strong>编程能力</strong>，和入门基本的系统设计能力；</li>
                    <li>对<strong>移动端智能操作系统框架与应用开发</strong>具备了一定的认知，同时掌握了<strong class="red">Git</strong>这项必备技能；</li>
                    <li>计算机基础得到提升，掌握了<strong>常见算法与数据结构</strong>，个人的<strong class="red">知识体系</strong>框架开始构建。</li>
                </div>

                <p>与此同时，我还结交了一群<strong>优秀又可爱的同事</strong>，在我职业道路上起到<strong>榜样作用</strong>的领导，并和<strong>我的妻子相知相识相恋。</strong></p>

                <p>离职的那一天，我发了一条朋友圈：</p>

                <p><strong>
                    谢谢你在水深火热时接纳我，<br>
                    谢谢你在煦日和风中送别我。<br>
                    你好，再见！
                </strong></p>

                <p><strong> - 未完待续 - </strong></p>

                <div class="ending">
                    <div class="photos">
                        <div class="left">
                            <img src="./assets/ss_1.jpg" alt="">
                            <img src="./assets/ss_3.jpg" alt="">
                        </div>
                        <div class="right">
                            <img src="./assets/ss_2.jpg" alt="">
                        </div>
                    </div>
                    <p><strong>每个梦都像任意门往不同世界。<br>
                        而你的故事，现在正是起点。</strong></p>
                </div>
            </div>
            <CardFooter :content="{left:'2022/06/18',right:'#扬帆，启航。'}"/>
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
    background-image: url(./assets/ss.png);
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

            h1,h2,h3 {
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

                .photos {
                    display: flex;

                    .left {
                        flex: 1;

                        img {
                            width: 95%;
                        }
                    }

                    .right {
                        flex: 1;

                        img {
                            width: 80%;
                        }
                    }
                }
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
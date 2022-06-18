<template>
    <div class="profile">
        <img src="../assets/avatar.jpg" alt="">

        <div class="name">{{name}}</div>

        <div class="sign">{{sign}}</div>

        <div class="aboutme title" @click="$router.push('./Article-01')">About Me</div>

        <div class="content">
            <li v-for="(item, index) in prop" :key="index">{{prop[index]}}</li>
        </div>

        <div class="findme title">Find Me Here</div>

        <div class="content">
            <div v-for="(item, index) in findme" :key="index">
                <span :class="findme[index].iconClass"></span>
                <span><a :href="findme[index].url" target="_blank">{{findme[index].text}}</a></span>
            </div>
        </div>

        <div class="Friends title">
            Friends
        </div>

        <div class="content">
            <span v-for="(item, index) in friends" :key="index"><a :href="friends[index].url" target="_blank">{{friends[index].name}}</a></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Bojun Chai",
            sign: "即使缓慢，但步履不停。",
            prop: ["正在奔三的微软工程师", "业余吉他手/鼓手/贝斯手/唱作人",
                "最喜欢做的事情是“动脑子”", "一个新生男孩的爸爸"],
            findme: [
                {
                    iconClass: ["iconfont", "icon-changge"],
                    url: "https://music.163.com/#/user/home?id=370053934",
                    text: "Songwriter - NetEase Cloud Music"
                },
                {
                    iconClass: ["iconfont", "icon-yinle"],
                    url: "https://music.163.com/#/user/home?id=67230984",
                    text: "YouthSquare Band"
                },
                {
                    iconClass: ["iconfont", "icon-shipin"],
                    url: "https://space.bilibili.com/89096037?spm_id_from=333.1007.0.0",
                    text: "YouthSquare Band - Bilibili"
                },
                {
                    iconClass: ["iconfont", "icon-github"],
                    url: "https://github.com/BooojChai",
                    text: "BooojChai - Github"
                }
            ],
            friends: [
                {
                    url: "https://github.com/daviddwlee84",
                    name: "David Lee"
                },
                {
                    url: "https://www.qzq.at/",
                    name: "Samuel Qian"
                },
                {
                    url: "https://music.163.com/#/user/home?id=1515499305",
                    name: "强倩Airice"
                },
                {
                    url: "https://space.bilibili.com/23261993/?spm_id_from=333.999.0.0",
                    name: "强倩Airice - Bilibili"
                },
                {
                    url: "http://eureka-moment-fm.com/",
                    name: "Eureka Moment"
                },
                {
                    url: "https://space.bilibili.com/1526622975",
                    name: "ReturnTrue - Bilibili"
                },
                {
                    url: "https://aka.ms/returntrue",
                    name: "ReturnTrue - HomePage"
                }
            ]
        }
    },
}
</script>

<style lang="less" scoped>
    .profile {
        width: 300px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            margin-top: 10px;
            width: 200px;
            height: 200px;
            border-radius: 10px;
        }

        .name {
            font-size: 28px;
            color: #AFAFAF;
            margin-top: 10px;
        }

        .title {
            margin-top: 15px;
            font-size: 20px;
            line-height: 40px;
            width: 100%;
            border-top: 1px solid;
            border-image: linear-gradient(to right, rgba(66,66,66,.9), rgba(66,66,66,.1)) 1;
        }

        .title:hover {
            color: #B7452f;;
        }

        .content {
            width: 100%;

            span {
                margin-right: 15px;
            }
        }

        .content a:hover {
            color: #B7452f;
        }
    }
</style>
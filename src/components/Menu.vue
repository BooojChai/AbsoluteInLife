<template>
    <div class="menu">
        <div class="menu-item" v-for="(item, index) in items" :key="index" :class="{'active':items[index].isActive}"
        :style="{backgroundImage: 'linear-gradient(to right, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url('+ items[index].backgroudImg +')'}"
         @mouseover="handleMouseOver(index)">
            <div class="text">
                {{items[index].text}}
            </div>
            <transition name="word-trans">
                <div class="word" v-show="items[index].isActive">
                    {{items[index].word}}
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: "career",
                    text: "Professional \n Career",
                    word: "前路依然遥远",
                    backgroudImg: require('../assets/career.jpg'),
                    target: "CareerPage",
                    isActive: true
                },
                {
                    name: "note",
                    text: "Informal \n Essay",
                    word: "最重要的小事",
                    backgroudImg: require('../assets/note.jpg'),
                    target: "NotePage",
                    isActive: false
                },
                {
                    name: "tech",
                    text: "Technology \n Science",
                    word: "软核技术分享",
                    backgroudImg: require('../assets/tech.jpg'),
                    target: "TechPage",
                    isActive: false
                },
                {
                    name: "music",
                    text: "Live & Life, \n  Music",
                    word: "只有音乐才是解药",
                    backgroudImg: require('../assets/music.jpg'),
                    target: "MusicPage",
                    isActive: false
                },
                {
                    name: "sharing",
                    text: "Sharing \n Love",
                    word: "促膝长谈，畅聊一切",
                    backgroudImg: require('../assets/sharing.jpg'),
                    target: "SharingPage",
                    isActive: false
                },
            ]
        }
    },
    methods: {
        handleMouseOver(index) {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].isActive = false
            }

            this.items[index].isActive = true
            this.$router.push({name:this.items[index].target})
        }
    },
}
</script>

<style lang="less" scoped>
    .menu {
        display: flex;
        height: 70px;
        border: 2px solid #282828;
        border-radius: 10px;
        overflow: hidden;
        margin: 10px;

        .menu-item {
            flex: 1;
            float: left;
            position: relative;
            border-right: 1px solid #181818;
            background-size: cover;
            padding: 10px;
            transition: all 1s;
            white-space: pre;
            overflow: hidden;

            .word-trans-enter, .word-trans-leave-to {
                padding-right: 20px;
                opacity: 0;
            }

            .word-trans-enter-active, .word-trans-leave-active {
                transition: all 1.2s;
            }

            .word {
                position: absolute;
                bottom: 8px;
                right: 10px;
                font-size: 16px;
                font-weight: 600;
                font-family: "shouxie";
            }
        }

        .menu-item:last-child {
            border: none
        }

        .active {
            flex: 2;
        }
    }
</style>
<template>
    <div class="menu">
        <div class="career"></div>
        <div class="note"></div>
        <div class="tech"></div>
        <div class="music"></div>
        <div class="sharing"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .menu {
        display: flex;
        height: 71px;
        border: 2px solid #282828;
        border-radius: 10px;
        overflow: hidden;
        margin: 10px;

        div {
            flex: 1;
            border-right: 2px solid #282828;
            transition: all 1s;
            background-size: cover;
        }

        div:last-child {
            border: none
        }

        div:hover {
            flex: 2.5;
        }

        .career {
            background-image: linear-gradient(to right, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url(../assets/career.jpg);
        }

        .note {
            background-image: linear-gradient(to right, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url(../assets/note.jpg);
        }

        .tech {
            background-image: linear-gradient(to right, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url(../assets/tech.jpg);
        }

        .music {
            background-image: linear-gradient(to right, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url(../assets/music.jpg);
        }

        .sharing {
            background-image: linear-gradient(to right, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url(../assets/sharing.jpg);
        }
    }
</style>
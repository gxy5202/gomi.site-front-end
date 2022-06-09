<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <div id="gomi-video-roll">
        <Menu :isFixed="true"></Menu>
        <div class="">
            VideoRoll
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Menu from "../components/Menu.vue";

export default defineComponent({
    name: "VideoRoll",
    setup() {
        return {
        };
    },
    components: {
        Menu,
    },
});
</script>

<style lang="scss">
@import "../scss/var.scss";

#gomi-light-ruler {
    background-color: $cardColor;
    height: 100%;
    position: relative;
    display: flex;
    padding: 30px;
    padding-top: 50px;

    #demo-title {
        img {
            transform: scale(0.4);
        }
    }

    #box {
        z-index: 0;
        // box-shadow: 0px 5px 25px $highLightColor;

        #content {
            padding: 80px;
            color: #fff;
        }
    }

    #demo-control {
        margin-left: 30px;

        .icon {
            width: 30px;
            height: 30px;
        }
    }

    .demo-link {
        font-size: 20px;
    }

    .demo-control-item {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;

        .demo-control-item-label {
            margin-right: 15px;
        }
    }
}
</style>
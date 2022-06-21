<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <div id="gomi-video-roll">
        <Menu :isFixed="true"></Menu>
        <div class="">
            <div class="gomi-video-roll-banner">
                <img />
            </div>
            <div>
                <ul>
                    <li v-for="(item, index ) in features" :key="index"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Menu from "../components/Menu.vue";

export default defineComponent({
    name: "VideoRoll",
    setup() {
        const features = ref(['', '', '', '']);
        return {
            features
        };
    },
    components: {
        Menu,
    },
});
</script>

<style lang="scss">
@import "../scss/var.scss";
</style>
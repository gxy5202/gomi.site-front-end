<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <div id="gomi-video-roll">
        <div class="q-pa-md">
            <q-carousel
                        v-model="slide"
                        vertical
                        transition-prev="slide-down"
                        transition-next="slide-up"
                        swipeable
                        dark
                        arrows
                        animated
                        control-color="white"
                        navigation
                        padding
                        v-model:fullscreen="isFullScreen"
                        height="100%"
                        class="bg-grey-10 text-white shadow-1 rounded-borders">
                <FirstPage :name="data.first"></FirstPage>
                <SecondPage :name="data.second"></SecondPage>
                <ThirdPage :name="data.third"></ThirdPage>
                <FourthPage :name="data.fourth"></FourthPage>
            </q-carousel>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FirstPage from "./FirstPage.vue";
import SecondPage from "./SecondPage.vue";
import ThirdPage from "./ThirdPage.vue";
import FourthPage from "./FourthPage.vue";

export default defineComponent({
    name: "VideoRoll",
    setup() {
        const data = ref({
            first: 'first',
            second: 'second',
            third: 'third',
            fourth: 'fourth',
        })
        return {
            data,
            isFullScreen: true,
            slide: ref('first'),
        };
    },
    components: {
        FirstPage,
        SecondPage,
        ThirdPage,
        FourthPage
    },
});
</script>

<style lang="scss">
@import "../../scss/var.scss";
</style>
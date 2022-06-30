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
                        animated
                        control-color="white"
                        navigation-icon="radio_button_unchecked"
                        navigation
                        padding
                        v-model:fullscreen="isFullScreen"
                        height="100%"
                        class="bg-deep-purple-11 text-white shadow-1 rounded-borders">
                <q-carousel-slide v-for="item in features" :key="item.id" :name="item.id"
                                  class="column no-wrap flex-center">
                    <!-- <q-icon name="style" size="56px" /> -->
                    <img class="video-roll-logo" v-if="item.img" :src="item.img" />
                    <div class="q-mt-md text-center">
                        <p>{{ item.textEn }}</p>
                        <p>{{ item.textZh }}</p>
                    </div>
                    <div class="video-roll-download">
                        <q-btn class="bg-grey-10" no-caps color="secondary" icon-right="download"
                               label="Chrome Web Store" />
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "VideoRoll",
    setup() {
        const features = ref([{
            id: 'first',
            img: '/src/assets/imgs/text.png',
            textEn: 'A web extension that can help you rotate a video',
            textZh: '帮助你旋转任何网页中的HTML5视频'
        }, {
            id: 'second',
            text: ''
        }, {
            id: 'third',
            text: ''
        }, {
            id: 'fourth',
            text: ''
        }]);


        return {
            isFullScreen: true,
            slide: ref('first'),
            features
        };
    },
    components: {
    },
});
</script>

<style lang="scss">
@import "../scss/var.scss";

p {
    font-size: 20px;
    font-weight: bold;
}

.video-roll-logo {
    margin-bottom: 50px;
}

.video-roll-download {}
</style>
<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <q-carousel-slide :key="features.id" :name="features.id"
                      class="column no-wrap flex-center">
        <!-- <q-icon name="style" size="56px" /> -->
        <img class="video-roll-logo" :src="features.logo" />
        <div class="video-roll-chrome-info">
            <img
                 src="https://badgen.net/chrome-web-store/users/cokngoholafkeghnhhdlmiadlojpindm?icon=chrome&color=0f9d58" />
            <img
                 src="https://img.shields.io/github/package-json/v/gxy5202/VideoRoll" />
            <img
                 src="https://img.shields.io/github/package-json/license/gxy5202/VideoRoll" />
        </div>
        <div class="q-mt-md text-center">
            <p>{{ features.textEn }}</p>
            <p>{{ features.textZh }}</p>
        </div>
        <div class="video-roll-download">
            <q-btn class="bg-deep-purple-11 glossy" no-caps color="secondary" icon-right="download"
                   label="Chrome Web Store" @click="toChromeStore" />
            <q-btn
                   dense
                   target="_blank"
                   class="glossy"
                   href="https://github.com/gxy5202/VideoRoll"
                   color="white">
                <svg
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                          d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z" />
                </svg>
            </q-btn>
        </div>
    </q-carousel-slide>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "FirstPage",
    setup() {
        const features = ref({
            id: 'first',
            logo: '/imgs/videoRoll.png',
            textEn: 'A web extension that can help you rotate a video',
            textZh: '一款帮助你旋转任何网页中HTML5视频的浏览器插件'
        });

        const toChromeStore = () => {
            window.open('https://chrome.google.com/webstore/detail/video-roll/cokngoholafkeghnhhdlmiadlojpindm', '_blank');
        }

        return {
            toChromeStore,
            features
        };
    }
});
</script>

<style lang="scss">
p {
    font-size: 20px;
    font-weight: bold;
}

.video-roll-logo {
    margin-bottom: 20px;
    transform: scale(0.8);
}

.video-roll-img {
    width: 640px;
    height: 400px;
    margin-bottom: 30px;
    border: 5px solid #fff;

    img {
        width: 100%;
        height: 100%;
    }
}

.video-roll-download {
    width: 250px;
    display: flex;
    justify-content: space-around;

    .icon {
        width: 30px;
        height: 30px;
    }
}

.video-roll-chrome-info {
    width: 300px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}
</style>
<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <q-carousel-slide :key="features.id" :name="features.id"
                      class="column no-wrap flex-center">
        <div class="video-roll-img">
            <img :src="features.img" />
        </div>
        <div class="q-mt-md text-center">
            <p>{{ features.textEn }}</p>
        </div>
    </q-carousel-slide>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "SecondPage",
    setup() {
        const features = ref({
            id: 'second',
            img: '/public/imgs/preview1.png',
            textEn: `Support Youtube/Bilibili/Vimeo/TikTok/Twitter/Weibo/Instagram, etc.`
        });

        return {
            features
        };
    },
    components: {
    },
});
</script>

<style lang="scss">
p {
    font-size: 20px;
    font-weight: bold;
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
</style>
<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <q-carousel-slide key="fourth" name="fourth"
                      class="column no-wrap flex-center">

        <p><b>Video Roll</b> is a completely free and open source application</p>
        <p><b>Video Roll</b> 是一个完全免费并且开源的应用</p>
        <div class="line"></div>
        <div class="video-roll-support">
            <p>Support me by donations</p>
            <p>通过捐赠支持我</p>
        </div>

        <div class="video-roll-pay">
            <div class="video-roll-pay-code">
                <img src="/public/imgs/weChat.jpg" />
                <p>WeChat</p>
            </div>
            <div class="video-roll-pay-code">
                <img src="/public/imgs/mayi.jpg" />
                <p>Alipay</p>
            </div>
        </div>
    </q-carousel-slide>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FourthPage",
    setup() {
    }
});
</script>

<style lang="scss">
.video-roll-support {
    p {
        font-size: 16px;
    }

    margin-top: 40px;
    text-align: center;
}

.line {
    width: 100px;
    height: 1px;
    background-color: #fff;
}

.video-roll-pay {
    display: flex;
    justify-content: space-around;
    width: 540px;
    height: 200px;
    margin-bottom: 30px;

    .video-roll-pay-code {
        text-align: center;

        p {
            margin-top: 5px;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>
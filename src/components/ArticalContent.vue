<!--
 * @description: content
 * @Author: Gouxinyu
 * @Date: 2021-04-18 12:12:32
-->

<template>
    <div id="gomi-articalContent" class="markdown-body" v-html="content"></div>
</template>

<script lang="ts">
import { inject, defineComponent, onUpdated } from "vue";
// import { QIcon } from 'quasar';
import '@quasar/extras/ionicons-v5';
export default defineComponent({
    name: "ArticalContent",
    props: {
        content: {
            type: String,
            default: ""
        }
    },
    setup() {
        // TODO highlight code
        onUpdated(() => {
            // 增加地址转换
            const setMounted = inject('setMounted') as any;
            setMounted();
        })
    }
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-articalContent {
    width: 100%;
    border: 1px solid $cardColor;
    border-radius: 10px;
    background-color: $cardColor;
    padding: 20px;

    @media screen and (min-width: 0) and (max-width: 600px) {
        padding: 10px 0;
        background-color: transparent;
        border: none;
    }
}
</style>